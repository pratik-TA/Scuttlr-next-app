import React from 'react'
import styles from './OurDetails.module.scss'

function OurDetails() {
    return (
        <div>
            {/* top */}
            <div>
                {/* first */}
                <div>
                    <span>Icon</span>
                    <div>
                        <span>Location</span>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>
                </div>

                {/* second */}
                <div>
                    <span>Icon</span>
                    <div>
                        <span>Email</span>
                        <p>emilycooper@gmail.com</p>
                    </div>
                </div>

                {/* third */}
                <div>
                    <span>Icon</span>
                    <div>
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