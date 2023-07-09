import React from 'react'
import Card from './Card';

function nCard(news, index) {
    const date = new Date(news.publishedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta"
    });
    return (
        <Card
            key={index + 1}
            urlToImage={news.image}
            title={news.title}
            description={news.description}
            url={news.url}
            publishedAt={date}
            source={news.source.name}
        />
    )
}

function Show({ article }) {
    return (
        <>
            <div className="container" id='contianer'>
                {article?.map(nCard)}
            </div>
        </>
    );
}

export default Show;