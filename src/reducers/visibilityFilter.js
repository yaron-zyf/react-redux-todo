import {VisibilityFilters} from "../actions";
import {SET_VISIBILITY_FILTER} from "../actions/actionTypes";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    if (action.type === SET_VISIBILITY_FILTER) {
        return action.filter;
    } else {
        return state;
    }
};

export default visibilityFilter;
