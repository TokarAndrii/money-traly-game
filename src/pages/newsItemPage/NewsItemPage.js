import React, { Component } from 'react';
import * as NewsApi from '../../services/newsApiService';
import styles from './NewsItemPage.module.css'

const INITIAL_STATE = {
    isLoading: false,
    title: '',
    date: '',
    author: '',
    text: '',
    imgUrl: '',
}

export default class NewsItemPage extends Component {

    state = { ...INITIAL_STATE }

    componentDidMount() {
        const { match } = this.props;
        const { id } = match.params;
        NewsApi.getNewsById(id).then(item => {
            return this.setState({
                id,
                title: item.title,
                date: item.date,
                author: item.author,
                text: item.text,
                imgUrl: item.imgUrl,
                isLoading: false,
            })
        }

        )
    }

    render() {
        const { title, date, author, text, imgUrl } = this.state;
        return (
            <div className={styles.newsItemPageHolder}>
                <div>
                    <h3>{title}</h3>
                    <img alt={title} src={imgUrl}></img>
                    <p>{text}</p>
                    <p>date: {date}</p>
                    <p>{author}</p>
                </div>
            </div>
        )
    }
}