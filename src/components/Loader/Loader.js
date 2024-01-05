import React from 'react'
import ReactDOM from "react-dom"
import "./loader.css"
const Loader = () => {
    return ReactDOM.createPortal(
        <div className='loading-spinner'>
            <div className="loader"></div>
        </div>,
        document.getElementById("loader")
    )
}

export default Loader