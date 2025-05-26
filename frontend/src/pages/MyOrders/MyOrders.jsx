import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from './../../components/context/StoreContext';
import axios from 'axios';
import { assets } from './../../assets/assets';

const MyOrders = () => {
    const [feedback, setFeedback] = useState(''); // State to store feedback input

    const handleSubmit = () => {
      // Handle feedback submission logic (e.g., send to a server or log it)
      console.log('Feedback submitted:', feedback);
      setFeedback(''); // Clear feedback input after submission
    };
const {url, token} = useContext(StoreContext);
const [data, setData] = useState([]);

const fetchOrders = async () =>{
    const response = await axios.post(url+'/api/order/userorders',{},{headers:{token}})
    setData(response.data.data);
}

useEffect(()=>{
    if(token){
        fetchOrders();
    }
},[token])

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order, index)=>{
                    return (
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item, index)=>{
                                if(index === order.items.length-1){
                                    return item.name+" x "+item.quantity
                                }else{
                                    return item.name+" x "+item.quantity + ","
                                }
                            })}</p>
                            <p>Rs.{order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span><b>{order.status}</b></p>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    )
            })}
        </div>
        
      {/* Feedback Form */}
      <div className='feedback'>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder='Enter your feedback here...'
          rows={5}
          style={{ width: '50%', padding: '10px', margin: '10px 0' }}
        />
        <button onClick={handleSubmit} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Submit Feedback
        </button>
      </div>
    </div>
  )
}

export default MyOrders