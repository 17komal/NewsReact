import React, { Component } from 'react'
import NewsItems from '../NewsItems/NewsItems'

export default class NewsCard extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
    ;
  }

  async updateNews() {
    this.props.setProgress(10);
   //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
     let url = `  https://newsdata.io/api/1/news?apikey=pub_35924ad8448eb14892735a427ed558d180c07&country=${this.props.country}&q=${this.props.category}`;
     
    let data = await fetch(url);
    let parseData = await data.json(data);
    console.error(parseData);

    this.props.setProgress(50);
    this.setState({
      articles: parseData.results
    });

    this.props.setProgress(100);
  }

  componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    await this.setState({ page: this.state.page - 1 })
    this.updateNews();
  }

  handleNextClick = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updateNews(); console.log('next');
  }
  render() {
    return (
      <>
        <div className='container '>
          <div className='row'>

            {
              this.state.articles.map((element) => {
                console.log(element)
                return <div className='col-md-4' key={element.title}>
                  {/* <NewsItems title={element.title} description={element.description} ImgUrl={element.urlToImage} readmore={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} /> */}
                  <NewsItems title={element.title} description={element.description} ImgUrl={element.image_url} readmore={element.link} author={element.pubDate} publishedAt={element.pubDate} source={element.source_id} />
                </div>
              })
            }



          </div>
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo;</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>&raquo;</button>
        </div>
      </>
    )
  }
}
