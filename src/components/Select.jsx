import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) { // ref  yha pe pass kiya gaya hai kyuki ye ek forwardRef component hai or isliye ye ref ko use kar sakta hai elemnts ko reference dene ke liye
    const id = useId()
return (
    <div className='w-full'>
            {label && <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-700'>{label}</label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`px-4 py-2 rounded-md bg-gray-100 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-300 w-full ${className}`}
            >
                    {options?.map((option) => (
                            <option key={option} value={option}>
                                    {option}
                            </option>
                    ))}
            </select>
    </div>
)
}

export default React.forwardRef(Select)