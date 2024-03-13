import React, { useState } from 'react'
import './ReviewForm.css';

const ReviewForm = () => {
    const [data, setData] = useState([])
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            title: title,
            rating: rating,
            description: description
        }
        setData([...data, obj]);
        setTitle('')
        setRating(0)
        setDescription('')
    }
    return (
        <div>
            <div className='main-head'><div className='head-name'> Give Review Here</div></div>
            <form action="" onSubmit={handleSubmit} className='reviewform'>
                <label htmlFor="">Title:</label>
                <input type="text" placeholder='Please Enter The Title' onChange={(e) => setTitle(e.target.value)} required />
                <input type="number" placeholder='Enter rating between 1 to 5' onChange={(e) => setRating(e.target.value)} />
                <textarea name="" id="" cols="30" rows="5" placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="submit" name="" id="" />
                <input type="reset" name="" id="" />
            </form>
            <div className='main-head'><div className='head-name'>User Review</div></div>

            <div className='review-main'>
            {
                data.map((e, id) => {
                    return (
                          <div key={id} className=''>
                            <p>{e.title}</p>
                            <p>{e.rating}</p>
                            <p>{e.description}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ReviewForm