import React, { Component } from 'react'
import axios from 'axios';
export default class Favourites extends Component {
  constructor(){
          super();
          this.state = {
                    movies : [], 
                    genre : [], 
                    currGenre : "All Genre"
          }
  }

  async componentDidMount(){
            let ans =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f5d6e9162514147762f2410576d4357a&language-en-US&page=1`);
            let genreId = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary',  18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };

            let genreArr = [];
            ans.data.results.map((movieObj) => {
              if(!genreArr.includes(genreId[movieObj.genre_ids[0]])){
                genreArr.push(genreId[movieObj.genre_ids[0]]);
              }
            })
            genreArr.unshift("All Genre");
            console.log(genreArr);
            this.setState({
              movies : [...ans.data.results] , 
              genre : [...genreArr]
            })
  }

  render() {
    let genreId = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary',  18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
    return (
     <div className = "row">
          <div className = "col-3 favourites-list" >
                    <ul className="list-group">
                    {
                          this.state.genre.map((genre) =>{
                            return (
                              this.state.currGenre == genre 
                              ? 
                              <li className="list-group-item active" aric-current = "true">{genre}</li> 
                              :
                              <li className="list-group-item" aric-current = "true">{genre}</li> 
                            )
                          })
                        }
                    </ul>

          </div>

          <div className = "col favourites-table"  >
                    <div className = "row">
                              <input type = "text" className = "col" placeholder = "Search"></input>
                              <input type = "number" className = "col" placeholder = "5"></input>
                    </div>

                    <div className = "row">
                              <table className="table">
                                        <thead>
                                                  <tr>
                                                            <th scope="col">Title</th>
                                                            <th scope="col">Genre</th>
                                                            <th scope="col">Popularity</th>
                                                            <th scope="col">Rating</th>
                                                            <th scope="col"></th>
                                                  </tr>
                                        </thead>
                                        <tbody>
                                                  {
                                                            this.state.movies.map((movieObj) => {
                                                                return (
                                                                    <tr key={movieObj.id}>
                                                                        <td scope="row"><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style = {{width : '8rem'}}/>{movieObj.original_title}</td>
                                                                        <td>{genreId[movieObj.genre_ids[0]]}</td>
                                                                        <td>{movieObj.popularity}</td>
                                                                        <td>{movieObj.vote_average}</td>
                                                                        <td><button className = "btn btn-outline-danger">Delete</button></td>
                                                                    </tr>
                                                                );
                                                            })
                                                  }
                                        </tbody>
                              </table>
                    </div>
          </div>

     </div>
    )
  }
}
