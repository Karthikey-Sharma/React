import React, { Component } from 'react'

export default class Todo extends Component {
          constructor(){
                    super();
                    this.state = {
                              tasks : [
                                        {id : 1 , task : "Revise JS"} , 
                                        {id : 2 , task : "Revise DSA Level-1"} , 
                                        {id : 3 , task : "Check Emails"}
                              ], 
                              currentTask : ''
                    };
          }
          handleChange = (e) => {
                    console.log(e.target.value);
                    this.setState({
                              currentTask : e.target.value
                    });
          };

          handleSubmit = () => {
                    this.setState({
                              tasks : [...this.state.tasks , {task : this.state.currentTask , id : this.state.tasks.length + 1 }] , 
                              // Spread operator kyu use kiye? React mein jab bhi hum change krenge wo hum krenge immutable change , 
                              // jab bhi array ya object mein change krenge to uski ham naya adress provide krenge
                              // react ko ab change pta krna hai , Uske 2 tarike hai=> , 
                              //1.to ya to hum use naya address pta de , 2.ya usi mein change krein to fir react usme pura loop lgayega aur fir last mein jake dekhega ki kuch nya aya hai to mujhe rerender krana hai
                              currentTask : ""
                    });
                    
          };

          handleDelete = (id) => {
                    let narr = this.state.tasks.filter((taskObj) => {
                      return taskObj.id != id;
                    });
                    this.setState({
                      tasks: [...narr]
                    });
          };

          render() {
                    console.log("render called");
                    return ( // JSX starts
                              <div>
                                        <input 
                                        type = "text" 
                                        value = {this.state.currentTask}
                                        onChange = {this.handleChange}/>
                                        <button onClick={this.handleSubmit}>Submit</button>
                                        {// use when need to write JS in jsx
                                                            this.state.tasks.map((taskObj) =>{
                                                                      return (
                                                                                <li key = {taskObj.id}>
                                                                                          <p>{taskObj.task}</p>
                                                                                          <button onClick={() => this.handleDelete(taskObj.id) }>Delete</button>
                                                                                </li>
                                                                                
                                                                      )
                                                            })
                                        }
                              </div>
                    )
          }
}