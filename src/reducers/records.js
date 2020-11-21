const initialState = {
  records: [
    { id:1, title:"Mrs.", firstname:"Michael", lastname:"Johnson", gender:"Male",prefix:"+66", mobileno: "0853757439", nationality:"Thai", birthday:"11-01-1998", salary:"20000"},
    { id:2, title:"Mr.",firstname:"Mike", lastname:"Johnson", gender:"Male",prefix:"+66", mobileno: "0853757466", nationality:"America", birthday:"24-07-1990", salary:"65000"}
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
    case 'DELETE_RECORD_MULTIPLE':
      var removeIds = action.ids;
      const updated = state.records.filter(x => removeIds.indexOf(x.id) === -1);
      return {records: [...updated], counter: state.counter};      
    case 'UPDATE_RECORD':
      var newState = {...state};
      var index = state.records.map( function(e) {return e.id;}).indexOf(action.record.id)
      if(index !== -1){
        newState.records[index] = {...action.record};
      }
      return {...newState};  
    default:
      return state
  }
}
export default record;