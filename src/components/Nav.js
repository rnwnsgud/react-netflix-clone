import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Nav.css"
export default function Nav() {

    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

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

    const handleChange = (e) => {
      setSearchValue(e.target.value);
      navigate(`/search?q=${e.target.value}`);
    };
    

  return (
    <nav className={`nav ${show && "nav_black"}`}>
        <img
         alt='Netflix logo'
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png'
         className='nav_logo'
         onClick={() => window.location.reload()}
        />

        <input 
        value={searchValue} 
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="영화를 검색해주세요."
        />

        <img 
         alt='User logged'
         src='https://cdn3.vectorstock.com/i/thumb-large/27/22/avatar-woman-thin-line-icon-linear-symbol-vector-17182722.jpg'
         className='nav_avatar'
        />
    </nav>
  )
}
