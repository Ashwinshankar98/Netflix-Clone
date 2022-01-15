import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {

    const [show,handleShow]=useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return ()=>{window.removeEventListener("scroll")};
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png'
                alt='Netflix logo'
            />    
            <img
                className='nav__avatar'
                src='https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png'
                alt='avatar'
            />
        </div>
    )
}

export default Nav
