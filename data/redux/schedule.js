import moment from "moment";

export const UPDATE_CLASSES = "UPDATE_CLASSES";
export const UPDATE_DAY = "UPDATE_DAY";

export const updateClasses = (classes) => ({
  type: UPDATE_CLASSES,
  classes: classes,
});

export const updateDay = (day) => ({
  type: UPDATE_DAY,
  selectedDay: day,
});

const initialState = {
  classes: [],
  selectedDay: moment(),
  test: "test",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CLASSES:
      return {
        ...state,
        classes: action.classes,
      };
    case UPDATE_DAY:
      return {
        ...state,
        selectedDay: action.selectedDay,
      };
    default:
      return state;
  }
};
