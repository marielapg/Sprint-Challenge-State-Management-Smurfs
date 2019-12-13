import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    POST_SMURFS_START,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAILURE,
    DELETE_SMURFS_START,
    DELETE_SMURFS_SUCCESS,
    DELETE_SMURFS_FAILURE
} from '../actions/index';

const initialState = {
    isLoading: false,
    data: [],
    errors: null
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                data: [],
                errors: null
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload,
                errors: null
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: [],
                errors: payload
            }
        case POST_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                data: [],
                errors: null
            }
        case POST_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload,
                errors: null
            }
        case POST_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: [],
                errors: payload
            }
            case DELETE_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                data: [],
                errors: null
            }
        case DELETE_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload,
                errors: null
            }
        case DELETE_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: [],
                errors: payload
            }
        default:
            return state
    }
    
}

export default rootReducer;