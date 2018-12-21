import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { CircleLoader } from 'react-spinners';
import NewsCard from './NewsCard'
import styles from './NewsGridContainer.module.css'



export default class NewsGridContainer extends Component {

    state = {
        isLoading: false,
        news: [],
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

                <ul>
                    {news.length > 0 && (news.map(item => (
                        <li key={item.id}>
                            <Link to={item.path}><NewsCard {...item} /></Link>
                        </li>)))
                    }
                </ul>

            </div>

        )
    }
}