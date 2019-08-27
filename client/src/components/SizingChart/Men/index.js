import React, { Component } from 'react'
import './index.scss'

export class SizingChartMen extends Component {
  render() {
    const { shoeChange, name, value } = this.props
    console.log({ value })
    return (
      <>
        <h3>Men</h3>
        <table className="blueTable">
          <thead>
            <tr>
              <th>US(Size)</th>
              <th>Euro(Size)</th>
              <th>Uk(Size)</th>
              <th>Cm(Foot Length)</th>
              <th>Inches(Foot Length)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="4 Us Men"
                  onChange={shoeChange}
                />
                4
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="36 Euro Men"
                  onChange={shoeChange}
                />
                36
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="3.5 Uk Men"
                  onChange={shoeChange}
                />
                3.5
              </td>
              <td>22</td>
              <td>8.6</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="5 Us Men"
                  onChange={shoeChange}
                />
                5
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="37.5 Euro Men"
                  onChange={shoeChange}
                />
                37.5
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="4.5 Uk Men"
                  onChange={shoeChange}
                />
                4.5
              </td>
              <td>22.9</td>
              <td>9</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="6 Us Men"
                  onChange={shoeChange}
                />
                6
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="38.5 Euro Men"
                  onChange={shoeChange}
                />
                38.5
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="5.5 Uk Men"
                  onChange={shoeChange}
                />
                5.5
              </td>
              <td>23.7</td>
              <td>9.3</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="7 Us Men"
                  onChange={shoeChange}
                />
                7
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="40 Euro Men"
                  onChange={shoeChange}
                />
                40
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="6 Uk Men"
                  onChange={shoeChange}
                />
                6
              </td>
              <td>24.5</td>
              <td>9.6</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="8 Us Men"
                  onChange={shoeChange}
                />
                8
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="41 Euro Men"
                  onChange={shoeChange}
                />
                41
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="7 Uk Men"
                  onChange={shoeChange}
                />
                7
              </td>
              <td>25.4</td>
              <td>10</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="9 Us Men"
                  onChange={shoeChange}
                />
                9
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="42.5 Euro Men"
                  onChange={shoeChange}
                />
                42.5
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="8 Uk Men"
                  onChange={shoeChange}
                />
                8
              </td>
              <td>26.2</td>
              <td>10.3</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="10 Us Men"
                  onChange={shoeChange}
                />
                10
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="44 Euro Men"
                  onChange={shoeChange}
                />
                44
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="9 Uk Men"
                  onChange={shoeChange}
                />
                9
              </td>
              <td>27.1</td>
              <td>10.6</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="11 Us Men"
                  onChange={shoeChange}
                />
                11
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="45 Euro Men"
                  onChange={shoeChange}
                />
                45
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="10 Uk Men"
                  onChange={shoeChange}
                />
                10
              </td>
              <td>27.9</td>
              <td>11</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="12 Us Men"
                  onChange={shoeChange}
                />
                12
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="46 Euro Men"
                  onChange={shoeChange}
                />
                46
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="11 Uk Men"
                  onChange={shoeChange}
                />
                11
              </td>
              <td>28.8</td>
              <td>11.3</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="13 Us Men"
                  onChange={shoeChange}
                />
                13
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="47.5 Euro Men"
                  onChange={shoeChange}
                />
                47.5
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="12 Uk Men"
                  onChange={shoeChange}
                />
                12
              </td>
              <td>29.6</td>
              <td>11.6</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="14 Us Men"
                  onChange={shoeChange}
                />
                14
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="48.5 Euro Men"
                  onChange={shoeChange}
                />
                48.5
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="13 Uk Men"
                  onChange={shoeChange}
                />
                13
              </td>
              <td>30.5</td>
              <td>12</td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="15 Us Men"
                  onChange={shoeChange}
                />
                15
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="49.5 Euro Men"
                  onChange={shoeChange}
                />
                49.5
              </td>
              <td>
                <input
                  type="radio"
                  name={name}
                  value="14 Uk Men"
                  onChange={shoeChange}
                />
                14
              </td>
              <td>31.3</td>
              <td>12.3</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

export default SizingChartMen
