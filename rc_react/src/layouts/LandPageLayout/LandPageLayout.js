import React from 'react'
import "./LandPageLayout.scss"

export function LandPageLayout(props) {
    const {children} = props;
  return (
    <div>
      <p>LandPageLayout</p>
      {children}
    </div>
  )
}
