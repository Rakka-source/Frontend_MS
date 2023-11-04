import React from 'react'
import {LoginClient} from '../../pages/Client'
import "./ClientPageLayout.scss"

export function ClientLayout(props) {
    const {children} = props;
    const auth = null;

    if(!auth) return <LoginClient/>

    return (
        <div>
        <p>ClientLayout</p>
        {children}
      </div>
    )
}
