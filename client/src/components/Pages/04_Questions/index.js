import React from 'react'
import './index.scss'

const Questions = ({ nextPage, prevPage, handleChange, answerQuestion }) => (
  <div className="questions-container">
    <div className="questions">
      <p className="questions-para">
        {`The next 2 questions are just to help us get to know you better and won't
      have any effect on your delivery. Thanks!`}
      </p>
      <div style={{ marginBottom: '1rem' }} className="questions-input">
        <input
          type="checkbox"
          name="answerQuestion"
          id="questions"
          onChange={e => handleChange('answerQuestion')(e.target.checked)}
          defaultChecked={answerQuestion}
        />
        <label
          htmlFor="questions"
          style={{ fontWeight: 900, marginLeft: '1rem' }}
        >
          Sure, Happy To Help
        </label>
      </div>
      <div className="row next">
        <button
          type="button"
          onClick={prevPage}
          className="btn col-lg-3 col-md-4 col-sm-6   btn-warning btn-lg"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={answerQuestion ? nextPage : undefined}
          className="btn col-lg-3 col-md-4 col-sm-6 btn-success btn-lg"
          disabled={!answerQuestion}
        >
          Next Page
        </button>
      </div>
    </div>
  </div>
)

export default Questions
