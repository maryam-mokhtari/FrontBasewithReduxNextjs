import React, { Component } from 'react'

export default class SearchMap extends Component {
  render() {
    return (
      <div id="search-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d83327.35775774116!2d-123.19394370813586!3d49.257826320291606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x548673cfb131a545%3A0x5051ad303db5ae1a!2s1333+Johnston+St%2C+Vancouver%2C+BC+V6H+3R9%2C+Canada!3m2!1d49.2705243!2d-123.1323736!5e0!3m2!1sen!2s!4v1556028907350!5m2!1sen!2s"
          width="100%"  frameBorder="0" style={{border:0, height: 'calc(100vh - 3rem)'}} allowFullScreen>
        </iframe>
      </div>
    )
  }
}
