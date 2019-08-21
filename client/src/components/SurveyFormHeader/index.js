import React from 'react'
import rensLogo from '../../assets/rensLogo.png'

const SurveyFormHeader = () => {
  return (
    <div className="py-5 text-center">
      <img
        className="rens-logo"
        src={rensLogo}
        alt="rens logo"
        style={{ width: 125, marginBottom: '2rem' }}
      />
      <h2>Kickstarter Survey Form</h2>
      <p className="lead">
        `Below is an example form built entirely with Bootstraps form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.`
      </p>
    </div>
  )
}
export default SurveyFormHeader
