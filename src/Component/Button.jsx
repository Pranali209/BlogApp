import React from 'react'

function Button(
    {
        children,
        type = "button",
        bgColor = "bg-blue-950",
        textColor = "text-white",
        className = "",
        ...props

    }
) {
    return (
        <button type={type} className={`${bgColor} ${textColor} ${className} p-3`} {...props}>{children}</button>
    )
}

export default Button