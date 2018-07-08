import React, {Component} from 'react';
import './MemeDisplay.css';
import {connect} from 'react-redux';
import swal from 'sweetalert2';
import {resetState} from '../../redux/reducer';

class MemeDisplay extends Component{
    displayMeme = () =>{
        if(this.props.meme){
            return <img className="meme-img" src={this.props.meme.url} />
        }
        else{
            return '';
        }
    }

    generateMeme = () =>{
        swal({
            title: 'Your Meme',
            text: `Share: ${this.props.generatedMeme}`,
            imageUrl: this.props.generatedMeme,
            imageWidth: 350,
            imageHeight: 350,
            button: 'Back',
            animation: false
        })
        this.props.resetState();
    }


    render(){
        return(
            <div className="meme-display-component">
                {!this.props.generatedMeme[0] ? this.displayMeme() : this.generateMeme() }
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

export default connect(mapStateToProps, {resetState})(MemeDisplay);