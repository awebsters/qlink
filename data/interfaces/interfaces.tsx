import moment from "moment";

export interface CourseInterface {
  code: String;
  startTime: typeof moment;
  endTime: typeof moment;
  location: String;
}

export interface ClassInterface {
  code: String;
  startTime: typeof moment;
  endTime: typeof moment;
  location: String;
}
