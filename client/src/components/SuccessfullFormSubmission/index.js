import React from 'react'
import './index.scss'

const SuccessfullFormSubmission = () => (
  <div className="msg-container">
    <div className="success-msg" style={{ textAlign: 'center' }}>
      <p>
        Your form has been submitted successfully, you will recieve the
        confirmation email soon. Note: The email might be in your spam folder as
        well
      </p>
      <h5>Best Regards,</h5>
      <p>Rens Team</p>
    </div>
  </div>
)

export default SuccessfullFormSubmission
