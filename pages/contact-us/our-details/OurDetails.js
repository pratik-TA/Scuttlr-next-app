import React from 'react'
import st from './OurDetails.module.scss'
import map from "../icon/map.svg"
import message from "../icon/message.svg"
import call from "../icon/call.svg"
import facebook from "../icon/facebook.svg"
import twitter from "../icon/twitter.svg"
import linkdin from "../icon/linkdin.svg"
import instagram from "../icon/instagram.svg"

function OurDetails() {
    return (
        <div className={`${st.followtUs}`}>
            {/* top */}
            <div className={`${st.leftFollow}`}>
                {/* first */}
                <div className={`${st.followContainer}`}>
                    <span className={`${st.followLeft}`}><img src={map.src} class="" alt=""/></span>
                    <div className={`${st.followRight}`}>
                        <span>Location</span>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>
                </div>

                {/* second */}
                <div className={`${st.followContainer}`}>
                    <span className={`${st.followLeft}`}><img src={message.src} class="" alt=""/></span>
                    <div className={`${st.followRight}`}>
                        <span>Email</span>
                        <p>emilycooper@gmail.com</p>
                    </div>
                </div>

                {/* third */}
                <div className={`${st.followContainer}`}>
                    <span className={`${st.followLeft}`}><img src={call.src} class="" alt=""/></span>
                    <div className={`${st.followRight}`}>
                        <span>Phone</span>
                        <p>+91 9998547895</p>
                    </div>
                </div>


            </div>


            {/* bottom */}
            <div className={`${st.followtBottom}`}>
                <h3>Follow Us</h3>
                <div>
                    <span><img src={facebook.src} class="" alt=""/> </span>
                    <span><img src={twitter.src} class="" alt=""/> </span>
                    <span><img src={linkdin.src} class="" alt=""/> </span>
                    <span><img src={instagram.src} class="" alt=""/> </span>
                </div>
            </div>
        </div>
    )
}

export default OurDetails