import { SELECT_COLOR } from '../constants';

export default function selectColor(data) {
    return (dispatch) => {
        dispatch({
            type: SELECT_COLOR,
            data
        });
    }
}