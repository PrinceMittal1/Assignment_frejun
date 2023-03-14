import {mystore} from '../store';

const addingmoredata = (data, dispatch) => {
  dispatch({
    type: 'MORE',
    info: data,
  });
};

export default addingmoredata;
