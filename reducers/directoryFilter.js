const directoryFilter = (state = 'All', action) => {
  switch (action.type) {
    case 'SET_DIRECTORY_FILTER':
      return action.directoryFilter
    default:
      return state
  }
}

export default directoryFilter
