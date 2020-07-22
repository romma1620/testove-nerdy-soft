import React from "react";

export const Button = props => {
    const {
        id,
        type = 'button',
        onClick,
        label = "Click me",
        className = "btn-primary"

    } = props;

    const onClickHandler = e => {
        onClick && onClick(e);
    };

    return (
        <button
            className={`btn ${className}`}
            id={id}
            onClick={onClickHandler}
            type={type}
            >
            {label}
        </button>
)

}
