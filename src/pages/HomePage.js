import React, { useContext, useEffect, useState } from 'react';
import { CiViewList } from "react-icons/ci";
import { TfiViewGrid } from "react-icons/tfi";
import CardList from '../components/CardList';
import CardView from '../components/CardView';
import { DataContext } from '../context/DataContext';
import { RxCross1 } from "react-icons/rx";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { feedbackSchema } from '../schema';

const initalValues = {
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    email: '',
    phoneNumber: '',
}
const HomePage = () => {
    const { data, setData } = useContext(DataContext);

    const [listView, setListView] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const cardPerPage = 6;
    const [currentCards, setCurrentCards] = useState([]);
    const [pageCount, setPagecount] = useState(0);
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        getData();
    }, [data, currentPage]);
    const formik = useFormik({
        initialValues: initalValues,
        validationSchema: feedbackSchema,
        onSubmit: async (Values, action) => {
            console.log(values, 'values');
            action.resetForm()
            handleClose()
        }
    });
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik
    const getData = () => {
        const startIndex1 = currentPage * cardPerPage;
        const endIndex1 = (currentPage + 1) * cardPerPage;
        const updatedData = data?.slice(startIndex1, endIndex1);
        setCurrentCards(updatedData);
        setPagecount(Math.ceil(data?.length / cardPerPage));
    };

    const handleNextPage = () => {
        if ((currentPage + 1) < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber - 1);
    };

    const handleRemoveCard = (id) => {
        const newData = data?.filter((item) => item.id !== id);
        setData(newData);
        const startIndex1 = currentPage * cardPerPage;
        const endIndex1 = (currentPage + 1) * cardPerPage;
        const updatedData = newData?.slice(startIndex1, endIndex1);

        setCurrentCards(updatedData);
        setPagecount(Math.ceil(newData?.length / cardPerPage));
    };
    const buttonStyle = {
        padding: '10px',
        margin: '0 5px',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        color: '#333',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const activeButtonStyle = {
        backgroundColor: '#84f0b8',
        color: '#fff',
    };


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ paddingTop: '50px', width: '30%', borderRadius: '30px', boxShadow: '5px 0px 15px rgba(0, 0, 0, 0.1)', borderRight: '30px', display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
                    <div className='card' style={{ padding: '10px', borderRadius: '20px', backgroundColor: 'white', width: '300px', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <img src='https://cdn0.iconfinder.com/data/icons/hr-business-and-finance/100/face_human_blank_user_avatar_mannequin_dummy-512.png' style={{ borderRadius: '50%' }} width={50} height={50} alt='profile_img' />
                            <div style={{ marginLeft: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>Hii Reader</div>
                                <span>Here's your news</span>
                            </div>
                        </div>
                    </div>
                    <div className='card' style={{ padding: '10px', borderRadius: '20px', backgroundColor: 'white', width: '300px', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '5px' }}>View Toggel</div>
                            <div style={{}}>
                                <button style={{ width: '100px', height: '50px', backgroundColor: listView ? 'lightgray' : '#84f0b8', border: 'none' }} onClick={() => setListView(false)}><TfiViewGrid size={40} /></button>
                                <button style={{ width: '100px', height: '50px', backgroundColor: listView ? '#84f0b8' : 'lightgray', border: 'none' }} onClick={() => setListView(true)}><CiViewList size={40} /></button>
                            </div>
                        </div>
                    </div>
                    <div className='card' style={{ padding: '10px', borderRadius: '20px', backgroundColor: 'white', width: '300px', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '5px' }}>Have a Feedback</div>
                            <div style={{}}>
                                <button onClick={() => handleShow()} style={{ width: '200px', backgroundColor: '#84f0b8', height: '40px', borderRadius: '20px', border: 'none', fontWeight: 'bold', fontSize: '20px' }}>We are Listening</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ width: '70%', margin: '30px' }}>
                    <div>
                        {listView ?
                            <>
                                {currentCards?.map((item) =>
                                    <div key={item.id} className='row' style={{ marginBottom: '15px' }}><CardList item={item} handleRemoveCard={handleRemoveCard} /></div>
                                )}
                            </>
                            : <>
                                <div className='row'>
                                    {currentCards?.map((item) =>
                                        <div key={item.id} className='col-lg-4' style={{ marginBottom: '15px' }}>
                                            <CardView item={item} handleRemoveCard={handleRemoveCard} />
                                        </div>
                                    )}
                                </div>
                            </>
                        }
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        <button
                            style={buttonStyle}
                            onClick={() => handlePrevPage()}
                            disabled={currentPage === 0}
                        >
                            Prev
                        </button>
                        {Array.from({ length: pageCount }, (_, i) => (
                            <button
                                key={i}
                                style={{ ...buttonStyle, ...(currentPage === i && activeButtonStyle) }}
                                onClick={() => handlePageClick(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            style={buttonStyle}
                            onClick={() => handleNextPage()}
                            disabled={currentPage === pageCount - 1}
                        >
                            Next
                        </button>
                    </div>

                </div>
            </div>
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

        </>
    );
};

export default HomePage;
