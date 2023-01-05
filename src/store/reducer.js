import { 
    ADD_DATA,
    FETCH_DATA,
    CHANGE_STATUS
} from "./constants";

const tmp = localStorage && localStorage.data ? JSON.parse(localStorage.data) : [];
const initialState = {
    data: tmp
    // data: [
    //     {
    //         "id": 1,
    //         "title": "test title 1",
    //         "status": 1,
    //         "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         "id": 2,
    //         "title": "test title 2",
    //         "status": 1,
    //         "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         "id": 3,
    //         "title": "test title 3",
    //         "status": 0,
    //         "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         "id": 4,
    //         "title": "test title 1",
    //         "status": 1,
    //         "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         "id": 5,
    //         "title": "test title 2",
    //         "status": 1,
    //         "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         "id": 6,
    //         "title": "test title 3",
    //         "status": 0,
    //         "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         "id": 7,
    //         "title": "test title 3",
    //         "status": 0,
    //         "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         "id": 8,
    //         "title": "test title 3",
    //         "status": 0,
    //         "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     }
    // ]
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        case ADD_DATA:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }
        case CHANGE_STATUS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
};

export default Reducer;

