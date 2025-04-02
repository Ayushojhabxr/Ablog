import React, {useId} from 'react'

const Input = React.forwardRef( function Input({ // yha humne forwardRef use kiya hai kyuki hume parent component se ref lena hai
    // yha humne destructure kiya hai props ko jisme humne label, type, className and baaki props ko liya hai
    label, 
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-2 pl-1 text-sm font-medium text-gray-700' 
            htmlFor={id}>
                {label} 
            </label>
            } 
            <input
            type={type}
            className={`px-4 py-2 rounded-lg bg-gray-100 text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 border border-gray-300 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input