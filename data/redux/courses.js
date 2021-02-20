import moment from "moment";

export const UPDATE_COURSES = "UPDATE_COURSES";

export const updateCourses = (classes) => ({
  type: UPDATE_COURSES,
  classes: classes,
});

const initialState = {
  classes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COURSES:
      return {
        ...state,
        classes: action.classes,
      };
    default:
      return state;
  }
};
