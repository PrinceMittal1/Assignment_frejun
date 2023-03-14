
// addingalldata will invoke when we send data to store in redux for the very first time
const addingalldata = (data, dispatch) => {
  dispatch({
    type: 'NEW',
    info: data,
  });
};

export default addingalldata;
