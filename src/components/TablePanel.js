import React from 'react';
import { Segment,Table,Pagination,Checkbox,Button,Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { delete_record } from '../actions'

export default function TablePanel (){

  const recordData = useSelector(state => state.records)
  const pageMax = 10;
  const recordAmount = recordData.records.length;
  var totalPages = 1;
  if(recordAmount !== 0){
    totalPages = Math.ceil(recordAmount / pageMax);
  }
  if(totalPages == 0){
    totalPages = totalPages+1;
  }

  const dispatch = useDispatch();

  return(
  <Segment raised>
    <div>
      <Pagination size='small' defaultActivePage={1} totalPages={totalPages} />
    </div>
    <Table celled compact definition>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.HeaderCell>Mobile Phone</Table.HeaderCell>
        <Table.HeaderCell>Nationality</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {recordData.records.map(x => 
        <Table.Row key={x.id}>
          <Table.Cell collapsing>
            <Checkbox />
          </Table.Cell>
          <Table.Cell>{x.firstname + " " + x.lastname}</Table.Cell>
          <Table.Cell>{x.gender}</Table.Cell>
          <Table.Cell>{x.mobileno}</Table.Cell>
          <Table.Cell>{x.nationality}</Table.Cell>
          <Table.Cell textAlign='center'>
            <Button animated='vertical' color='grey'>
              <Button.Content hidden>Edit</Button.Content>
              <Button.Content visible>
                <Icon name='edit' />
              </Button.Content>
            </Button>
            <Button animated='vertical' color='red' onClick={() => dispatch(delete_record(x.id))}>
              <Button.Content hidden>Delete</Button.Content>
              <Button.Content visible>
                <Icon name='trash' />
              </Button.Content>
            </Button>
          </Table.Cell>
      </Table.Row>)}

    </Table.Body>
  </Table>
    
    
  </Segment>   
  );
}