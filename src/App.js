import React from 'react'
import './App.css'
import fruits from './fruits.jpg'
import { buildTimeValue } from '@testing-library/user-event/dist/utils'
import { type } from '@testing-library/user-event/dist/type'

function Test() {
    return(
        <div>
        <h1 className ='Text'>Fruits Image</h1>   
        <img src={fruits} className='fruits'/>
        <p>The Image above contains different fruits</p>

        <div>
            <button onClick={() => alert('You clicked this button')}>Click Here</button>
        </div>
        </div>
    )
   
}                                                                                                                                                                           

export default Test;
