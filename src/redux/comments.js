import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (
  state = { errMess: null, comments: [], comment1: null },
  action,
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;

      return { ...state, comments: state.comments.concat(comment) };
    case ActionTypes.DELETE_COMMENT:
      var comment = action.payload;
      var allcom = state.comments;
      var com = JSON.stringify(comment);
      var c = allcom.filter((allcom) => {
        return allcom.id != com;
      });

      return {
        ...state,
        comments: c,
      };
    case ActionTypes.EDIT_COMMENT:
      var comment = action.payload;
      var allcom = state.comments;
      var com = JSON.stringify(comment.id);
      var c = allcom.filter((allcom) => {
        return allcom.id != com;
      });

      return { ...state, comments: c.concat(comment) };
    default:
      return state;
  }
};
