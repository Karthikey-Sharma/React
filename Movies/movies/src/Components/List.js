import React, { Component } from 'react'
import { movies } from './getMovies'
export default class List extends Component {
  constructor(){
    super();
    this.state = {
      hover : ""
    }
  }

  handleEnter = (id) =>{
    this.setState({
      hover : id
    })
  }

  handleLeave = () => {
    this.setState({
      hover : ""
    })
  }
  render() { // jab bhi state set hogi render method call hoga
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
                                              <div className="card movie-card" onMouseEnter={()=>this.handleEnter(movieObj.id)} onMouseLeave={this.handleLeave} key={movieObj.id}>
                                                <img
                                                  src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                                                  className="card-img-top movie-img"
                                                  alt="..."
                                                  
                                                />
                                                {/* <div className="card-body"> */}
                                                  <h4 className="card-title movie-title">{movieObj.original_title}</h4>
                                                  {/* <p className="card-text banner-text">{movieObj.overview}</p> */}
                                                  <div class="button-wrapper movie-button" style =  {{display :  "flex" , width:"100%" , justifyContent : "center" }}>
                                                        {
                                                          this.state.hover == movieObj.id && 
                                                          <a href="#" className="btn btn-primary">Add To Favourites</a> 
                                                        }
                                                  </div>
                                                </div>
                                              // </div>
                                            ))
                                        }
                                  </div>            
                                                                                                                  
                                }
                                    <div className = "pagination">
                                      <nav aria-label="Page navigation example">
                                          <ul class="pagination">
                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                          </ul>
                                      </nav>
                                    </div>
                              </div>
                              
                    )
          }       
      </>
    )
  }
}
