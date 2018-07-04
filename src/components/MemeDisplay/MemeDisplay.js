import React, {Component} from 'react';
import './MemeDisplay.css';
import {connect} from 'react-redux';

class MemeDisplay extends Component{

    displayMeme = () =>{
        return <img className="meme-img" src={this.props.meme.url} />
    }

    render(){
        return(
            <div className="meme-display-component">
                {!this.props.generatedMeme ? <h2>Select a background image </h2> : <img className="meme-img" src={this.props.generatedMeme} /> }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        meme: state.selectedMeme,
        generatedMeme: state.generatedMeme
    }
}

export default connect(mapStateToProps)(MemeDisplay);