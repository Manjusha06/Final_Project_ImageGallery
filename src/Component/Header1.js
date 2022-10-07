import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../Css/Home.css';
import  '../Component/Sell';
import '../Css/Head1Style.css';
function Header1(props) {
    const submitHandler = e =>{
        e.preventDefault()
        localStorage.setItem("enablelogout",0)
        window.location.href='/login';

    }
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Gallery Check</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
            <button hidden={localStorage.getItem("enablelogout") == 0} onClick={submitHandler} className='logout'>Logout</button>
        </div>
    );
}

export default Header1;