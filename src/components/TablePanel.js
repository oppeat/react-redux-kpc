import React, {useState} from 'react';
import { Segment,Table,Pagination,Checkbox,Button,Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { delete_record, add_select, remove_select, add_multiple, remove_multiple, delete_multiple } from '../actions'
import EditModal from './EditModal'

export default function TablePanel (){

  const [activePage,setActivePage] = useState(1);
  const recordData = useSelector(state => state.records)
  const selectedIds = useSelector(state => state.selected.selected)
  const pageMax = 10;
  const recordAmount = recordData.records.length;
  var totalPages = 1;
  if(recordAmount !== 0){
    totalPages = Math.ceil(recordAmount / pageMax);
  }
  if(totalPages == 0){
    totalPages = totalPages+1;
  }

  const filteredRecordData = recordData.records.slice((activePage-1)*pageMax, activePage*pageMax)
  const dispatch = useDispatch();

  const handlePaginationChange = (e, { activePage }) => setActivePage(activePage);

  function isAllSelect(){
    if(filteredRecordData.length === 0){
      return false;
    }
    for(var record of filteredRecordData){
      if(selectedIds?.indexOf(record.id) === -1){
        return false;
      }
    }
    return true;
  }

  return(
  <Segment raised>
    <div>
      <div style={{display: 'inline-block'}}>
        <Checkbox style={{margin: '0 1em'}} label="Select All" checked={isAllSelect()} onClick={() => isAllSelect() ? dispatch(remove_multiple(filteredRecordData.map(x => x.id))) : dispatch(add_multiple(filteredRecordData.map(x => x.id)))}/>
        <Button style={{margin: '0 1em'}} color='red' onClick={() => dispatch(delete_multiple(selectedIds))}>Delete</Button>
      </div>
      <Pagination size='small' activePage={activePage} totalPages={totalPages} onPageChange={handlePaginationChange} />
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
      {filteredRecordData.map(x => 
        <Table.Row key={x.id}>
          <Table.Cell collapsing>
            <Checkbox checked={selectedIds?.indexOf(x.id) !== -1 ? true : false} onClick={() => selectedIds?.indexOf(x.id) !== -1 ? dispatch(remove_select(x.id)) : dispatch(add_select(x.id))}/>
          </Table.Cell>
          <Table.Cell>{x.firstname + " " + x.lastname}</Table.Cell>
          <Table.Cell>{x.gender ? x.gender : "-"}</Table.Cell>
          <Table.Cell>{(x.prefix ? x.prefix:'') + x.mobileno}</Table.Cell>
          <Table.Cell>{x.nationality ? x.nationality : "-"}</Table.Cell>
          <Table.Cell textAlign='center'>
            <EditModal recordId={x.id} oldData={x}/>
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