import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class PostcardForm extends Component {


    render() {
        return (
            <Form>
                <Form.Input label='Enter Password' type='image' />
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default PostcardForm