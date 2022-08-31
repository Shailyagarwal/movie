import React, { Component } from "react";
import { connect } from 'react-redux'
class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ justifyContent: 'center', alignItems: 'center', display: "flex", backgroundColor: "black", color: "yellow" }}>
                <div style={{ float: 'left' }}>
                    <img src={this.props.movieDetails.posterUrl} />
                </div>
                <div style={{ float: 'right' }}>
                    <h2>{this.props.movieDetails.title}</h2>
                    <p>{this.props.movieDetails.genres && this.props.movieDetails.genres.map((item) => { return (<p>{item}</p>) })}</p>
                    <div>
                        <p>{this.props.movieDetails.plot}</p>
                    </div>
                    <div>
                        <button className="download">Download</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        movieDetails: state.apiReducer.movieDetails
    }
};

export default connect(mapStateToProps)(MovieDetails);
