import {
  GETTINGCLASSES,
  GOTCLASSES,
  ADDCLASS,
  ADDINGCLASS,
  ADDEDCLASS,
  EDITCLASS,
  EDITEDCLASS,
  DELETECLASS,
  DELETEDCLASS,
  GETTINGSTUDENTS,
  GOTSTUDENTS,
  ADDINGSTUDENT,
  ADDEDSTUDENT,
  DELETESTUDENT,
  DELETEDSTUDENT,
  LOGIN,
  LOGOUT,
  REGISTER,
  CREATEUSER,
  ERROR,
  SIGNING_UP,
  USER_CREATED,
  SET_CURRENT_USER,
} from "../actions";

const initialState = {
  classes: [],
  students: [],
  users: [],
  authed: false,
  // modal: false,
  // loggingIn: false,
  // loggedIn: false,
  // error: null,
  // signingIn: false,
  homepage: true,
  signingup: false
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // case's go here: e.g. ADD_USER, ADD_STUDENT etc.
    case GETTINGCLASSES:
      return { ...state, gettingClass: true };
    case GOTCLASSES:
      return {
        ...state,
        classes: action.classes,
        gettingClass: false,
        error: null
      };
    case ERROR:
      return { ...state, error: action.errorMessage };
    case ADDCLASS:
      return {
        ...state,
        classes: [...state.classes, { ...action.classes }]
      };

      {
        /* Not entirely sure if I need progressive states or not, 
    if this comment is here I'm attempting with the single ADDCLASS case above (and it's working
  and so I forgot to delete this...) */
      }
    // case ADDINGCLASS:
    //   return { ...state, addingClass: true};
    // case ADDEDCLASS:
    //   return { ...state, classes: action.classes, addingClass: false };
    // case EDITCLASS:
    //   let copy = state.classes.slice();
    //   console.log('Class in reducer: ', action.classes);

    //   copy.filter(class => {

    //   };
    //   return { ...state, editingClass: true};
    case EDITEDCLASS:
      return { ...state, classes: action.classes, editingClass: false };
    case GETTINGSTUDENTS:
      return { ...state, gettingStudents: true };
    case GOTSTUDENTS:
      return { ...state, students: action.students, gettingStudents: false };
    case ADDINGSTUDENT:
      return { ...state, addingStudent: true };
    case ADDEDSTUDENT:
      return { ...state, students: action.students, addingStudent: false };
    case LOGIN:
      return { ...state, authed: true, user: action.user.username };
    case LOGOUT:
      return { ...state, authed: false };
    // case CREATEUSER:
    //   return { ...state, authed: true, user: action.user.username}
    case REGISTER:
      return {
        ...state,
        signingUp: false,
        users: action.users
      };
    case SIGNING_UP:
      return {
        ...state,
        signingUp: true
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        authed: true,
        user: action.user
      };
    default:
      return state;
  }
};

export default Reducer;