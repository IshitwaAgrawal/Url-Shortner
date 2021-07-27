import * as actions from './actions';
const initialState = {
    user:[],
    urls:[],
    jwt:"",
};

const appReducer = (state=initialState, action) =>{
    switch(action.type){
        case actions.demo_action:{
            return {
                ...state,
                urls:state.urls.push(action.payload),
            };
        };
        case actions.change_user:{
            return {
                ...state,
                user:action.payload,
            };
        };
        case actions.change_urls:{
            return {
                ...state,
                urls:action.payload,
            };
        };
        case actions.change_jwt:{
            return {
                ...state,
                jwt:action.payload,
            };
        };

        default:
            return state;
    }
}

export default appReducer;