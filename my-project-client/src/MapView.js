import React, { Component } from 'react'
import ContinentCard from './ContinentCard'

class MapView extends Component {

    state = {
        continents: [{name: "North America", id:1, countries:[{name:"USA", id:1}, {name:"Canada", id:2}, {name:"Mexico", id:3}]}, 
        {name:"South America", id:2, countries:[{name:"Brazil", id:4}, {name:"Peru", id:5}, {name:"Argentina", id:6}]},
        {name:"Europe", id:3, countries:[{name:"England", id:7}, {name:"France", id:8}, {name:"Italy", id:9}]}, 
        {name:"Africa", id:4, countries:[{name:"Egypt", id:10}, {name:"Tanzania", id:11}, {name:"South Africa", id:12}]}, 
        {name:"Asia", id:5, countries:[{name:"China", id:13}, {name:"Japan", id:14}, {name:"India", id:15}]}, 
        {name:"Oceania", id:6, countries:[{name:"Austrailia", id:16}, {name:"New Zealand", id:17}]}]
    }


    render() {
        return (
        <div className="MapView">
        { this.state.continents.map((continent) => {
		return <ContinentCard continent={continent} key={continent.id}/>})
	    }
        </div>
        )
    }
}

export default MapView