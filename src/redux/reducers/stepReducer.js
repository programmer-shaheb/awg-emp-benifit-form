const initialState = {
    step: 0
  };
  
  const stepReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'NEXT_STEP': 
        return {
            step: action.payload
        }
      default:
        return state;
    }
  };
  
  
  
  export default stepReducer;
  