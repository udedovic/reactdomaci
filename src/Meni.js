import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function Meni(){
    return (
        <ul style={{display:'flex', justifyContent:'space-evenly',  marginTop: '5px'}}>
              <Button variant="primary"><Link to="/" style={{textDecoration: 'none', color:'white'}}>Home</Link></Button>{' '}
              <Button variant="primary"><Link to="/about" style={{ textDecoration: 'none' , color:'white'}}>About</Link></Button>{' '}
        </ul>
    )
}

export default Meni;