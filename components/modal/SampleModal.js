import React, { useState } from 'react'
function SampleModal(props) {

    return (
        <>
            {/* <!-- Modal --> */}
            {
                props.openModal ?
                    <div div className="modal fade modalShow show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                        onClick={() => { props.closetoggal(false) }}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <h6 className='mb-2' > Name: {props.data.name} </h6>
                                    <h6 className='mb-2' >Age: {props.data.age} </h6>
                                    <h6 className='mb-2' >Company: {props.data.company} </h6>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={() => { props.closetoggal(false) }}
                                    >Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div >
                    : ""
            }
        </>
    )
}

export default SampleModal
