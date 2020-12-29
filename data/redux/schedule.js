export const UPDATE_CLASSES = "UPDATE_CLASSES";

export const updateClasses = (classes, day) => ({
  type: UPDATE_CLASSES,
  classes: classes,
  selectedDay: day,
});

const initialState = {
  classes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CLASSES:
      return {
        ...state,
        classes: action.classes,
        selectedDay: action.day,
      };
    default:
      return state;
  }
};
