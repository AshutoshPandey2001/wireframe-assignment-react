import React from 'react'
import { RxCross1 } from "react-icons/rx";

const CardList = ({ item, handleRemoveCard }) => {
    return (
        <div className='card' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '80px', height: 'auto', display: 'flex', flexDirection: 'row', backgroundColor: 'white', padding: '10px', borderRadius: '15px' }}>
            <div style={{ width: '95%' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.title}</div>
                <div>{item.body}</div>
            </div>
            <div style={{ width: '5%', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                <button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={() => handleRemoveCard(item.id)}><RxCross1 size={30} color='red' /></button>
            </div>

        </div>
    )
}

export default CardList