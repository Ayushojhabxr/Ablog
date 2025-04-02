import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import authService from "../appwrite/auth";

// data 
// Async thunk to fetch authenticated user data from Appwrite
export const fetchUserData = createAsyncThunk("auth/fetchUserData", async () => {
  try {
    const user = await authService.getCurrentUser(); // Fetch user data from Appwrite
    if (user) {
      return { userId: user.$id, fullName: user.name, email: user.email };
    }
    throw new Error("User not authenticated");
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
});






const initialState = {
    status:false ,
  userData: null,
  loading: false, // ✅ Added missing `loading`
  error: null, // ✅ Added error handling
}


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login : (state, action) => {
      state.status = true;
        state.userData = action.payload;
        state.error = null;
    },
    logout : (state) => {
      state.status = false;
      state.userData = null;
      state.error = null;
  },
},

// aaded part to handle async thunk

extraReducers: (builder) => {
  // Handling async user data fetching
  builder
    .addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.error = null; // Set loading to true when fetching data
    })
    .addCase(fetchUserData.fulfilled, (state, action) => {
      state.status = true; // Set status to true when user data is fetched successfully
      state.userData = action.payload; // Store fetched user data
      state.loading = false; 
      state.error = null;// Reset loading state
    })
    .addCase(fetchUserData.rejected, (state, action) => {
      state.status = false; // Ensure user is marked as logged out if fetching fails
      state.userData = null; // Clear user data on error
      state.loading = false; // Reset loading state
      state.error = action.payload || "Failed to fetch user data";  // Store error message
    });
},


//
});






export const { login, logout } = authSlice.actions;
// this is to manage the state of user login and logout

export default authSlice.reducer;