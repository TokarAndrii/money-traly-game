import React from 'react'

const SuccessMessage = ({ className, closeBtnClassName, onClose }) => (
    <div className={className}>
        <span className={closeBtnClassName} onClick={onClose}>&times;</span>
        <p><strong>Success!</strong>Message sent to us, thank You.</p>
    </div>)

export default SuccessMessage;