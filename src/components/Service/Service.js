import axios from 'axios'


class Service{
  constructor() {
    this.service = axios.create({
      baseURL: `https://jsonplaceholder.typicode.com`,
      withCredentials: true
    })
  }

  albumsData = () => {
    return this.service.get('/albums')
    .then(response => response.data)
  }


  photoData = (url)=> {
    return this.service.get(`/albums/${url}/photos`)
    .then(response => response)
  }

}
export default Service;