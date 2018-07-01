import React, { Component } from 'react';
import axios from 'axios';
import './MemeGenerator.css';

class MemeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            caption: ''
        }
    }
    onInputChange = event => this.setState({ [event.target.name]: event.target.value })

    generateMeme = event => {
        event.preventDefault();
        axios.post('/api/memegenerator', { imgUrl: this.state.imgUrl, caption: this.state.caption })
            .then((res) => { console.log(res) })
    }

    render() {
        return (
            <div className="meme-generator-component">
                <div className="meme-generator-heading">
                    <h1>MemeGenerator</h1>
                    <h2>Create & Share Your Memes</h2>
                </div>
                <div className="meme-generator-form">
                    <form onSubmit={this.generateMeme}>
                        <div className="form-group">
                            <label class="form-label" For="input-img">Image Url</label>
                            <input id="input-img" className="form-control" onChange={this.onInputChange} value={this.state.imgUrl} placeholder="Enter an image url" name='imgUrl' type="text" />
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="input-caption">Caption</label>
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

export default MemeGenerator;