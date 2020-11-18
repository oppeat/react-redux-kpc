import React, { useState, useEffect } from 'react';
import { Segment,Table,Pagination,Checkbox,Grid } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

export default function TablePanel (){

  return(
  <Segment raised>
    <div>
      <Pagination size='small' defaultActivePage={5} totalPages={10} />
    </div>
    <Table celled compact definition>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.HeaderCell>Mobile Phone</Table.HeaderCell>
        <Table.HeaderCell>Nationality</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
        <Table.Cell>Here for Action Buttons</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    
    
  </Segment>   
  );
}