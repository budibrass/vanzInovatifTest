import { 
    FETCH_DATA, 
    ADD_DATA, 
    CHANGE_STATUS
} from "./constants";

export const fetchData = (payload) => {
    return { 
        type: FETCH_DATA, payload
    }
};

export const addData = (payload) => {
    return {
        type: ADD_DATA, payload
    }
};

export const changeStatus = (payload) => {
    return {
        type: CHANGE_STATUS, payload
    }
};