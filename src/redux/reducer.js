// Constant Action Types
import axios from 'axios';
import querystring from 'querystring';



let intialState = {
    memeList: [],
    selectedMeme: [],
    generatedMeme: []
}
const SELECTED_MEME = 'SELECTED_MEME';
const FETCH_MEMES = 'FETCH_MEMES';
const CREATE_MEME = 'CREATE_MEME';
const RESET_STATE = 'RESET_STATE';

export default function(state=intialState, action){
    switch(action.type){
        case FETCH_MEMES:
            return Object.assign({}, state, {memeList: action.payload.data.data.memes} );
        case SELECTED_MEME:
            return Object.assign({}, state, {selectedMeme: action.payload} )
        case CREATE_MEME:
            return Object.assign({}, state, {generatedMeme: action.payload.data.data.url} )
        case RESET_STATE:
            return Object.assign({}, state, {generatedMeme: ''});
        default:
            return state;
    }
}

export function fetchMemes(){
    const request = axios.get('https://api.imgflip.com/get_memes');
    return{
        type: FETCH_MEMES,
        payload: request
    }
}

export function selectedMeme(meme){
    return{
        type: SELECTED_MEME,
        payload: meme
    }
}

export function createMeme(id, topCaption, bottomCaption){
    const request = axios.post('https://api.imgflip.com/caption_image', querystring.stringify({
      template_id: id,
      username: 'aibarra13',
      password: 'ibarra2016!',
      text0: topCaption,
      text1: bottomCaption
}))
return{
    type: CREATE_MEME,
    payload: request
}
}

export function resetState(){
    return{
        type: RESET_STATE,
    }
}