import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class PostcardForm extends Component {
    state = {
        image: null,
        text: null
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log()
        //clears form data for next entry
        this.setState({
            image: null,
            text: null
        })

        fetch("http://localhost:3000/postcards", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: {
                "image": this.state.image,
                "text": this.state.text
            }
        })
            .then(r => r.json())
            .then(data => console.log(data))

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    //submit button doesn't work arrrgh!
    render() {
        return (
            <Form>
                <Form.Field>
                    <label>Select An Image from Your Computer</label>
                    <input type="file" onChange={e => this.onChange(e)} name="image" value={this.state.image} />
                </Form.Field>
                <Form.Field>
                    <label>Text</label>
                    <input name="text" onChange={e => this.onChange(e)} value={this.state.text} placeholder='Add Some Text' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I forgot why I wanted a checkbox here' />
                </Form.Field>
                <Button onSubmit={e => this.onSubmit(e)} type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default PostcardForm