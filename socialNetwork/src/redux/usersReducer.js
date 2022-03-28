const USER_FOLLOW = 'USER_FOLLOW';
const USER_NOFOLLOW = 'USER_NOFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_USERS_PAGE = 'SET_CURRENT_USERS_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [],
  currentUsersPage: 1,
  usersCount: 5,
  totalCount: 0,
  isFetching: false,
  followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (action.userId === u.id) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };

    case USER_NOFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (action.userId === u.id) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };

    case SET_CURRENT_USERS_PAGE:
      return {
        ...state,
        currentUsersPage: action.currentUsersPage,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.inProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(
              (userId) => userId !== action.userId
            ),
      };

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: USER_FOLLOW,
    userId,
  };
};
export const nofollowAC = (userId) => {
  return {
    type: USER_NOFOLLOW,
    userId,
  };
};
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setUsersTotalCountAC = (totalCount) => {
  return {
    type: SET_USERS_TOTAL_COUNT,
    totalCount,
  };
};
export const setCurrentUsersPageAC = (currentUsersPage) => {
  return {
    type: SET_CURRENT_USERS_PAGE,
    currentUsersPage,
  };
};
export const toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const toggleFollowingInProgressAC = (userId, inProgress) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  userId,
  inProgress,
});
