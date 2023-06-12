import React, { Component } from 'react'
import { movies } from './getMovies'
export default class List extends Component {
  render() {
     let movie = movies.results;     
    return (
      <>
          {movie.length==0 ? 
                    <div className="spinner-border text-danger" role="status">
                              <span className="sr-only"></span>
                    </div> :
                    (         <div>
                                <h3 className="text-center">
                                          <strong>Trending</strong>
                                </h3>
                                
                                {
                                  <div className="movies-list">
                                      {
                                          movie.map((movieObj) => (
                                              <div className="card movie-card" key={movieObj.id}>
                                                <img
                                                  src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                                                  className="card-img-top banner-img"
                                                  alt="..."
                                                  style = {{height : "40vh" , width : "20vw"}}
                                                />
                                                {/* <div className="card-body"> */}
                                                  <h4 className="card-title movie-title">{movieObj.original_title}</h4>
                                                  {/* <p className="card-text banner-text">{movieObj.overview}</p> */}
                                                  <div class="button-wrapper movie-button" style =  {{display :  "flex" , width:"100%" , justifyContent : "center" }}>
                                                        <a href="#" className="btn btn-primary">Add to favorites</a> 
                                                  </div>
                                                </div>
                                              // </div>
                                            ))
                                        }
                                  </div>
                                }
                              </div>
                              
                    )
          }       
      </>
    )
  }
}
