import React from 'react'

const Button = (
    {
        type,
        children,
        className,
        flag,
        onClick,
        dataToggle,
        dataTarget
    }
) => {
    return (
        <button
            type={type}
            className={`btn shadow-none ${className ? className : ""}`}
            disabled={flag}
            onClick={onClick}
            data-toggle={dataToggle}
            data-target={dataTarget}
        >
            {children}
        </button>
    )
}
export default Button