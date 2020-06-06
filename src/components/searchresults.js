import React from 'react'
import Search from './search'
import Navigationbar from './navigationbar'
import Movielist from './movielist'

const backend_api = `http://localhost:3001`

class Searchresults extends React.Component {

    state={
        movies: [],
        searchTerm: ''
    }


    // componentDidMount(){
    //     this.getMovies()
    //     this.getReviews()
    // }

    //Functions to fetch data
    getMovies=()=>{
        fetch(`${backend_api}/movies`)
        .then(r => r.json())
        .then(movies => this.setState({movies: movies}))
    }

    getReviews=()=>{
        fetch(`${backend_api}/reviews`)
        .then(r => r.json())
        .then(reviews => this.setState({reviews: reviews}))
    }

    handleChange=(e)=>{
        this.setState({searchTerm: e.target.value})
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`${backend_api}/movies`)
        .then(r => r.json())
        .then(movies => this.setState({movies: movies}))
    }


    render(){
        console.log('search state:', this.state)
        return(
            <div>
            <Navigationbar/>
            <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <Movielist movies={this.state.movies}/>
            </div>
        )

    }


}

export default Searchresults