const UPDATE_EMAIL_VALUE = 'lecture/auth/UPDATE_EMAIL_VALUE';
const UPDATE_PASSWORD_VALUE = 'lecture/auth/UPDATE_PASSWORD_VALUE';
const UPDATE_TOKEN_VALUE = 'lecture/auth/UPDATE_TOKEN_VALUE';

const updateEmailValue = value => ({ type: UPDATE_EMAIL_VALUE, value });
const updatePasswordValue = value => ({ type: UPDATE_PASSWORD_VALUE, value });
const updateTokenValue = value => ({ type: UPDATE_TOKEN_VALUE, value });

export const actions = {
    updateEmailValue,
    updatePasswordValue,
    updateTokenValue,
  };
  const tryLogin = () => {
    return async (dispatch, getState) => {
      const { auth: { email, password } } = getState();
      const response = await fetch('http://localhost:8000/api/session', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      try {
        if (response.status >= 200 && response.status < 400) {
          const data = await response.json();
          console.log(data)
          dispatch(updateTokenValue(data.token));
          window.localStorage.setItem('REDUX_LECTURE_AUTH_TOKEN', data.token);
        } else {
          console.error('Bad response');
        }
      } catch (e) {
        console.error(e);
      }
    };
  };
  
  export const thunks = {
    tryLogin,
  };

const token = window.localStorage.getItem('REDUX_LECTURE_AUTH_TOKEN');

const initialState = {
    token,
    email: "",
    password: ""
}

function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_EMAIL_VALUE: {
          return {
            ...state,
            email: action.value,
          };
        }
        case UPDATE_PASSWORD_VALUE: {
            return {
              ...state,
              password: action.value,
            };
          }
          case UPDATE_TOKEN_VALUE: {
            return {
              ...state,
              token: action.value,
            };
          }
          default: {
            return state;
          }
    }
}

export default reducer;