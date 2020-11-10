import React from 'react'
import classNames from 'classnames'
import {NavLink} from "react-router-dom";

function Button({className, outline, children, onClick}) {
    const styleBtn = classNames('button', className, {'button--outline': outline})
    const click = onClick

    return (
        <NavLink to='/cart' className={styleBtn} onClick={click}>
            {children}
        </NavLink>
    )
}

export default Button