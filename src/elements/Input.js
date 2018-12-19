import React from 'react'
import TextField from 'material-ui/TextField'

const Input = props => (
    <TextField
        value={props.value}
        onChange={props.onChange}
        label={props.label}
        style={props.style}
        floatingLabelText={props.floatingLabelText}
        type={props.type}
        hintText={props.hintText}
    />
)
export default Input