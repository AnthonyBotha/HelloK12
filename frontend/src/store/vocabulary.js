import { csrfFetch } from "./csrf";

//Action Types
const LOAD_VOCABULARY = "vocabulary/LOAD_VOCABULARY";
const CREATE_VOCABULARY = "vocabulary/CREATE_VOCABULARY";
const UPDATE_VOCABULARY = "vocabulary/UPDATE_VOCABULARY"
const DELETE_VOCABULARY = "vocabulary/DELETE_VOCABULARY";

//Action Creators
const loadVocabulary = (vocabulary) => {
    return {
        type: LOAD_VOCABULARY,
        payload: vocabulary
    }
};

const createVocabulary = (vocabulary) => {
    return {
        type: CREATE_VOCABULARY,
        payload: vocabulary
    }
};

const updateVocabulary = (vocabulary) => {
    return {
        type: UPDATE_VOCABULARY,
        payload: vocabulary
    }
};

const deleteVocabulary = (vocabularyId) => {
    return {
        type: DELETE_VOCABULARY,
        payload: vocabularyId
    }
};

//Thunks
export const getVocabulary = (unitId) => async (dispatch) => {
    try{
        const response = await csrfFetch(`/api/units/${unitId}/vocabulary`);
    
        if (response.ok) {
            const vocabulary = await response.json();
            dispatch(loadVocabulary(vocabulary));
            return vocabulary;
        } 
    } catch(e){
        return {message: "Vocabulary load failed"}
    }

};

export const createNewVocabulary = (unitId, vocabulary) => async (dispatch) => {
    const response = await csrfFetch(`/api/language-courses/${unitId}/vocabulary`, {
        method: "POST",
        body: JSON.stringify(vocabulary)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(createVocabulary(data));
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }
};

export const deleteExistingVocabulary = (vocabularyId) => async (dispatch) => {
    const response = await csrfFetch(`/api/vocabulary/${vocabularyId}`, {
        method: "DELETE"
    }); 

    if (response.ok) {
        const deleteConfirmation = await response.json();
        if (deleteConfirmation.message === "Successfully deleted") {
            dispatch(deleteVocabulary(vocabularyId));
            return deleteConfirmation;
        }
    }
}

export const updateExistingVocabulary = (vocabularyId, vocabularyBody) => async (dispatch) => {
    const response = await csrfFetch(`/api/vocabulary/${vocabularyId}`, {
        method: "PUT",
        body: JSON.stringify(vocabularyBody)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(updateVocabulary(data));
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }
};

//Reducer
const initialState = {};

const vocabularyReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_VOCABULARY: {
            const newState = { ...state };
            const vocabulary = action.payload;
            newState[vocabulary.id] = vocabulary;
            return newState;
        }
        case CREATE_VOCABULARY: {
            const newState = { ...state };
            const vocabulary = action.payload;
            newState[vocabulary.id] = action.payload;
            return newState;
        }
        case DELETE_VOCABULARY: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        }
        case UPDATE_VOCABULARY: {
            const newState = {...state};
            const vocabulary = action.payload;
            const updatedVocabulary = {
                ...newState[vocabulary.id],
                id: vocabulary.id,
                word: vocabulary.word,
                unitId: vocabulary.unitId,
                imgUrl: vocabulary.imgUrl,
                languageCode: vocabulary.languageCode,
                createdAt: vocabulary.createdAt,
                updatedAt: vocabulary.updatedAt
            }
        
            newState[vocabulary.id] = updatedVocabulary;
            return newState;
        }
        default:
            return state;
    }
}

export default vocabularyReducer;