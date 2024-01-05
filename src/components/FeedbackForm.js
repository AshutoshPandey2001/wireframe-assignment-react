import React from 'react'
import { Modal } from 'react-bootstrap';
const FeedbackForm = ({ show, handleClose, handleSubmit, values, errors, touched, handleBlur, handleChange }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} fullscreen={true} style={{ width: '80%', margin: 0, color: '#000', backgroundColor: '#f0f2f5', left: 0, borderRadius: '25px', height: '100%' }}>
                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>

                        <div style={{ paddingTop: '100px', width: '30%', height: '100%', borderRight: '30px', display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
                            <div className='card' style={{ padding: '10px', borderRadius: '20px', backgroundColor: 'white', width: '300px', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <img src='https://cdn0.iconfinder.com/data/icons/hr-business-and-finance/100/face_human_blank_user_avatar_mannequin_dummy-512.png' style={{ borderRadius: '50%' }} width={50} height={50} alt='profile_img' />
                                    <div style={{ marginLeft: '10px' }}>
                                        <div style={{ fontWeight: 'bold' }}>Hii Reader</div>
                                        <span>Here's your news</span>
                                    </div>
                                </div>
                            </div>
                            <div className='card' style={{ padding: '10px', borderRadius: '20px', backgroundColor: 'white', width: '300px', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '5px' }}>Have a Feedback</div>
                                    <div style={{}}>
                                        <button onClick={() => handleClose()} style={{ backgroundColor: '#f2858b', height: '40px', borderRadius: '20px', border: 'none', fontWeight: 'bold', fontSize: '20px', width: '200px' }}>We are Listening</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{ width: '70%', marginLeft: '30px', paddingTop: '30px' }}>
                            <div>
                                <h3>Thanku so much for taking the time!</h3>
                                <div>Please provide the below details!</div>
                            </div>
                            <div>
                                <form >
                                    <div className="form-group" style={{ marginTop: '20px', width: '30%' }}>
                                        <label>First Name<b style={{ color: 'red' }}>*</b>:</label>
                                        <input type="text" className="form-control" placeholder="Enter First name" name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.firstName && touched.firstName ? (<p style={{ color: 'red' }}>*{errors.firstName}</p>) : null}
                                    </div>
                                    <div className="form-group" style={{ marginTop: '20px', width: '30%' }}>
                                        <label>Last Name<b style={{ color: 'red' }}>*</b>:</label>
                                        <input type="text" className="form-control" placeholder="Enter Last name" name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.lastName && touched.lastName ? (<p style={{ color: 'red' }}>*{errors.lastName}</p>) : null}
                                    </div>
                                    <div className="form-group" style={{ marginTop: '20px', width: '60%' }}>
                                        <label>Address<b style={{ color: 'red' }}>*</b>:</label>
                                        <textarea className="form-control" rows="3" placeholder="Enter Address" name='address' value={values.address} onChange={handleChange} onBlur={handleBlur}></textarea>
                                        {errors.address && touched.address ? (<p style={{ color: 'red' }}>*{errors.address}</p>) : null}
                                    </div>
                                    <div className="form-group" style={{ marginTop: '20px', width: '40%' }}>
                                        <label>Country<b style={{ color: 'red' }}>*</b>:</label>
                                        <input type="text" className="form-control" placeholder="Enter Country" name='country' value={values.country} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.country && touched.country ? (<p style={{ color: 'red' }}>*{errors.country}</p>) : null}
                                    </div>
                                    <div className="form-group" style={{ marginTop: '20px', width: '30%' }}>
                                        <label>Email<b style={{ color: 'red' }}>*</b>:</label>
                                        <input type="text" className="form-control" placeholder="Enter Email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.email && touched.email ? (<p style={{ color: 'red' }}>*{errors.email}</p>) : null}
                                    </div>
                                    <div className="form-group" style={{ marginTop: '20px', width: '30%' }}>
                                        <label>Phone Number<b style={{ color: 'red' }}>*</b>:</label>
                                        <input type="text" className="form-control" placeholder="Enter phone number" name='phoneNumber' value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.phoneNumber && touched.phoneNumber ? (<p style={{ color: 'red' }}>*{errors.phoneNumber}</p>) : null}
                                    </div>


                                </form>
                                <button type='submit' onClick={() => handleSubmit()} style={{ marginTop: '15px', backgroundColor: '#87e6b0', height: '50px', borderRadius: '5px', border: 'none', fontSize: '20px', color: 'white' }}>Submit Feedback</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default FeedbackForm