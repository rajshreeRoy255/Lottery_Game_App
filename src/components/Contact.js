import React from 'react'



const Contact = () => {
    return (
        <>
            <div className="container  contact_section text-center my-5 d-flex justify-content-center align-item-center">
                <div className="">
                    <h1 className='tagLine'> <span className='text-danger'>C</span>ontact</h1><hr />
                    <div className="contact_box d-flex justify-content-between text-align-center">
                        <div className="mx-3 px-4 smallBox mx-4 px-5">
                            <h5>24x7 Helpdesk:</h5>
                            <p>+91-26788444</p>
                        </div>
                        <div className="mx-3 px-4 smallBox mx-4 px-5">
                            <h5> Email:</h5>
                            <p>Lottery@gov.inhelpdesk-ors@gov.in</p>
                        </div>
                        <div className="mx-3 px-4 smallBox mx-4 px-5">
                            <h5>Call</h5>
                            <p>+91-26788444</p>
                        </div>


                    </div>
                </div><hr />
            </div>

        </>
    )
}

export default Contact