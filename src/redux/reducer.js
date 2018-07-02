
// Constant Action Types
const SELECTED_MEME = 'SELECTED_MEME';

export default function(state=null, action){
    switch(action.type){
        case SELECTED_MEME:
            return action.payload;
        default:
            return state;
    }
}

export function selectedMeme(meme){
    return{
        type: SELECTED_MEME,
        payload: meme
    }
}