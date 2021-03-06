import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import FormPanel from './FormPanel'

function EditModal({recordId,oldData}) {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
      <Button animated='vertical' color='grey'>
        <Button.Content hidden>Edit</Button.Content>
        <Button.Content visible>
          <Icon name='edit' />
        </Button.Content>
      </Button>}
    >
      <Modal.Header>Edit Record</Modal.Header>
      <Modal.Content >
        <FormPanel recordId={recordId} initialValues={oldData? oldData : null} setOpen={setOpen}/>
      </Modal.Content>
      <Modal.Actions>
        
      </Modal.Actions>
    </Modal>
  )
}

export default EditModal