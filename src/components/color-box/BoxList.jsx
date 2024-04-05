import React, { useState } from "react";
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import { v4 as uuidv4 } from 'uuid';


function BoxList() {
    const [boxes, setBoxes] = useState([])
    
    const addBox = (newbox) => {
        setBoxes(boxes => [...boxes, {...newbox, id:uuidv4() }])
    }

    const rmvBox = (id) => {
        setBoxes(boxes => {
            const copyBox = [...boxes];
            return copyBox.filter(box => box.id !== id)
        })
    }

    return (
        <div>
            <div>
              <NewBoxForm addBox={addBox}/>  
            </div>
            <h1>Boxes:</h1>
            <div className="Boxes">
                {boxes.map(({color, width, height, id}) => <Box key={id} color={color} width={width} height={height} rmvBox={rmvBox} id={id} />)}
            </div>
        </div>
    )
}

export default BoxList