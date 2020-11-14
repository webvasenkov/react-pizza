import React from 'react'
import classNames from 'classnames'


function Button({className, outline, children, onClick}) {
    const styleBtn = classNames('button', className, {'button--outline': outline})

    return (
        <button className={styleBtn} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button