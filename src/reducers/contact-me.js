import {
  UPDATE_CONTACT_EMAIL,
  UPDATE_CONTACT_MESSAGE,
  UPDATE_CONTACT_NAME,
  CLEAR_CONTACT_FORM
} from '../actions/contact-me'
  
const initialState = {
  name: "",
  email: "",
  message: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CONTACT_EMAIL: {
      return Object.assign({}, state, {
        email: action.email,
      });
    }
    case UPDATE_CONTACT_MESSAGE: {
      return Object.assign({}, state, {
        message: action.message,
      });
    }
    case UPDATE_CONTACT_NAME: {
      return Object.assign({}, state, {
        name: action.name,
      });
    }
    case CLEAR_CONTACT_FORM: {
      return Object.assign({}, state, {
        name: "",
        email: "",
        message: "",
      });
    }
    default:
      return state
  }
}