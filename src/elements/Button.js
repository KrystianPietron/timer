import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Button = props => (
    <RaisedButton
        label={props.label}
        onClick={props.onClick}
        style={props.style}
    />
)

export default Button