export const errorParser = async (error) => {
  if (!error) return "Network Error";
  return error.response ? error.response.data : error.message;
};

export const typeDispatcher = (dispatch, type, payload = null) =>
  dispatch({ type, payload });
