import React from 'react'
import "./ClientPageLayout.scss"

export function ClientLayout(props) {
    const {children} = props;
    return (
        <div>
        <p>ClientLayout</p>
        {children}
      </div>
    )
}
