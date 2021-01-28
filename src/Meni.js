import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function Meni(){
    return (
        <ul style={{display:'flex', justifyContent:'space-evenly'}}>
              <Button variant="outline-primary"><Link to="/">Home</Link></Button>{' '}
              <Button variant="outline-primary"><Link to="/about">About</Link></Button>{' '}
        </ul>
    )
}

export default Meni;