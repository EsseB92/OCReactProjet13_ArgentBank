import React from 'react';

import styles from './Account.module.scss';

const Account = ({ title, amount, desc }) => {
    return (
        <article className={styles.article}>
            <div>
                <h3>{title}</h3>
                <p>{amount}</p>
                <p>{desc}</p>
            </div>
            <div>
                <button>View transactions</button>
            </div>
        </article>
    );
};

export default Account;
