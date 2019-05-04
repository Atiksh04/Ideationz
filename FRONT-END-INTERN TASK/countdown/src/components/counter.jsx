import React from 'react'

export class Counter extends React.Component{
	constructor(props){
		super(props)
		this.state={
			d:0,
			h:0,
			m:0,
			s:0
		}
		this.cal=this.cal.bind(this)
	}
	
	cal(){
		
		var now = new Date().getTime();
		
		 var time=this.props.utime
		var udate=new Date(this.props.udate)
		var d1=udate.getDate()
		var m1=udate.getMonth()
		var y1=udate.getFullYear()
		var m=time.slice(0,2)
		var se=time.slice(3)
		var fdate=new Date(y1,m1,d1,m,se,0).getTime();
		var distance=fdate-now
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     this.setState({
     	d:days,
     	h:hours,
     	m:minutes,
     	s:seconds
     })
}

componentDidMount(){
		setInterval(()=>{this.cal()},1000)
	}

	render(){
		return(
			<div className="container">
			<div className="jumbotron  text-center inline">
				<span className="display-4">Days: {this.state.d} </span>
				<span className="display-4">Hours :{this.state.h} </span>
				<span className="display-4">Minutes : {this.state.m} </span><br/>
				<span className="display-4">Seconds : {this.state.s} </span>
			</div>
			</div>
			)
	}
}