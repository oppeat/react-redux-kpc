const initialState = {
  records: [
    { id:1, firstname:"Michael", lastname:"Johnson", gender:"Male", mobileno: "+660853757439", nationality:"Thai"},
    { id:2, firstname:"Mike", lastname:"Johnson", gender:"Male", mobileno: "+660853757466", nationality:"America"}
  ],
  counter: 2
};
const record = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECORD':
      var oldState = {...state};
      var newCounter = oldState.counter + 1;
      const inputRecord = {...action.record, id:newCounter };
      return {records: [...state.records,inputRecord], counter: newCounter};   
    case 'DELETE_RECORD':
      var selectedId = action.id;
      const updatedRecords = state.records.filter(x => x.id !== selectedId);
      return {records: [...updatedRecords], counter: state.counter};      
    default:
      return state
  }
}
export default record;