import React, { useState } from 'react'
import './ReviewForm.css';

const ReviewForm = () => {
    const [data, setData] = useState([])
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");

    //submit review

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

    // delete review 
    const handleDelete = (id) => {
        const deldata = [...data]
        deldata.splice(id, 1)
        setData(deldata)
    }
    return (
        <div>
            <div className='main-head'><div className='head-name'> Give Review Here</div></div>
            {/* review form  */}

            <form action="" onSubmit={handleSubmit} className='reviewform'>
                {/* title  */}
                <div>
                    <label htmlFor="">Title : </label>
                    <input type="text" placeholder='Please Enter The Title' onChange={(e) => setTitle(e.target.value)} required />
                </div>
                {/* review  */}
                <div>
                    <label htmlFor="">Rating:</label>
                    <input type="number" placeholder='Enter rating between 1 to 5' onChange={(e) => setRating(e.target.value)} required />
                </div>
                {/* description  */}
                <div>
                    <label htmlFor="">Description:</label>
                    <textarea name="" id="" cols="36" rows="5" placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <input type="submit" name="" id="" />
                <input type="reset" name="" id="" />
            </form>
            <div className='main-head'><div className='head-name'>User Review</div></div>

            <div className='review-main'>
                {
                    data.map((e, id) => {
                        return (
                            <div key={id} className='review'>
                                <p className=''><label htmlFor="">Title:</label><span>{e.title}</span></p>
                                <p> <label htmlFor="">Rating:</label><span>{e.rating}</span></p>
                                <p><label htmlFor="">Des:</label><span>{e.description}</span></p>
                                <button onClick={() => handleDelete(id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ReviewForm