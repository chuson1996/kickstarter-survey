import React from 'react'

const Female = ({ handleShoeChange, shoe, sizingChartFemale }) => {
  return (
    <div className="size">
      {shoe.gender === 'female' && shoe.whichSize === 'us' && (
        <>
          <h4>Select Your Size</h4>
          <select
            onChange={handleShoeChange}
            name="size"
            className="form-control mb-5 whichSize"
            defaultValue={shoe.size}
          >
            <option>Your Size Please</option>
            {sizingChartFemale.us.map((us, usIndex) => (
              <option value={`${us} Us Women`} key={usIndex}>
                {us}
              </option>
            ))}
          </select>
        </>
      )}
      {shoe.gender === 'female' && shoe.whichSize === 'euro' && (
        <>
          <h4>Select Your Size</h4>
          <select
            onChange={handleShoeChange}
            name="size"
            className="form-control mb-5 whichSize"
            defaultValue={shoe.size}
          >
            <option>Your Size Please</option>
            {sizingChartFemale.euro.map((euro, euroIndex) => (
              <option value={`${euro} Euro Women`} key={euroIndex}>
                {euro}
              </option>
            ))}
          </select>
        </>
      )}
      {shoe.gender === 'female' && shoe.whichSize === 'uk' && (
        <>
          <h4>Select Your Size</h4>
          <select
            onChange={handleShoeChange}
            name="size"
            className="form-control mb-5 whichSize"
            defaultValue={shoe.size}
          >
            <option>Your Size Please</option>
            {sizingChartFemale.uk.map((uk, ukIndex) => (
              <option value={`${uk} Uk Women`} key={ukIndex}>
                {uk}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  )
}

export default Female
