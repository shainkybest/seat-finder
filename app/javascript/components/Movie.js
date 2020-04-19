import React from "react";
import axios from 'axios';
import {Table} from 'react-bootstrap'
import {
  Link
} from "react-router-dom";
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
    this.handleresponse = this.handleresponse.bind(this);
  }
  
  componentDidMount(){
    this.handleresponse()
  }

  handleresponse(event){
    axios.get(`/movies`)
      .then(res => {
        this.setState({response: res.data.movies });
      })
  }

  handleChange(event, item){
    axios.delete(`/movies/`+item.id)
      .then(response => {
        this.handleresponse()
      })
    event.preventDefault();
  }

  render () {
    return (
      <>
        <div>
          <p><Link to="/new" className="btn btn-primary">Add new Movie</Link></p>
        </div>
        <div>
          <h2>Movies: </h2>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th colSpan="5">Title</th>
                <th colSpan="5">Year</th>
                <th colSpan="5">Genre</th>
                <th colSpan="8">IMDB</th>
              </tr>
            </thead>
            <tbody>
              {this.state.response.map( (item, i) => {
                return <tr key={i}>
                  <td colSpan="5">{item.title}</td>
                  <td colSpan="5">{item.year}</td>
                  <td colSpan="5">{item.genre}</td>  
                  <td colSpan="8">{item.imdb_link}</td>
                  <td><Link to={{pathname: "./edit", state: {id: item.id}}} className="btn btn-primary">Edit</Link></td>
                  <a href="#" onClick={this.handleChange.bind(this,event, item)}>Destroy</a>
                  <td><Link to={{pathname: "./Show", state: {id: item.id}}} className="btn btn-primary">View</Link></td>
                </tr>
              })}
            </tbody>
          </Table> 
        </div>
      </>
    );
  }
}

export default Movie
