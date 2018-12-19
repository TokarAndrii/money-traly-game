import React, { Component } from 'react'
import styles from './Form.module.css'
import { sendDataToBackEnd } from './services/mailApiService'

const INITIAL_STATE = {
    user: '',
    email: '',
    subject: '',
    message: ''
}

export default class Form extends Component {
    state = { ...INITIAL_STATE }

    handleChangeInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmitForm = e => {
        e.preventDefault()
        console.log('handleSubmitForm click')
        const { user, email, subject, message } = this.state;

        const data = {
            user, subject, email, message
        }

        sendDataToBackEnd(data);
        this.setState({ ...INITIAL_STATE });


    }

    render() {
        const { header } = this.props;
        const { user, email, subject, message } = this.state
        return (<form className={styles.form}>
            <h2>{header}</h2>
            <label className={styles.label}>
                <b className={styles.title}>
                    <img src="user.svg" alt="name-icon"></img>
                </b><input type="text" name="user" placeholder="Your name" className={styles.input} value={user} onChange={this.handleChangeInput}></input>
            </label>
            <label className={styles.label}>
                <b className={styles.title}>
                    <img src="email.svg" alt="email-icon"></img>
                </b><input type="email" name="email" placeholder="Your e-mail" className={styles.input} value={email} onChange={this.handleChangeInput}></input></label>
            <label className={styles.label}>
                <b className={styles.title}>
                    <img src="tag.svg" alt="tag-icon"></img>
                </b><input type="text" name="subject" placeholder="Subject" className={styles.input} value={subject} onChange={this.handleChangeInput}></input></label>
            <label className={styles.label}>
                <b className={styles.title}>
                    <img src="pen.svg" alt="pen-icon"></img>
                </b><textarea cols="100" rows="10" className={styles.textArea} name="message" value={message} onChange={this.handleChangeInput}
                    placeholder="input your comments here"></textarea></label>
            <button className={styles.sendBtn} onClick={this.handleSubmitForm} type="button"><b>Send</b></button>
        </form>)
    }
}

