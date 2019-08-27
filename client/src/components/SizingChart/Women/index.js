import React, { Component } from 'react'
import './index.scss'

export class SizingChartWomen extends Component {
  render() {
    return (
      <>
      <h3>Women</h3>
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
          <td>5</td>
          <td>35.5</td>
          <td>2.5</td>
          <td>22</td>
          <td>8.6</td>
        </tr>
        <tr>
          <td>6</td>
          <td>36.5</td>
          <td>3.5</td>
          <td>22.9</td>
          <td>9</td>
        </tr>
        <tr>
          <td>7</td>
          <td>38</td>
          <td>4.5</td>
          <td>23.7</td>
          <td>9.3</td>
        </tr>
        <tr>
          <td>8</td>
          <td>39</td>
          <td>5.5</td>
          <td>24.5</td>
          <td>9.6</td>
        </tr>
        <tr>
          <td>9</td>
          <td>40.5</td>
          <td>6.5</td>
          <td>25.4</td>
          <td>10</td>
        </tr>
        <tr>
          <td>10</td>
          <td>42</td>
          <td>7.5</td>
          <td>26.2</td>
          <td>10.3</td>
        </tr>
        <tr>
          <td>11</td>
          <td>43</td>
          <td>8.5</td>
          <td>27.1</td>
          <td>10.6</td>
        </tr>
        <tr>
          <td>12</td>
          <td>44.5</td>
          <td>9.5</td>
          <td>27.9</td>
          <td>11</td>
        </tr>
      </tbody>
    </table>
    </>
    )
  }
}

export default SizingChartWomen
