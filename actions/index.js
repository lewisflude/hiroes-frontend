export function setDirectoryFilter(directoryFilter) {
  return {
    type: 'SET_DIRECTORY_FILTER',
    directoryFilter
  }
}

export const getFacebookResponse = (response) => {
  return {
    type: 'GET_FACEBOOK_RESPONSE',
    response
  }
      
}





