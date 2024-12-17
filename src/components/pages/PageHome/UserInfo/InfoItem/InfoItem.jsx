import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './InfoItem.module.css';

const InfoItem = ({
    label,
    text,
    style,
    additionalClasses
}) => (    
    <div
        className={classNames(styles.infoItem, additionalClasses)}
        style={style}
    >
        <p className={styles.label}>{label}</p>
        <p className={styles.text}>{text}</p>
    </div>
);

export default InfoItem;

InfoItem.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
