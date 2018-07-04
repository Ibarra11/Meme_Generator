import React, { Component } from 'react';
import './MemeGenerator.css';
import { connect } from 'react-redux';
import { fetchMemes, selectedMeme, createMeme } from '../../redux/reducer';
import axios from 'axios';

class MemeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topCaption: '',
            bottomCaption: '',
        }
    }

    componentDidMount(){
        this.props.fetchMemes();
    }

    onInputChange = event => this.setState({ [event.target.name]: event.target.value })

    generateMeme = event => {
        event.preventDefault();
        let {id} = this.props.meme;
        let {topCaption, bottomCaption} = this.state;
        this.props.createMeme(id, topCaption, bottomCaption);
        
    }

    onMemeChange = event => {
        this.props.selectedMeme(this.props.memeList[event.target.value]);
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
                                {this.props.memeList ? this.props.memeList.map((meme, index) => {
                                    return <option value={index} key={meme.id} >{meme.name}</option>
                                }) : ''}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="input-caption">Top Caption</label>
                            <input id="input-caption" className="form-control" onChange={this.onInputChange} value={this.state.topCaption} placeholder="Write a caption for your meme" name='topCaption' type="text" />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="input-caption">Bottom Caption</label>
                            <input id="input-caption" className="form-control" onChange={this.onInputChange} value={this.state.bottomCaption} placeholder="Write a caption for your meme" name='bottomCaption' type="text" />
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

function mapStateToProps(state) {
    
    return {
        memeList: state.memeList,
        meme: state.selectedMeme
    }
}

export default connect(mapStateToProps, { fetchMemes, selectedMeme, createMeme })(MemeGenerator); 