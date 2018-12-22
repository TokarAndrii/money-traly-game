import React from 'react';
import styles from './Newscard.module.css'
const Newscard = ({ title, imgUrl }) => (
    <div className={styles.newscardHolder}>
        <img alt={title} src={imgUrl}></img>
        <h3>{title}</h3>
        <p>Click to read more...</p>
    </div>
);

export default Newscard;