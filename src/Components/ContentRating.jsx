
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handleLike:() => {
            this.setState((prevState) => ({
              likes: prevState.likes + 100,
              totalRatings: prevState.totalRatings + 100
            }));
        },

        handleDislike:() => {
            this.setState((prevState) => ({
              dislikes: prevState.dislikes + 1,
              totalRatings: prevState.totalRatings + 1
            }));
        }
        };
    }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
          <p>
          This is a great article on the benefits of exercise. Regular physical activity can help improve your overall health, increase energy levels, and even boost your mood. Staying active is essential for long-term well-being, and it is never too late to start!
          </p>
          <div className='rating-butons'>
            <buton className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </buton>
            <button className="dislike-button" onClick={this.state.handleDislike}> 
                Dislike ({this.state.dislikes})
            </button>
            <p>Total Ratings: {this.state.totalRatings}</p>
          </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
