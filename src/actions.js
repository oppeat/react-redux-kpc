export const add_record = (record) => ({
  type: 'ADD_RECORD',
  record
})

export const delete_record = (id) => ({
  type: 'DELETE_RECORD',
  id
})