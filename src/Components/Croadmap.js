import React from 'react';
import Python from './Python';
import './Pythoncourse.css';
import { Link } from 'react-router-dom';
const Croadmap = () => {
    return (
      
        <div>
            <div className="fixed-button-container">
      <button className="fixed-button" ><Link to="/pythonpeople">Join Group</Link></button>
    </div>
          <Python step1="introdution" step2="Variables and Datatypes" step3="Conditional Statements,Loops" step4="Type Casting ,Exceptions" inter_step1="OOPS" inter_step2="Arrays and Linked Lists" inter_step3="Heaps,Stacks and Queues" inter_step4="Recursion" adv_step1="Decorators" adv_step2="Regular Expressions" adv_step3="Lambda Functions" adv_step4="Iterators and Modules" />
  
        </div>
    );
  };
  
  export default Croadmap;