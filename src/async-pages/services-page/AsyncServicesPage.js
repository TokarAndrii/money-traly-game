import React from 'react'
import Loadable from 'react-loadable';
import { CircleLoader } from 'react-spinners'
import styles from './AsyncServicesPage.module.css'

const AsyncServicesPage = Loadable({
    loader: () => import('../../pages/services/ServicesPage'/* webpackChunkName: "Services-Page"*/),
    loading: () => (
        <div className={styles.isLoadingSpinner}>
            <CircleLoader
                size={20}
                color="rgb(0, 128, 128)"
                loading
                className={styles.isLoadingSpinner}
            />
        </div>),
    timeout: 5000,
    delay: 300,
});

export default AsyncServicesPage;