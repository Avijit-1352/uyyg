import React from 'react'

const NewsItem =(props)=> {
 
  
        let {title,description,imageUrl,newsUrl,author,date,source}=props;
        return (
            <div className="my-3">
                <div className="card" >
                    <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: '0'}}>
                    <span className="badge rounded-pill bg-danger" /*style={{left:'60%',zIndex:'1'}}*/>{source}</span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"UnKnown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} style={{background:'rgb(240, 66, 66)'}} className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
