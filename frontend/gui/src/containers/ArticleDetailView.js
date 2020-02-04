import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import CustomForm from '../components/Form';

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }
    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(resp => {
                this.setState({
                    article: resp.data
                });
            })
    }
    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm requestType="put" articleID={this.props.match.articleID} btnText='Update' />
            </div>
        )
    }
}

export default ArticleDetail;