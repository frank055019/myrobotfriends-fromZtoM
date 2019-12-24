import React ,{Component}from 'react';
import {connect} from 'react-redux';
// import {robots} from '../components/robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import {setSearchField,requestRobots} from '../actions.js'
import Scroll from '../components/Scroll.js'

const mapStateToProps = state =>{
	return{
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		ispending: state.requestRobots.ispending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		onSearchChange: (event)=>dispatch(
			setSearchField(event.target.value)),
		onRequestRobots: ()=>dispatch(requestRobots())
}}

class App extends Component {
	// constructor(){
	// 	super()
	// 		this.state={
	// 			robots:robots
	// 		}
	// }

	componentDidMount(){
		this.props.onRequestRobots();
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response=>response.json())
		// .then(user=>this.setState({robots:robots}))	
	}
  
	render(){
		// const{robots} = this.state;
		const{searchField,onSearchChange,robots,ispending } = this.props;
		const filteredRobots =robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase())
		})
			return ispending? 
			<h1>Loading</h1> :(
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
		 	);
	}
}
export default 
connect(mapStateToProps,mapDispatchToProps)(App);