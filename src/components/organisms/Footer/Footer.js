import React from 'react'
import "./Footer.css"
const ticketMessage=false;
function Footer() {

return (
    <>
    <div className='footer' >
            <div>
                    {
                        ticketMessage === true ?
                            <p style={{ position: "absolute", bottom: "50px", padding: "20px", color: "red" }}>Please raise a FreshService Ticket to Get Access for any of this Application !!!</p>
                            : null
                    }
                  </div>
                  <div className="footer_container">
                  <p className="green-thumb-text">
                  © 2021 Green Thumb Industries (GTI) All Rights Reserved.</p>
                  <p className="app-version-text">App Version 1.81(23-08-2023)</p>
                  </div>
            
            </div>
        </>
  )
}

export default Footer