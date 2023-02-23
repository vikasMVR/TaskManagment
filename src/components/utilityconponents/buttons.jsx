import React from "react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

export function Btn({ children, type, className, ...props }) {
    return (
        <button
            type={type}
            className={clsx(
                'Btn',
                className,
                "duration-200 ease-in",
            )}
            {...props}>
            {children}
        </button>
    )
}

export function LinkBtn({ children, type, link, className, ...props }) {
    return (
        <Link
            to={link}>
            <button
                type={type}
                className={clsx(
                    'Btn',
                    className,
                    "duration-200 ease-in",
                )}
                {...props}>

                {children}

            </button>
        </Link>
    )
}

export function NavLinkBtn({ children, type, link, className, ...props }) {
    return (
        <NavLink
            type={type}
            to={link}
            className={clsx(
                'Btn',
                className,
                "duration-200 ease-in",
            )}
            {...props}>
            {children}
        </NavLink>
    )
}
