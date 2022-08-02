import React, {useState, useEffect} from 'react'
import "./Nav.css"
export default function Nav() {

    const [show, setShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
      })
    
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    }, []);
    

  return (
    <nav className={`nav ${show && "nav_black"}`}>
        <img
         alt='Netflix logo'
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png'
         className='nav_logo'
         onClick={() => window.location.reload()}
        />
        <img 
         alt='User logged'
         src='https://cdn3.vectorstock.com/i/thumb-large/27/22/avatar-woman-thin-line-icon-linear-symbol-vector-17182722.jpg'
         className='nav_avatar'
        />
    </nav>
  )
}
