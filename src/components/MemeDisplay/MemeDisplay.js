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
                {!this.props.meme ? <h2>Select a background image to begin</h2> : this.displayMeme()}
            </div>
        )
    }
}

function mapStateToProps(state){
    
    return{
        meme: state
    }
}

export default connect(mapStateToProps)(MemeDisplay);