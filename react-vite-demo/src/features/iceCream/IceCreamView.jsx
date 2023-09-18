import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from './iceCreamSlice';

const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
       <h2>Number of IceCreams - {numOfIceCreams}</h2>
       <button onClick={() => dispatch(ordered())}>Order IceCream</button>
       <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))}/>
       <button onClick={() => dispatch(restocked(value))}>Restock IceCreams</button>
    </div>
  )
}

export default IceCreamView