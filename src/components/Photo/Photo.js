import React, { Component } from "react";
import Service from "../Service/Service.js";
import {Link} from 'react-router-dom'

export default class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: null,
      myPhotos: []
    };
    this.service = new Service();
  }
  getPhoto = url => {
    this.service.photoData(url).then(photos =>
      this.setState({
        ...this.state,
        photos: this.props.match.params.id ? photos.data : photos[0]
      })
    );
  };
  albumPhotos = () => {
    if (this.state.photos !== null) {
      this.state.photos.forEach(e => {
        if (this.props.match.params.id == e.albumId) {
          return this.state.myPhotos.push(e);
        }
      });
    }
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      this.getPhoto(`${this.props.match.params.id}`);
    } 
  }
  render() {
    this.albumPhotos();
    return this.state.myPhotos ? ( 
      <div>    
      <Link to='/' class="btn btn-outline-secondary">Go Back</Link>
      <div className='photos-container'>
        {this.state.myPhotos.map(photo => (
         <div className="card" key={photo._id} style={{width: '18rem'}}>
         <img className="card-img-top" src={photo.thumbnailUrl} alt="card image"/>
         <div className="card-body">
         <h5 className="card-title">{photo.title}</h5>
         
         </div>
         </div>
        ))}
    </div>
    </div>
    ) : (
      <p>Loading...</p>
    );
  }
}






