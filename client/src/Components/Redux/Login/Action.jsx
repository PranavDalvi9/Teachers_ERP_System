// import { useDispatch } from "react-redux";



export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT"
 
export const loginLoading = () => ({
    type : LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type : LOGIN_SUCCESS,
    payload
});

export const loginFailure =() => ({
    type: LOGIN_FAILURE
})

export const logout = () => ({
  type : LOGOUT
})

export const login = ({email, password}) => (dispatch)=> {
    // const dispatch = useDispatch();

    dispatch(loginLoading())
    fetch("https://apiloginregister.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({email,password}),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => dispatch(loginSuccess({email,token:res.token})))
    .then((res) => {alert("Login Successfull")})
    .catch((err) => dispatch(loginFailure()))
}


export const register = (payload) => (dispatch)=> {
    // const dispatch = useDispatch();

    dispatch(loginLoading())
    fetch("https://loginregisterbackend.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => dispatch(loginSuccess({email:res.email,token:res.token})))
    .then((res) => {alert("Register Successfull")})
    .catch((err) => dispatch(loginFailure()))
}
