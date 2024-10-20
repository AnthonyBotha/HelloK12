import { csrfFetch } from "./csrf";

//Action Types
const LOAD_LANGUAGES = "languages/LOAD_LANGUAGES";
const CREATE_LANGAUGE = "languages/CREATE_LANGUAGE";
const DELETE_LANGUAGE = "languages/DELETE_LANGUAGE";

//Action Creators

const loadLanguages = (languages) => {
    return {
        type: LOAD_LANGUAGES,
        payload: languages
    }
}

const createLanguage = (language) => {
    return {
        type: CREATE_LANGAUGE,
        payload: language
    }
};

const deleteLanguage = (languageCourseId) => {
    return {
        type: DELETE_LANGUAGE,
        payload: languageCourseId
    }
};


//Thunks
export const getLanguages = () => async (dispatch) => {
    try{
        const response = await csrfFetch("/api/language-courses/");
    
        if (response.ok) {
            const courses = await response.json();
            dispatch(loadLanguages(courses));
            return courses;
        } 
        
    } catch(e){
        return {message: "Language courses load failed"}
    }

};

export const createNewLanguage = (language) => async (dispatch) => {
    const response = await csrfFetch("/api/language-courses/", {
        method: "POST",
        body: JSON.stringify(language)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(createLanguage(data));
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }
};

export const deleteExistingLanguage = (languageCourseId) => async (dispatch) => {
    const response = await csrfFetch(`/api/language-courses/${languageCourseId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const deleteConfirmation = await response.json();
        if (deleteConfirmation.message === "Successfully deleted") {
            dispatch(deleteLanguage(languageCourseId));
            return deleteConfirmation;
        }
    }
}

//Reducer
const initialState = {};

const languageCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LANGUAGES: {
            const newState = { ...state };
            const languageCourse = action.payload;
            newState[languageCourse.id] = languageCourse;
            return newState;
        }
        case CREATE_LANGAUGE: {
            const newState = { ...state };
            const languageCourse = action.payload;
            newState[languageCourse.id] = action.payload;
            return newState;
        }
        case DELETE_LANGUAGE: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        }
        default:
            return state;
    }
}

export default languageCourseReducer;