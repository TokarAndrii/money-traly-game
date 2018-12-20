import React from 'react'

const ErrorMessage = ({ className, closeBtnClassName, message, onClose }) => (
    <div className={className}>
        <span className={closeBtnClassName} onClick={onClose}>&times;</span>
        <p><strong>Error! </strong>message not sent! {message} Check all fields to be inputted correct.</p>
    </div>)

export default ErrorMessage;