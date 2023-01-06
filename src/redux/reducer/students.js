import { ADD_STUDENT, CHECK_OUT } from "../constant";

const initialState = {
  students: [
    {
      name: "Shahbaz",
      rollno: "1",
      checkin: new Date().toTimeString(),
      checkout: "",
    },
  ],
  totalStudent: 1,
};
const handleStudents = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
        totalStudent: state.totalStudent + 1,
      };
    case CHECK_OUT:
      let updateData = [...state.students];
      updateData = updateData.map((item, index) => {
        if (action.payload === index)
          return { ...item, checkout: new Date().toTimeString() };
        else return item;
      });

      return {
        ...state,
        students: updateData,
      };
    default:
      return {
        ...state,
      };
  }
};

export default handleStudents;
