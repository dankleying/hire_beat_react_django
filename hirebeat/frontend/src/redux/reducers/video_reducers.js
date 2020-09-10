import {
  GET_VIDEOS,
  DELETE_VIDEO,
  ADD_VIDEO,
  ADD_REVIEWS,
  GET_UNREVIEWED_VIDEO,
  VIDEO_UNDER_REVIEW,
} from "../actions/action_types";

const initialState = {
  videos: [],
  q_type: [],
  q_category: '',
  loaded: false,
  review_count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loaded: true,
      };
    case GET_UNREVIEWED_VIDEO:
      return {
        q_type: action.payload.video.q_description,
        q_category: action.payload.video.q_category,
        videos: action.payload.video,
        loaded: true,
        review_count: action.payload.review_count,
      };
    case DELETE_VIDEO:
      return {
        ...state,
        videos: state.videos.filter((video) => video.id !== action.payload),
      };
    case ADD_VIDEO:
      return {
        ...state,
        videos: [...state.videos, action.payload],
      };
    case VIDEO_UNDER_REVIEW:
      return {
        ...state,
        videos: state.videos.map((video) => {
          if (video.id == action.payload.id) {
            return {
              ...video,
              needed_expert_review: action.payload.needed_expert_review,
              needed_ai_review: action.payload.needed_ai_review,
            };
          }
          return video;
        }),
      };
    case ADD_REVIEWS:
    default:
      return state;
  }
}
