import { csrfFetch } from "./csrf";

//Action Types
const LOAD_UNITS = "units/LOAD_UNITS";
const CREATE_UNIT = "units/CREATE_UNIT";
const UPDATE_UNIT = "units/UPDATE_UNIT"
const DELETE_UNIT = "units/DELETE_UNIT";

//Action Creators

const loadUnits = (units) => {
    return {
        type: LOAD_UNITS,
        payload: units
    }
};

const createUnit = (unit) => {
    return {
        type: CREATE_UNIT,
        payload: unit
    }
};

const updateUnit = (unit) => {
    return {
        type: UPDATE_UNIT,
        payload: unit
    }
};

const deleteUnit = (unitId) => {
    return {
        type: DELETE_UNIT,
        payload: unitId
    }
};

//Thunks
export const getUnits = (languageCourseId) => async (dispatch) => {
    try{
        const response = await csrfFetch(`/api/language-courses/${languageCourseId}/units`);
    
        if (response.ok) {
            const units = await response.json();
            dispatch(loadUnits(units));
            return units;
        } 
    } catch(e){
        return {message: "Units load failed"}
    }

};

export const createNewUnit = (languageCourseId, unit) => async (dispatch) => {
    const response = await csrfFetch(`/api/language-courses/${languageCourseId}/units`, {
        method: "POST",
        body: JSON.stringify(unit)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(createUnit(data));
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }
};

export const deleteExistingUnit = (unitId) => async (dispatch) => {
    const response = await csrfFetch(`/api/units/${unitId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const deleteConfirmation = await response.json();
        if (deleteConfirmation.message === "Successfully deleted") {
            dispatch(deleteUnit(unitId));
            return deleteConfirmation;
        }
    }
}

export const updateExistingUnit = (unitId, unitBody) => async (dispatch) => {
    const response = await csrfFetch(`/api/units/${unitId}`, {
        method: "PUT",
        body: JSON.stringify(unitBody)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(updateUnit(data));
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }
};

//Reducer
const initialState = {};

const unitReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_UNITS: {
            const newState = { ...state };
            const unit = action.payload;
            newState[unit.id] = unit;
            return newState;
        }
        case CREATE_UNIT: {
            const newState = { ...state };
            const unit = action.payload;
            newState[unit.id] = action.payload;
            return newState;
        }
        case DELETE_UNIT: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        }
        case UPDATE_UNIT: {
            const newState = {...state};
            const unit = action.payload;
            const updatedUnit = {
                ...newState[unit.id],
                id: unit.id,
                title: unit.title,
                imgUrl: unit.imgUrl,
                languageCourseId: unit.languageCourseId,
                languageCode: unit.languageCode,
                createdAt: unit.createdAt,
                updatedAt: unit.updatedAt
            }
        
            newState[unit.id] = updatedUnit;
            return newState;
        }
        default:
            return state;
    }
}

export default unitReducer;