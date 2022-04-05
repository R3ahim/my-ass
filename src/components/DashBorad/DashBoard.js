import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import './DahsBoard.css'

const DashBoard = () => {
  
    return (
        <div>
        <div  className='dash-header'>
            <h2>Daily Treeding info</h2>
            <p>Our daily order minimum 50m car. it is the biggest achimnet for us </p>
            <p>Its the begest car company ever in the world</p>
            
        </div>
            

            <Chart></Chart>
        </div>
    );
};

export default DashBoard;