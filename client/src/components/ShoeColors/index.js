import React from 'react'

class ShoeColors extends React.Component {
  render() {
    const { shoeColors, handleShoeChange } = this.props

    return (
      <>
        {shoeColors.map((shoe, i) => {
          return (
            <div key={i} className="collections">
              <label>{shoe.name}</label>
              <img
                src={shoe.src}
                alt={shoe.name}
                value={shoe.name}
                name={shoe.name}
                onChange={() => handleShoeChange(i, shoe.name)}
              />
            </div>
          )
        })}
      </>
    )
  }
}

export default ShoeColors
