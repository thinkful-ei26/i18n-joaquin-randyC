import * as actions from '../actions';

// Add your code for the languageReducer

const initialState = {language: 'English'};
// 
export const languageReducer = (state =initialState, action)=>{
    console.log('Current State is',state.language);
switch(action.type){
    case 'ENGLISH':
    return state;
    
    case 'FRENCH':
    return Object.Assign({}, state, {language:'French'});
    
    default:
    return state
    
}
};



export default languageReducer
