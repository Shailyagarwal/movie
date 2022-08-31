import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons"
import React, { Component } from "react";
import { connect } from 'react-redux'
import { getMovieData, getMovieDetails } from './reducer'
import './general.css'
import { Navigate } from "react-router-dom";


class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: false
        }
    }

    componentDidMount() {
        this.props.getMovieData();
    }

    getMovieDataDetails = (data) => {
        this.props.getMovieDetails(data)
        if (data) {
            this.setState({ navigate: true })
        } else {
            this.setState({ navigate: false })
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
                <div className="header">
                    <div className='icon'>
                        <FontAwesomeIcon icon={faCameraRetro} color="yellow" />
                        <p className='movie'>Movie</p>
                    </div>
                    <div className='signIn'>
                        <p>Sign In</p>
                    </div>
                </div>
                <div className='body'>
                    {this.props.movieList.movies && this.props.movieList.movies.map((item) => {
                        return (
                            <div>
                                <img key={item.id} src={item.posterUrl} className='imageStyle' onClick={() => this.getMovieDataDetails(item)} />
                                <p>{item.title}</p>
                                <p>{item.year}</p>
                            </div>
                        )
                    })}
                    {console.log(this.props.movieDetails, "this.props.movieDetails")}
                    {this.props.movieDetails.id && <Navigate to="/movieDetails" />}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = {
    getMovieData,
    getMovieDetails
}

const mapStateToProps = (state) => {
    return {
        movieList: state.apiReducer.movieList,
        movieDetails: state.apiReducer.movieDetails
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);