import axios from 'axios';
import './Chart.css'
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const [chat, setChart] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => {
                const loadedData = data.data;
                const phoneData = loadedData.map(chart => {
                    const data = chart;
                    return data;
                })
                setChart(phoneData)
                // console.log(phoneData);
            })
    }, [])
    return (
        <div className='chart-contianer'>
        
            <div className='first-chart'>
                <h3>MONTH WISH SELL</h3>
                
            <LineChart width={400} height={250} data={chat}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
       
        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
      </LineChart>
            </div>
            <div className='first-chart'>
                <h3>Investment vs Reveenue</h3>     
            <div className="second-chart">
            <PieChart width={400} height={250}>
  <Pie data={chat} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="green" label />
  <Pie data={chat} dataKey="investment" nameKey="month"  cx="50%" cy="50%"innerRadius={60} outerRadius={80}  fill="red" />
  <Tooltip></Tooltip>
</PieChart>
<div>
    <h3>Investment <span className='span'>.</span></h3>
    <h3>Revenue <span  className='span2'>.</span></h3>
</div>
            </div>
        </div>
        </div>
   
    )
};

export default Chart;