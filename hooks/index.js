import React from 'react';

export function useStays() {
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
          const [city, country] = action.payload.split('-');
          return {
            ...state,
            filteredStays:
              action.payload !== undefined && action.payload.length > 0
                ? state.stays.filter(
                    (val) => val.city === city && val.country === country
                  )
                : state.stays,
          };
        default:
          return state;
      }
    },
    {
      stays: [],
      filteredStays: [],
      locationOptions: [],
      guestsCount: 0,
      location: '',
    }
  );

  return [
    staysState.filteredStays,
    staysState.locationOptions,
    staysState.guestsCount,
    staysState.location,
    dispatch,
  ];
}
