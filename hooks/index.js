import React from 'react';

export function useStays(initialData = []) {
  const [staysState, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'LOAD_INITIAL_DATA':
          return {
            ...state,
            stays: action.payload,
          };
        case 'ADD_SEARCH_OPTIONS':
          return { ...state, locationOptions: action.payload };
        case 'UPDATE_GUESTS_COUNT':
          return { ...state, guestsCount: action.payload };
        case 'UPDATE_LOCATION':
          return { ...state, location: action.payload };
        case 'FILTER_STAYS':
          return {
            ...state,
            stays:
              action.payload !== undefined && action.payload.length > 0
                ? initialData.filter((val) => val.city === action.payload)
                : initialData,
          };
        default:
          return state;
      }
    },
    {
      stays: [],
      locationOptions: [],
      guestsCount: 0,
      location: '',
    }
  );

  return [
    staysState.stays,
    staysState.locationOptions,
    staysState.guestsCount,
    staysState.location,
    dispatch,
  ];
}
