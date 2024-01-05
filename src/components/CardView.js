import React from 'react'
import { RxCross1 } from "react-icons/rx";

const CardView = ({ item, handleRemoveCard }) => {
    return (
        <div className='card' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', padding: '10px', borderRadius: '15px', position: 'relative', minHeight: '250px', height: 'auto' }}>
            <div style={{ position: 'absolute', top: '5px', right: '5px', zIndex: 1 }}>
                <button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={() => handleRemoveCard(item.id)}><RxCross1 size={30} color='red' /></button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.title}</div>
                <div>{item.body}</div>
            </div>
        </div>

    )
}

export default CardView