const initialState = {
    greeting: ''
  };

export const setGreeting = (greeting) => ({
  type: 'SET_GREETING',
  payload: greeting,

});

export const fetchGreetingMessage = () => {
    return dispatch => {
      fetch('http://127.0.0.1:3000/api/v1/message/random_greeting')
        .then(response => response.json())
        .then(data => dispatch(setGreeting(data.greeting)));
    };
  };

const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_GREETING':
        return {
          ...state,
          greeting: action.payload
        };
      default:
        return state;
    }
  };
export default greetingReducer;
