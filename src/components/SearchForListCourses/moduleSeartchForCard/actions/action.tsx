import * as ActionType from "../contants/contants";

export const actSendCourseToStore = (course: any) => {
  return {
    type: ActionType.sendCourseToStore,
    Course: course,
    quantityForCourse: 0,
  };
};
