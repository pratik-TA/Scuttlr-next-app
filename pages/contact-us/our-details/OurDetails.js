import React from 'react'
import st from './OurDetails.module.scss'
import Vector1 from "../Scuttlr (Copy) (1)/Vector-1.svg"
import Vector from "../Scuttlr (Copy) (1)/Linear/Call/Vector.svg"

function OurDetails() {
    return (
        <div className={`${st.followtUs}`}>
            {/* top */}
            <div className={`${st.leftFollow}`}>
                {/* first */}
                <div className={`${st.followContainer}`}>
                    <span className={`${st.followLeft}`}><img src={Vector1.src} class="" alt=""/></span>
                    <div className={`${st.followRight}`}>
                        <span>Location</span>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>
                </div>

                {/* second */}
                <div className={`${st.followContainer}`}>
                    <span className={`${st.followLeft}`}>Icon</span>
                    <div className={`${st.followRight}`}>
                        <span>Email</span>
                        <p>emilycooper@gmail.com</p>
                    </div>
                </div>

                {/* third */}
                <div className={`${st.followContainer}`}>
                    <span className={`${st.followLeft}`}><img src={Vector.src} class="" alt=""/></span>
                    <div className={`${st.followRight}`}>
                        <span>Phone</span>
                        <p>+91 9998547895</p>
                    </div>
                </div>


            </div>


            {/* bottom */}
            <div>
                <h3>Follow Us</h3>
                <div>
                    <span>facebook </span>
                    <span>twitter </span>
                    <span>linkedIn </span>
                    <span>instagram </span>
                </div>
            </div>
        </div>
    )
}

export default OurDetails