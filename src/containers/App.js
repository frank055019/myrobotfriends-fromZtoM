import React ,{Component}from 'react';
import {robots} from '../components/robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll.js'

class App extends Component {
	constructor(){
		super()
			this.state={
				robots:robots,
				searchfield:''
			}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(user=>this.setState({robots:robots}))	
	}

	onSearchChange=(event)=>{
		this.setState({ searchfield: event.target.value})
		
		// console.log(event.target.value);
	}
	render(){
		const{robots, searchfield} = this.state;
		const filteredRobots =robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
			return !robots.length? 
			<h1>Loading</h1> :(
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
		 	);
	}
}
export default App;