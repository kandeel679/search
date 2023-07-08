import React,{Component} from "react";
import Cardlist from "./Cardlist";
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css';



class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            Searchfelid:''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/users')
              .then(response => response.json())
              .then(users => this.setState({robots:users}))
    }
    OnSearch=(Event)=>{
        this.setState({Searchfelid:Event.target.value});
    }
    render(){
        const FilterdNames = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.Searchfelid.toLowerCase())
        })
        return(
            <div className="tc" >
                {/* <h1 className="tital f1"></h1> */}
                <SearchBox OnSearch={this.OnSearch}/>
                <Scroll>
                <Cardlist robots={FilterdNames} />
                </Scroll>
            </div>
        )
    }
}
export default App;
