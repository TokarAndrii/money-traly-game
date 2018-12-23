import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = ({ menu, links, contacts }) => (
    <>
        <footer className={styles.footer}>
            <div className={styles.socialLinksHolder}>
                <span className={styles.socialLinksHolderTitle}>Visit us at:</span>
                <a href="https://www.facebook.com/alyona.tokar.5"><img src="facebook.svg" className={styles.footerIcon} alt="facebook icon"></img></a>
                <a href="https://instagram.com/alyona.tokar?utm_source=ig_profile_share&igshid=ztoqbt7j0i6m"><img src="instagram.svg" className={styles.footerIcon} alt="instagram icon"></img></a>
            </div>
            <div className={styles.menuFooterHolder}>
                <span className={styles.socialLinksHolderTitle}>Menu:</span>
                {menu.map(menuHeaderListItem => (
                    <Link key={menuHeaderListItem.name} className={styles.linkFooter} to={menuHeaderListItem.path}>
                        <span className={styles.linkTextFooter}>{menuHeaderListItem.name}</span>
                    </Link>
                ))}
            </div>
            <div className={styles.contactsFooterHolder}>
                <span className={styles.socialLinksHolderTitle}>Contacts:</span>
                <a href={`tel: ${contacts.tel}`} className={styles.footerContactsInfo}> tel: {contacts.tel} </ a>
                <a href={`mailto: ${contacts.email}`} className={styles.footerContactsInfo}>e-mail: {contacts.email}</a>
                <span className={styles.footerContactsInfo}>skype: {contacts.skype}</span>
            </div>
            <div className={styles.linksFooterHolder}>
                <span className={styles.socialLinksHolderTitle}>Useful Links</span>
                {links.map(currentLink => (
                    <a href={currentLink.path} key={currentLink.name}>
                        <span className={styles.linkTextFooter}>{currentLink.name}</span>
                    </a>))
                }
            </div>
        </footer>
        <span className={styles.footerCopyRight}>	&#9400;2018 MindWinner</span>
    </>
)

export default Footer;