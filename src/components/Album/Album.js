import React, { Component } from "react";
import Service from "../Service/Service.js";
import { Link } from "react-router-dom";

export default class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: null,
      search: "",
      albumsFiltered: null,    
    };
    this.service = new Service();
    this.albumsFiltered=this.state.albums;
  }
  getAlbums = ()=>{
    this.service.
   albumsData()
    .then(responseFromapi=>this.setState({ albums:responseFromapi ,albumsFiltered:responseFromapi}))
  }
  componentDidMount() {
    this.getAlbums() 
   
  }
  searchBarHandler = (e) => {  
    this.setState({search: e.target.value})
    this.filter(e.target.value)  
  }
  filter = (e)=>{
    if(e !== "" ){
   let updadtedAlbums = this.state.albums.filter(
        (album)=>{
          return album.title.indexOf(this.state.search) !== -1;
        }
      )
      return this.setState({albumsFiltered: updadtedAlbums})
    }else{
      return this.setState({albumsFiltered: this.state.albums})
    }   
  }
  render() {
    return this.state.albumsFiltered ? (
  
      <div className="albums-container">
        <div className="list-group">
          <div className="list-group-item list-group-item-action active">       
            Albums 
          </div>
          <nav className="navbar navbar-light bg-light">
            <div className="form-inline">
              <input className="form-control mr-sm-2" type="search" value={this.state.search} onChange={this.searchBarHandler} placeholder="Search album .." aria-label="Search"/>             
            </div>
          </nav>          
        {this.state.albumsFiltered.map(album => (        
          <Link to={`/photos/${album.id}`} className="list-group-item list-group-item-action">
          {album.id}<br></br>{album.title}
          </Link>   
        ))}
        </div>  
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

