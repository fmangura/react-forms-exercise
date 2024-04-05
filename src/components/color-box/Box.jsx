import React from 'react';

const Box = ({color, width, height, id, rmvBox}) => {

    const deleteBox = (e) => {
        rmvBox(e.target.id);
    }

    return (
        <div className='aBox' id={id} style={{backgroundColor:`${color}`, width:`${width}px`, height:`${height}px`}} onClick={deleteBox}></div>
    )
}

export default Box