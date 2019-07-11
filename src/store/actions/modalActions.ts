export const createModal = (state: boolean) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: "CREATE_MODAL", modalStatus: state });
  };
};
