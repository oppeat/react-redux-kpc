const initialState = {selected:[]};
const selected = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SELECT':
      var newSelect = [...state.selected];
      newSelect.push(action.id);
      return {selected: [...newSelect]};   
    case 'REMOVE_SELECT':
      var removeId = action.id;
      const updated = state.selected.filter(x => x !== removeId);
      return {selected:[...updated] }; 
    case 'ADD_SELECT_MULTIPLE':
      var newSelectAdd = [...state.selected,...action.ids];
      return {selected: [...new Set(newSelectAdd)]};  
    case 'REMOVE_SELECT_MULTIPLE':
      var removeIds = action.ids;
      const rmUpdated = state.selected.filter(x => removeIds.indexOf(x) === -1);
      return {selected:[...rmUpdated] };   
    default:
      return state
  }
}
export default selected;