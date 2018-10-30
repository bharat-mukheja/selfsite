import React, { Component, Fragment } from 'react';

class Post extends Component {
  
  render() {
    return (
      <Fragment>
        {<div className="position-relative">
        
          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">Hola! Soy Bharat Mukheja</span>
          
          {this.props.content};
          
        </div> }
      </Fragment>
    );
  }
  
}

export default Post;