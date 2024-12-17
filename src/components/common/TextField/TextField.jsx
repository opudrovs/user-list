import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './TextField.module.css';

const TextField = ({
    id,
    name,
    value,
    placeholder,
    maxLength,
    onChangeHandler,
    onKeyUpHandler,
    onInputHandler,
    additionalClasses
}) => {
    let inputProps = {};
    if (maxLength) {
        inputProps.maxLength = maxLength;
    }
    
    return (
        <input
            type="text"
            id={id}
            className={classNames(styles.textField, additionalClasses)}
            name={name}
            placeholder={placeholder}
            {...inputProps}
            value={value}
            onChange={onChangeHandler}
            onKeyUp={onKeyUpHandler}
            onInput={onInputHandler}
        />
    );
};

export default TextField;

TextField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    maxLength: PropTypes.string,
    isRequired: PropTypes.bool,
    onChangeHandler: PropTypes.func,
    onKeyUpHandler: PropTypes.func,
    onInputHandler: PropTypes.func,
    additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
