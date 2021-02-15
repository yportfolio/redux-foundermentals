export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
}

const initialState = {
  status: StatusFilters.All,
  colors: [],
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      // Again, one less level of nesting to copy
      return { state, status: action.payload }
    }
    case 'filters/colorFilterChanged': {
      let [color, changeType] = action.payload
      const { colors } = state

      switch (changeType) {
        case 'added': {
          // This color already is set as a filter. Don't change the state.
          if (colors.includes(color)) {
            return state
          } else {
            return {
              ...state,
              colors: state.colors.concat(color),
            }
          }
        }

        case 'removed': {
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          }
        }

        default:
          return state
      }
    }

    default:
      return state
  }
}
