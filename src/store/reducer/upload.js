import {
    UPLOADED,
    FAILED_UPLOAD,
    GET_PHOTOS,
    FAILED_PHOTOS
} from '../action/types';


const statefields = {
    photos: [],
    allphotos: []
}

const uploads = (state = statefields, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
        case UPLOADED:
            return {
                ...state,
                photos: action.payload
            }
        case FAILED_UPLOAD:
            return {
                ...state
            }
        case GET_PHOTOS:
            return {
                ...state,
                allphotos: state.allphotos.concat(action.payload)
            }
        case FAILED_PHOTOS:
            return {
                ...state
            }
        case "S":
            return {
                ...state,
                allphotos: state.allphotos.filter(item => item.album !== action.payload)
            }
        case "F":
            return {
                ...state,
                allphotos: action.payload
            }
    }
}

export default uploads;
