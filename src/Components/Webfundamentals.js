import React from 'react';
import Python from './Python';
import './Pythoncourse.css';
import { Link } from 'react-router-dom';
const webfundamentals = () => {
    return (
      
        <div>
            <div className="fixed-button-container">
      <button className="fixed-button" ><Link to="/pythonpeople">Join Group</Link></button>
    </div>
    <Python step1="Semantic Markup" step2="Tags and Elements" step3="Attributes" step4="DOCUMENT Structure" inter_step1="Selectors" inter_step2="Box Model" inter_step3="Flexbox" inter_step4="Cascading and Specificity" adv_step1="Variables and Data Types" adv_step2="Functions" adv_step3="Control Flow" adv_step4="DOM Manipulation" />
  
        </div>
    );
  };
  
  export default webfundamentals;