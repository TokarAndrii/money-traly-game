import React, { Component } from 'react';
import Form from './Form.js'
import styles from './App.module.css';



class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.Appheader}>
          <span className={styles.title}>some header</span>
          <ul className={styles.headerList}>
            <li className={styles.link}><a href="/" className={styles.linkText}>item1</a></li>
            <li className={styles.link}><a href="/" className={styles.linkText}>item2</a></li>
            <li className={styles.link}><a href="/" className={styles.linkText}>item3</a></li>
            <li className={styles.link}><a href="/" className={styles.linkText}>item4</a></li>
          </ul>
        </header>
        <main className={styles.main}>
          <img className={styles.mainPageImage} src="https://via.placeholder.com/1900x500/" alt="img1"></img>
          <img className={styles.mainPageImage} src="https://via.placeholder.com/1900x500/" alt="img3"></img>
          <Form header="Send us e-mail" />
        </main>
        <footer className={styles.footer}>
          <div className={styles.socialLinksHolder}>
            <span className={styles.socialLinksHolderTitle}>Visit us at:</span>
            <a href="https://www.facebook.com/alyona.tokar.5"><img src="facebook.svg" className={styles.footerIcon} alt="facebook icon"></img></a>
            <a href="https://instagram.com/alyona.tokar?utm_source=ig_profile_share&igshid=ztoqbt7j0i6m"><img src="instagram.svg" className={styles.footerIcon} alt="instagram icon"></img></a>
          </div>
          <div className={styles.menuFooterHolder}>
            <span className={styles.socialLinksHolderTitle}>Menu:</span>
            <ul className={styles.footerList}>
              <li className={styles.linkFooter}><a href="/" className={styles.linkTextFooter}>item1</a></li>
              <li className={styles.linkFooter}><a href="/" className={styles.linkTextFooter}>item2</a></li>
              <li className={styles.linkFooter}><a href="/" className={styles.linkTextFooter}>item3</a></li>
              <li className={styles.linkFooter}><a href="/" className={styles.linkTextFooter}>item4</a></li>
            </ul>
          </div>
          <div className={styles.contactsFooterHolder}>
            <span className={styles.socialLinksHolderTitle}>Contacts:</span>
            <a href="tel:+1234567890" className={styles.footerContactsInfo}> tel: (097)-000-00-00 </ a>
            <a href="mailto:info@example.com" className={styles.footerContactsInfo}>some.email@gmail.com</a>
            <span className={styles.footerContactsInfo}>skype: some_skype</span>
          </div>
          <div className={styles.linksFooterHolder}>
            <span className={styles.socialLinksHolderTitle}>adawd awadawdwdw</span>
            <span className={styles.footerContactsInfo}> adadawdadawdad </ span>
            <span className={styles.footerContactsInfo}>some.eadawdw</span>
            <span className={styles.footerContactsInfo}>sadwkypadawdgghrtfhth</span>
          </div>
        </footer>
        <span className={styles.footerCopyRight}>	&#9400;2018 Name Company</span>
      </div>
    );
  }
}

export default App;
