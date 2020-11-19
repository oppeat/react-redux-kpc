import React from 'react';
import { Segment,Form,Button } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { useSelector,useDispatch } from 'react-redux';
import { add_record } from '../actions';
import { reduxForm, Field } from 'redux-form';

const renderInput = (props) => (
  <Form.Input {...props} />
)

const renderDropdown = (props) => (
  <Form.Dropdown 
  {...props} 
  value={props.input.value} 
  onChange={(param,data) => props.input.onChange(data.value)}/>
)

const renderDate = (props) => (
  <DateInput 
  value={props.input.value} 
  onChange={(param,data) => props.input.onChange(data.value)}/>
)

const renderRadio = ({ input, meta, ...rest }) => (
  <Form.Radio {...input} {...rest} checked={input.value === rest.value} />
);

function FormPanel (){

  function handleRadioChange(event){
    console.log(event)
    event.target.blur();
  }

  const dispatch = useDispatch();
  const formData = useSelector(state => state.form["registration-form"])

  const options = [
    { key: 'm', text: 'Male', value: 'Male' },
    { key: 'f', text: 'Female', value: 'Female' },
    { key: 'o', text: 'Unisex', value: 'Unisex' },
  ]

  const titles = [
    { key: 'mr', text: 'Mr.', value: 'Mr.' },
    { key: 'ms', text: 'Ms.', value: 'Ms.' },
    { key: 'mrs', text: 'Mrs.', value: 'Mrs.' },
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
              <Field
                fluid
                options={titles}
                placeholder='Title'
                name='title'
                component={renderDropdown}
              />
            </Form.Field>
            <Form.Field inline width={6} required >
              <label>Firstname</label>
              <Field name='firstname' placeholder='First name' component={renderInput} />
            </Form.Field>
            <Form.Field inline width={6} required >
              <label>Lastname</label>
              <Field name='lastname' placeholder='Last name' component={renderInput} />
            </Form.Field>
          </Form.Group>

          <Form.Group >
            <Form.Field inline width={6} required >
              <label>Birthday</label>
              <Field
                name="birthday"
                placeholder="Date"
                iconPosition="left"
                component={renderDate}
              />
            </Form.Field>
            <Form.Field inline width={10}>
              <label>Nationality</label>
              <Field
                fluid
                options={nationalities}
                placeholder='Nationality'
                name='nationality'
                component={renderDropdown}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group >
            <Form.Field width={10} >
              <label>Citizen ID.</label>
              <Form.Group unstackable={true} inline >
                <Field component={renderInput} style={{padding: '0'}} width={2} placeholder='x' name='citizen-1' maxLength="1"/>
                <label>-</label>
                <Field component={renderInput} style={{padding: '0'}} width={3} placeholder='xxxx' name='citizen-2' maxLength="4"/>
                <label>-</label>
                <Field component={renderInput} style={{padding: '0'}} width={3} placeholder='xxxxx' name='citizen-3' maxLength="5"/>
                <label>-</label>
                <Field component={renderInput} style={{padding: '0'}} width={2} placeholder='xx' name='citizen-4' maxLength="2"/>
                <label>-</label>
                <Field component={renderInput} style={{padding: '0'}} width={2} placeholder='x' name='citizen-5' maxLength="1"/>
              </Form.Group>
            </Form.Field>
          </Form.Group>

          <Form.Group >
            <Form.Field width={5}>
              <label>Gender</label>
              <Form.Group style={{ 'padding':'0.5em' }} >
                <Form.Field>
                  <div className='ui radio'>
                    {options.map(x => 
                      <label className='radio-label' key={x.key}>
                        <Field
                          name="gender"
                          component="input"
                          type="radio"
                          value={x.value}
                        />{' '}
                        {x.text}
                      </label>)}
                  </div>
                </Form.Field>
              </Form.Group>
            </Form.Field>
            <Form.Field width={13} required>
              <label>Mobile No.</label>
              <Form.Group unstackable={true} inline >
                <Field fluid
                  options={countryCode}
                  placeholder='Code'
                  name='prefix'
                  component={renderDropdown}
                />
                <label>-</label>
                <Field component={renderInput} style={{padding: '0'}} width={12} placeholder='Mobile No' name='mobileno'/>
              </Form.Group>
            </Form.Field>
          </Form.Group>

          <Form.Group >
            <Form.Field inline width={8} >
                <label>Passport No.</label>
                <Field component={renderInput} placeholder='Passport No.' name='passport' />
            </Form.Field>
          </Form.Group>

          <Form.Group >
            <Form.Field inline required >
                <label>Expected Salary</label>
                <Form.Group unstackable={true} inline width={6}>
                  <Field component={renderInput} placeholder='' name='salary' />
                  <label>THB</label>
                </Form.Group>
            </Form.Field>
          </Form.Group>
          <Button primary onClick={() => dispatch(add_record({...formData.values}))}>Submit</Button>
      </Form>
    </Segment>
  );
}

export default reduxForm({
  form: 'registration-form'
})(FormPanel);