import React, { Component } from 'react'
//import { movies } from './getMovies'
import axios from 'axios'
export default class List extends Component {
  constructor(){
    super();
    this.state = {
      hover : "" , 
      parr : [1], // ab tak mein konsee page pe hu or what page result am i showing
      currPage : 1, 
      movies : [] , 
      favMov : [] , //this will store the id of the movies added to favourites
  
    }
  }

  handleEnter = (id) =>{
    this.setState({
      hover : id ,
     
    })
  }

  handleLeave = () => {
    this.setState({
      hover : ""
    })
  }

   changeMovies = async () => {
   let ans =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f5d6e9162514147762f2410576d4357a&language-en-US&page=${this.state.currPage}`);
   //console.log(ans.data);
   this.setState({
    movies : [...ans.data.results]
   })

  }

  handleNext = () =>{
    let tempArr = [];
    for(let i = 1 ; i <= this.state.parr.length + 1 ; i++){
      tempArr.push(i);
    }
    this.setState({
      parr : [...tempArr] , 
      currPage : this.state.currPage + 1
    } , this.changeMovies) // set state is async so it will create problem so , set state has a parameter which is callback function which will only be performed when the setstate has been completed 
                          // tbhi this.change movies function uske parameter mein rkha(will turn out to be callback function)
    ;
  }

  handlePrevious = () => {
    if(this.state.currPage != 1){
      this.setState({
        currPage: this.state.currPage - 1
      } , this.changeMovies)
    }
    
  }

  handleClick = (pageNum) => {
    if(pageNum != this.state.currPage){
      this.setState({
        currPage : pageNum
      }, this.changeMovies)
    }
  }

  handleFavourites = (movieObj) => { 
    let localStorageMovies = JSON.parse(localStorage.getItem("movies") || '[]');
   
    if (this.state.favMov.includes(movieObj.id)) {
      localStorageMovies = localStorageMovies.filter(
        (movie) => movie.id != movieObj.id
      );
    }
    else localStorageMovies.push(movieObj);
    //console.log(localStorageMovies);
    
    localStorage.setItem("movies", JSON.stringify(localStorageMovies));

    let tempData = localStorageMovies.map(movieObj => movieObj.id);
    this.setState({
      favMov: [...tempData]
    });
  }

  async componentDidMount(){
    //console.log(this.state.currPage)
   let ans =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f5d6e9162514147762f2410576d4357a&language-en-US&page=${this.state.currPage}`);
   //console.log(ans.data);
   this.setState({
    movies : [...ans.data.results]
   })
  }


  render() { // jab bhi state set hogi render method call hoga
     //let movie = movies.results; 
     
    return (
      <>
          {this.state.movies.length==0 ? 
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
                                          this.state.movies.map((movieObj) => (
                                              <div className="card movie-card" onMouseEnter={()=>this.handleEnter(movieObj.id)} onMouseLeave={this.handleLeave} key={movieObj.id}>
                                                <img
                                                  src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                                                  className="card-img-top movie-img"
                                                  alt="..."
                                                  
                                                />
                                                {/* <div className="card-body"> */}
                                                  <h4 className="card-title movie-title">{movieObj.original_title}</h4>
                                                  {/* <p className="card-text banner-text">{movieObj.overview}</p> */}
                                                  <div className="button-wrapper movie-button" style =  {{display :  "flex" , width:"100%" , justifyContent : "center" }}>
                                                        {
                                                          this.state.hover == movieObj.id && 
                                                          <a  className="btn btn-primary" onClick = {()=>this.handleFavourites(movieObj)}>
                                                            {this.state.favMov.includes(movieObj.id) ? "Remove From Favourites" : "Add to Favourites"}
                                                          </a> 
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
                                          <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#" onClick = {this.handlePrevious}>Previous</a></li>
                                            {
                                              this.state.parr.map((pageNum)=>(
                                                <li className="page-item"><a className="page-link" href="#" onClick = {()=>this.handleClick(pageNum)}>{pageNum}</a></li>
                                              ))
                                            }
                                            <li className="page-item"><a className="page-link" href="#" onClick = {this.handleNext}>Next</a></li>
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
