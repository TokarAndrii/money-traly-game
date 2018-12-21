import React, { Component } from 'react'
import { sendDataToBackEnd } from '../../services/mailApiService';
import ErrorMessage from '../../ErrorMessage'
import SuccessMessage from '../../SuccessMessage'
import styles from './Form.module.css'


const INITIAL_STATE = {
    user: '',
    email: '',
    subject: '',
    message: '',
    error: { isError: false, status: "", data: "" },
    success: { isSuccess: false, status: "", data: "" },
}

export default class Form extends Component {
    state = { ...INITIAL_STATE }

    handleChangeInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleCloseAlerts = e => {
        this.setState({ error: {}, success: {} })
    }

    handleSubmitForm = e => {
        e.preventDefault()
        const { user, email, subject, message } = this.state;

        const data = {
            user, subject, email, message
        }

        sendDataToBackEnd(data)
            .then(resp => {
                if (resp.status === 200) {
                    this.setState({ success: { isSuccess: true, status: 200, data: resp } })
                }
            })
            .catch(err => {
                this.setState({ error: { isError: true, status: 406, data: err } })
            })

        this.setState({ ...INITIAL_STATE });


    }

    render() {
        const { formTitle } = this.props;
        const { user, email, subject, message, error, success } = this.state;
        const { isError, data } = error;
        const { isSuccess, } = success;
        return (
            <>
                <form className={styles.form}>
                    <h3>{formTitle}</h3>
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
                </form>


                {isError && (<ErrorMessage className={styles.error}
                    closeBtnClassName={styles.closebtn} message={data.message}
                    onClose={this.handleCloseAlerts} />)}

                {isSuccess && (<SuccessMessage className={styles.success}
                    closeBtnClassName={styles.closebtn} message={data.message}
                    onClose={this.handleCloseAlerts} />)}


            </>
        )
    }
}

