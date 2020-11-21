export const add_record = (record) => ({
  type: 'ADD_RECORD',
  record
})

export const delete_record = (id) => ({
  type: 'DELETE_RECORD',
  id
})

export const add_select = (id) => ({
  type: 'ADD_SELECT',
  id
})

export const remove_select = (id) => ({
  type: 'REMOVE_SELECT',
  id
})

export const add_multiple = (ids) => ({
  type: 'ADD_SELECT_MULTIPLE',
  ids
})

export const remove_multiple = (ids) => ({
  type: 'REMOVE_SELECT_MULTIPLE',
  ids
})

export const delete_multiple = (ids) => ({
  type: 'DELETE_RECORD_MULTIPLE',
  ids
})

export const update_record = (record) => ({
  type: 'UPDATE_RECORD',
  record
})