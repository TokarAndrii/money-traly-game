import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import Footer from './components/footer/Footer'
import NewsPage from './pages/news/NewsPage'
import ContactsPage from './pages/contacts/ContactsPage';
import LinksPage from './pages/links-page/LinksPage';
import AsyncFormPage from './async-pages/form-page/AsynFormPage'
import AsyncServicesPage from './async-pages/services-page/AsyncServicesPage'
import Header from './components/header/Header';
import menuHeaderList from './assets/headerList'
import routes from './assets/routes';
import contacts from './assets/contacts.json'
import usefulLinksList from './assets/usefulLinksList'
import styles from './App.module.css';



class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header headerTitle="SomeHeader" className={styles.Appheader} headerList={menuHeaderList}
          logoImgUrl="https://via.placeholder.com/100x100/" />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path={routes.FORM} component={AsyncFormPage} />
          <Route path={routes.ABOUT} component={AboutPage} />
          <Route path={routes.CONTACTS} component={ContactsPage} />
          <Route path={routes.SERVICES} component={AsyncServicesPage} />
          <Route path={routes.Links} component={LinksPage} />
          <Route path={routes.NEWS} component={NewsPage} />
        </Switch>
        <Footer menu={menuHeaderList} links={usefulLinksList} contacts={contacts}></Footer>
      </div>
    );
  }
}

export default App;
