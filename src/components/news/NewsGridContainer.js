import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom'
import { CircleLoader } from 'react-spinners';
import NewsCard from './NewsCard';
import * as NewsApi from '../../services/newsApiService';
import styles from './NewsGridContainer.module.css';


const masonryOptions = {
    transitionDuration: 0
};



export default class NewsGridContainer extends Component {

    state = {
        isLoading: false,
        news: [],
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        NewsApi.getAllNews().then(news => this.setState({ news, isLoading: false }))
    }
    render() {
        const { isLoading, news } = this.state;
        return (
            <div className={styles.newsGridContainer}>
                {isLoading &&
                    (<div className={styles.isLoadingSpinner}>
                        <CircleLoader
                            size={15}
                            color="rgb(255, 250, 200)"
                            loading
                            className={styles.isLoadingSpinner}
                        />
                    </div>)
                }

                <Masonry className={styles.list} elementType={'ul'} options={masonryOptions}>


                    {news.length > 0 && (news.map(item => (
                        <li key={item.id} className={styles.newsCardHolderItem}>
                            <Link className={styles.link} to={`/news/${item.id}`}>
                                <NewsCard {...item} />
                            </Link>
                        </li>)))
                    }


                </Masonry>

            </div>

        )
    }
}