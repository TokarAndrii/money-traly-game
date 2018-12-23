import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = ({ headerTitle, headerList, logoImgUrl }) => (
    <header className={styles.Appheader}>
        <div className={styles.logoHolder}>
            <a href='/'><img className={styles.logoImage} src={logoImgUrl} alt="header-logo-img"></img></a>
            <span className={styles.title}><b>{headerTitle}</b></span>
        </div>
        <ul className={styles.headerList}>
            {headerList.map(headerListItem => (
                <li key={headerListItem.id} className={styles.link}><NavLink exact activeClassName={styles.activeLink} className={styles.linkText} to={headerListItem.path}>{headerListItem.name}</NavLink></li>
            ))}
        </ul>
    </header>)


export default Header;