import React, { useState, useEffect } from 'react';
import { Segment,Form,Button } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

export default function FormPanel (){

  function handleChange(event){
    console.log(event);
  }

  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Unisex', value: 'unisex' },
  ]

  const titles = [
    { key: 'mr', text: 'Mr.', value: 'Mr.' },
    { key: 'ms', text: 'Ms.', value: 'Ms.' },
    { key: 'mrs', text: 'Mrs.', value: 'Mrs' },
  ]

  const nationalities = [
    { key: 'th', text: 'Thai', value: 'Thai' },
    { key: 'us', text: 'America', value: 'American' },
    { key: 'la', text: 'Laos', value: 'Laos' },
  ]

  const countryCode =[
    { key: 'th', flag: 'th', text:'+66', value: '+66'},
    { key: 'us', flag: 'us', text:'+1', value: '+1'},
    { key: 'la', flag: 'la', text:'+865', value: '+865'}
  ]

  return(
    <Segment raised>
      <Form style={{ width: '80%',margin: 'auto'}}>
          <Form.Group >
            <Form.Field inline width={4} required >
              <label>Title</label>
              <Form.Dropdown fluid
                options={titles}
                placeholder='Title'
                name='title'
              />
            </Form.Field>
            <Form.Field inline width={6} required >
              <label>Firstname</label>
              <Form.Input placeholder='Firstname' name='firstname' />
            </Form.Field>
            <Form.Field inline width={6} required >
              <label>Lastname</label>
              <Form.Input placeholder='Lastname' name='lastname'/>
            </Form.Field>
          </Form.Group>

          <Form.Group >
            <Form.Field inline width={6} required >
              <label>Birthday</label>
              <DateInput
                name="birthday"
                placeholder="Date"
                value={''}
                iconPosition="left"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field inline width={10}>
              <label>Nationality</label>
              <Form.Dropdown fluid
                options={nationalities}
                placeholder='Nationality'
                name='nationality'
              />
            </Form.Field>
          </Form.Group>

          <Form.Group >
            <Form.Field width={10} >
              <label>Citizen ID.</label>
              <Form.Group unstackable={true} inline >
                <Form.Input style={{padding: '0'}} width={2} placeholder='x' name='citizen' maxLength="1"/>
                <label>-</label>
                <Form.Input style={{padding: '0'}} width={3} placeholder='xxxx' name='citizen' maxLength="4"/>
                <label>-</label>
                <Form.Input style={{padding: '0'}} width={3} placeholder='xxxxx' name='citizen' maxLength="5"/>
                <label>-</label>
                <Form.Input style={{padding: '0'}} width={2} placeholder='xx' name='citizen' maxLength="2"/>
                <label>-</label>
                <Form.Input style={{padding: '0'}} width={2} placeholder='x' name='citizen' maxLength="1"/>
              </Form.Group>
            </Form.Field>
          </Form.Group>

          <Form.Group >
            <Form.Field width={5}>
              <label>Gender</label>
              <Form.Group style={{ 'padding':'0.5em' }} >
                {options.map(x => 
                  <Form.Radio
                    key={x.text}
                    label={x.text}
                    value={x.value}
                    checked={false}
                    onChange={handleChange}
                />)}
              </Form.Group>
            </Form.Field>
            <Form.Field width={13} required>
              <label>Mobile No.</label>
              <Form.Group unstackable={true} inline >
                <Form.Dropdown fluid
                  options={countryCode}
                  placeholder='Code'
                  name='prefix'
                />
                <label>-</label>
                <Form.Input style={{padding: '0'}} width={12} placeholder='Mobile No' name='mobileno'/>
              </Form.Group>
            </Form.Field>
          </Form.Group>

          <Form.Group >
            <Form.Field inline width={8} >
                <label>Passport No.</label>
                <Form.Input placeholder='Passport No.' name='passport' />
            </Form.Field>
          </Form.Group>

          <Form.Group >
            <Form.Field inline required >
                <label>Expected Salary</label>
                <Form.Group unstackable={true} inline width={6}>
                  <Form.Input placeholder='' name='salary' />
                  <label>THB</label>
                </Form.Group>
            </Form.Field>
          </Form.Group>
          <Button type='submit'>Submit</Button>
      </Form>
    </Segment>
  );
}