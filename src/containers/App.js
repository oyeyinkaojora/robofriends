import React,{Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundry';
import '../containers/App.css';

//A class always have a render that returns something


class  App extends Component {
    constructor(){
        super();//it calls the constructors of component
        this.state = {
            robots:[],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots: users}))
    }

    OnSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots,searchfield} = this.state;//destructing cuz we dont neccesarly need this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ? 
            <h1> loading</h1>:
        
            <div className="tc">
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange = {this.OnSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots= {filteredRobots} /> 
                    </ErrorBoundary>
                </Scroll>
            </div> 
        }
    };


export default App;