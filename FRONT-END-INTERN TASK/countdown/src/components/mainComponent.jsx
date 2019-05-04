import React from 'react'
import {Counter} from './counter'

export class MainComponent extends React.Component{
	constructor(props){
		super(props)
		this.ndate=React.createRef()
		this.ntime=React.createRef()
		this.state={
			udate:'',
			utime:'',
			stat:false
		}
		this.whenSubmit=this.whenSubmit.bind(this)
	}
	whenSubmit(e){
		e.preventDefault()

		this.setState({
			udate:this.ndate.current.value,
			utime:this.ntime.current.value,
			stat:true
		})
	}


	render(){
		return(
			<div>
			{(this.state.stat)  ? <Counter utime={this.state.utime} udate={this.state.udate}/>: 
			<div className="container">
				<div className="jumbotron text-center">
				<h2 >Count Down App</h2>
				<form onSubmit={this.whenSubmit}>
 				 <div className="form-row">
   				 	<div className="form-group col-md-6">
    			  <label for="inputDate">Date</label>
      				<input type="date" className="form-control" id="inputDate" ref={this.ndate} placeholder="Date"/>
   					 </div>
   					 <div className="form-group col-md-6">
      				<label for="inputTime">Time</label>
      					<input type="time" className="form-control" id="inputTime" ref={this.ntime} placeholder="Time"/>
    				</div>
    			</div>
    			<button className="btn btn-primary">Submit</button>

				</form>
				</div>
			</div>   
			}
			</div>
			 );
	}

}