import {CLASSESSS_LOADING, CLASSESSS_SUCCESS, CLASSESSS_FAILURE } from "./Action"

const initState = {
    loading : false,
    error: false,
    todos: []
};


export const classesssReducer = (store = initState, {type , payload}) => {
    // console.log(store)
    switch (type){
        case CLASSESSS_LOADING: 
        return{...store, loading: true};

        case CLASSESSS_SUCCESS:
            return{...store, loading:false, todos: [...payload], error:false};

        case CLASSESSS_FAILURE:
            return{...store, loading:false, error:true, todos:[]};

        default :
        return store;   
    }
}