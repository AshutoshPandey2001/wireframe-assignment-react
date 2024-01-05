import React, { useContext, useEffect, useState } from 'react';
import { CiViewList } from "react-icons/ci";
import { TfiViewGrid } from "react-icons/tfi";
import CardViewList from '../components/CardViewList';
import CardViewGrid from '../components/CardViewGrid';
import { DataContext } from '../context/DataContext';
import { useFormik } from 'formik';
import { feedbackSchema } from '../schema';
import FeedbackForm from '../components/FeedbackForm';
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";

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
                                    <div key={item.id} className='row' style={{ marginBottom: '15px' }}><CardViewList item={item} handleRemoveCard={handleRemoveCard} /></div>
                                )}
                            </>
                            : <>
                                <div className='row'>
                                    {currentCards?.map((item) =>
                                        <div key={item.id} className='col-lg-4' style={{ marginBottom: '15px' }}>
                                            <CardViewGrid item={item} handleRemoveCard={handleRemoveCard} />
                                        </div>
                                    )}
                                </div>
                            </>
                        }
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        {!(currentPage === 0) &&
                            <button
                                style={buttonStyle}
                                onClick={() => handlePrevPage()}
                                disabled={currentPage === 0}
                            >
                                <GrChapterPrevious />
                            </button>
                        }
                        {Array.from({ length: pageCount }, (_, i) => (
                            <button
                                key={i}
                                style={{ ...buttonStyle, ...(currentPage === i && activeButtonStyle) }}
                                onClick={() => handlePageClick(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        {!(currentPage === pageCount - 1) &&
                            <button
                                style={buttonStyle}
                                onClick={() => handleNextPage()}
                                disabled={currentPage === pageCount - 1}
                            >
                                <GrChapterNext />
                            </button>
                        }
                    </div>

                </div>
            </div>
            <FeedbackForm
                show={show}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
            />

        </>
    );
};

export default HomePage;
