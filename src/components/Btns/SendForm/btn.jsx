import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const SignButton = (props) => {
    const {text, url, left, right} = props 
  return (
      <Link to={url || '/'} className="sign-btns" style={{left: left || 'auto', right: right || 'auto'}}>
        {text}
      </Link>
  )
};

export default SignButton;
