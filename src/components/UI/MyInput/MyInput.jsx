import React from 'react';
import s from './MyInput.module.scss'

const MyInput = ({placeholder , ...props}) => {
	return (
		<input {...props} className={s.input}  placeholder={placeholder} type="text" /> 
	);
};

export default MyInput;