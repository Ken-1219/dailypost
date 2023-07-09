import React from 'react'

function Card(val) {
    if (!val.urlToImage) return;

    const date = new Date(val.publishedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta"
    })

    return (
        <div className="card" id='template-news-card'>
            <img src={val.urlToImage} className='card-img' alt="news.jpg" />
            <div className="card-body">
                <h4 className="card-title">{val.title}</h4>
                <p className='source'> {val.source} - {date}</p>
                <p className="card-text">{val.description}</p>
                <div className='btn-container'>
                    <button className='btn'>
                        <a href={val.url} target='_blank' rel='noreferrer'>Read More</a>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card;