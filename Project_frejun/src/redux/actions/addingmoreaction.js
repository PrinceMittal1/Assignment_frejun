
// addingalldata will invoke wevery time when we reach to the end of the list
const addingmoredata = (data, dispatch) => {
  dispatch({
    type: 'MORE',
    info: data,
  });
};

export default addingmoredata;
