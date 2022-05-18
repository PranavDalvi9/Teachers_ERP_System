// import { useDispatch } from "react-redux";

import axios from 'axios';

export const CLASSESSS_LOADING = "CLASSESSS_LOADING";
export const CLASSESSS_SUCCESS = "CLASSESSS_SUCCESS";
export const CLASSESSS_FAILURE = "CLASSESSS_FAILURE";
// export const LOGOUT = "LOGOUT"
 
export const cLoad1 = () => ({
    type : CLASSESSS_LOADING
});

export const cSucc1 = (payload) => ({
    type : CLASSESSS_SUCCESS,
    payload
});

export const cFal1 =() => ({
    type: CLASSESSS_FAILURE 
})

export const getClasses2 = (class1) => (dispatch) => {
   
    dispatch(cLoad1())
        axios.post("https://evaluationteacher1.herokuapp.com/class",{class1})
        .then((res) => {dispatch(cSucc1(res.data.class1))})
        .catch((err) => {dispatch(cFal1(err))})
}