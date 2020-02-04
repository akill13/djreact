import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
class CustomForm extends React.Component {
    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
                    <Form.Item label="Title" >
                        <Input name='title' placeholder="input title" />
                    </Form.Item>
                    <Form.Item label="Content" >
                        <Input name='content' placeholder="input content" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit'>{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

    handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch (requestType) {
            case 'post':
                axios.post(`http://127.0.0.1:8000/api/`, {
                    title: title,
                    content: content
                })
                    .then(resp => console.log(resp))
                    .catch(err => console.error(err));
                break;
            case 'put':
                axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                    .then(resp => console.log(resp))
                    .catch(err => console.error(err));
                break;
        }
    }
}

export default CustomForm;