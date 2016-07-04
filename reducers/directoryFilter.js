const directoryFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_DIRECTORY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default directoryFilter
