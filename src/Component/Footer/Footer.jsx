import React from 'react'
import "../Footer/Footer.css"
const Footer = ({data,style}) => {
  return (
    <>
      <footer style={{style}}>
        <div className="footer-box">
          {data}
        </div>
      </footer>
    </>
  )
}

export default Footer