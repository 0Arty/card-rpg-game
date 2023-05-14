import React from 'react'
import styles from './Close.module.scss';
import { Link } from 'react-router-dom'

const Close = () => <Link to='/game' className={styles.link}>X</Link>

export default Close;
