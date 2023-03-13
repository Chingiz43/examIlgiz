import React from 'react';
import s from './MyButton.module.scss'
import logo from '../../../assets/pen.png'


const MyButton = ({style , children, img , ...props}) => {
	return (
		<button {...props} className={s.btn} style={style}>
			<img src={img} alt="" />
			{children}
		</button>
	);
};

export default MyButton;