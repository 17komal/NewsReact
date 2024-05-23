import React, { Component } from 'react'
import './NewsItems.css'
export default class NewsItems extends Component {
    render() {
        let { title, description, ImgUrl, readmore, author, publishedAt, source } = this.props;
        return (
            <div className='my-3'>

                <div className="card" id="newsItemsCard">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" id="newsSource">{source}</span>
                    <img src={ImgUrl ? ImgUrl : "https://i.ytimg.com/vi/LQ18gp18xG0/maxresdefault.jpg"} className="card-img-top" alt="..." id="newsItemsImg" />
                    <div className="card-body">
                        <div className="card-text">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-desc">{ description ? description.substring(0, 300) + "..." : ''}</p>

                        </div>
                        <div className='read_more'>
                            <a href={readmore} className="btn btn-sm btn-dark" target='_blank'  rel="noreferrer" >read more..</a>
                        </div>

                    </div>
                    <div className="card-footer">
                        <small className="text-muted">On {new Date(publishedAt).toUTCString()} By {author === 'null' ? author : 'Unknow'}</small>
                    </div>
                </div>
            </div>
        )
    }
}
