'use client'

function Button({className,name}) {

    const handleClick  = () => (
        console.log("see More")
    )
    return (
        <button className={className} onClick={handleClick}>{name}</button>
    )
}

export default Button;