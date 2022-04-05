import React from 'react';
import useProducts from '../../hooks/useProducts';
import Reviews from '../Reviews/Reviews';
import './Reviewser.css'

const Reviewser = () => {
    const [products,setProducts]= useProducts();

    return (
        <div>
    <div className='clinet-info'>
        <h1>Happy Client Says</h1>
        <p>Below are the profiles of some of the people who have buy a car from our company and got a good backup differnet times</p>
    </div>
 <div className='client-contianer'>
{
    products.map(product=><Reviews product={product}></Reviews>)
}


 </div>
            
        </div>
    );
};

export default Reviewser;