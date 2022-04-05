
import './Reviws.css'

const Reviews = (props) => {
    const { img, name, comment, rathings } = props.product;
   
    return (
        <div className='comment-contianer'>
            <div className='reviw-info'>
                <img src={img} alt="" />
                <h2 className='cart-info'>{name}</h2>
                <h4 className='cart-info'>Rathings: <span style={{color:'rebeccapurple'}}>{rathings}</span></h4>

                <p>{comment}</p>
          


            </div>


        </div>
    );
};

export default Reviews;