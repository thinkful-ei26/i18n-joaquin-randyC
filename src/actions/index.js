// Add your code for SET_LANGUAGE and setLanguage
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const setLanguage = (language, listIndex) =>({
type: SET_LANGUAGE,
language,
listIndex
});

// export const ADD_CARD = 'ADD_CARD';
// export const addCard = (text, listIndex) => ({
//     type: ADD_CARD,
//     text,
//     listIndex
// });