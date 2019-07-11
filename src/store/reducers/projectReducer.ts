const initState = {
  projects: [
    { id: "1", title: "asdasda1", content: "asdasdsad sad sad sad as" },
    { id: "2", title: "asdasda2", content: "asdasdsad sad sad sad as" },
    { id: "3", title: "asdasda3", content: "asdasdsad sad sad sad as" }
  ]
};

const projectReducer = (state = initState, action: any) => {
  return state;
};

export default projectReducer;
