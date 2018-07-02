import React, { Component } from 'react';
import './MemeGenerator.css';
import {connect} from 'react-redux';
import {selectedMeme} from '../../redux/reducer';
import axios from 'axios';

class MemeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memeList: [],
            topCaption: '',
            bottomCaption: ''
        }
    }

    componentDidMount(){
        axios.get('https://api.imgflip.com/get_memes')
        .then(res => this.setState({ memeList: res.data.data.memes}))
        .catch(err => console.log(err))
    }

    onInputChange = event => this.setState({ [event.target.name]: event.target.value })

    generateMeme = event => {
        event.preventDefault();
    }

    onMemeChange = event =>{
        this.props.selectedMeme(this.state.memeList[event.target.value]);
    }


    render() {
        return (
            <div className="meme-generator-component">
                <div className="meme-generator-heading">
                    <h1>MemeGenerator</h1>
                    <h2>Create & Share Your Memes</h2>
                </div>
                <div className="meme-generator-form">
                    <form id="meme-generator" onSubmit={this.generateMeme}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="input-img">Background Img</label>
                            <select onChange={this.onMemeChange} required className="form-control" form='meme-generator' name="meme-select">
                                <option value="" disabled selected>Select your img</option>
                                {this.state.memeList.map((meme,index) =>{
                                    return <option value={index} key={meme.id} >{meme.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="input-caption">Top Caption</label>
                            <input id="input-caption" className="form-control" onChange={this.onInputChange} value={this.state.caption} placeholder="Write a caption for your meme" name='caption' type="text" />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="input-caption">Bottom Caption</label>
                            <input id="input-caption" className="form-control" onChange={this.onInputChange} value={this.state.caption} placeholder="Write a caption for your meme" name='caption' type="text" />
                        </div>
                        <div className="btn-container">
                            <button className="btn " type="submit">Generate Meme</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {selectedMeme})(MemeGenerator); 