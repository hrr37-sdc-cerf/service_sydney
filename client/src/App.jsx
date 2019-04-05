import React from 'react';
import ReactDOM from 'react-dom';
import Photos from './components/Photos.jsx'
import Collapse from 'react-bootstrap/Collapse'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      photos: [],
      collapse: false,
      message: 'show more'
    }
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  componentDidMount() {
    fetch(`api/restaurants`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            restaurants: result
          });
        },
        (error) => {
          console.log('error w client req to server', error);
        }
      )
    fetch(`api/photos`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            photos: result
          });
          console.log(this.state.photos)
        },
        (error) => {
          console.log('error w client req to server', error);
        }
      );
  };

  toggleCollapse() {
    this.setState({
      collapse: !this.state.collapse,
      message: ''
    });
  }

  render() {
    return (
      <div>
        {this.state.restaurants.map((data) => (
          <div className="overview">
            <div id="nav-bar">
              <div id="overview">Overview</div>
              <div id="photos">Photos</div>
              <div id="menu">Menu</div>
              <div id="reviews">Reviews</div>
            </div>
            <h1 className="name">{data.name}</h1>
            <div id="info">
              <div id="rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                {data.rating}
              </div>
              <div id="numOfReviews">
                <img id="speech" src="https://static.thenounproject.com/png/229790-200.png" />
                {data.reviews}
              </div>
              <img id="dollar" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/money_dollar.png" />
              <div id="price">${data.max_price} and under
            </div>
              <img id="fork" src="https://image.flaticon.com/icons/png/512/14/14222.png" />
              <div id="foodType">
                {data.food_type}
              </div>
            </div>
            <div id="tags">
              <div id="topTags">Top Tags:</div>
              <div id="tag1">{data.tag1}</div>
              <div id="tag2">{data.tag2}</div>
              <div id="tag3">{data.tag3}</div>
            </div>
            <a onClick={this.toggleCollapse}
            aria-controls="description"
            aria-expanded={this.state.collapse}>{this.state.message}
            </a>
            <Collapse in={this.state.collapse}>
            <div id="description">{data.description}</div>
            </Collapse>
            <div className="photos">
              Photos
              {this.state.photos.map((photo) => (
                <div>
                  <img src={photo.photo1}/>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
        )
      }
    }

ReactDOM.render(<App />, document.getElementById('app'));

export default App;