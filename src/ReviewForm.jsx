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
                <div>
                <label htmlFor="">Title : </label>
                <input type="text" placeholder='Please Enter The Title' onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                <label htmlFor="">Rating:</label>
                <input type="number" placeholder='Enter rating between 1 to 5' onChange={(e) => setRating(e.target.value)} />
                </div>
                <div>
                <label htmlFor="">Description:</label>
                <textarea name="" id="" cols="36" rows="5" placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <input type="submit" name="" id="" />
                <input type="reset" name="" id="" />
            </form>
            <div className='main-head'><div className='head-name'>User Review</div></div>

            <div className='review-main container'>
            {
                data.map((e, id) => {
                    return (
                          <div key={id} className='review'>
                            <p className=''><label htmlFor="">Title:</label><span>{e.title}</span></p>
                            <p> <label htmlFor="">Rating:</label><span>{e.rating}</span></p>
                            <p><label htmlFor="">Des:</label><span>{e.description}</span></p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ReviewForm