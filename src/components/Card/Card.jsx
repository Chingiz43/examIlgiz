import React from 'react';
import s from './Card.module.scss'
import img from '../../assets/test.png'
import emodji from '../../assets/emodji.png'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import './Card.css'
import modalimg from '../../assets/modalimg.png'
import CloseOutlined from '@ant-design/icons'



	const Card = ({name , data , discription ,emoji}) => {
		const [modal2Open, setModal2Open] = useState(false);
		
		return (
			<>
			<div className={s.card} onClick={() => setModal2Open(true)}>
				<img src={img} alt="" />
				<div className={s.circle}><div className={s.circle_emodji}>{emoji}</div></div>
				<div className={s.card_text} >
					<div>
						<h4>{name}</h4>
						<p>{data}</p>
					</div>
					<p className={s.text}>{discription}</p>
				</div>
			</div>
			<Modal
					centered
					open={modal2Open}
					onOk={() => setModal2Open(false)}
					onCancel={() => setModal2Open(false)}
					footer={false}
					width={1360}
					

				>
					<div className={s.modal}>
						<div className={s.modal__header}>
							<div className={s.modal__header_block}>
								<div className={s.modal_emoji}>{emoji}</div>
								<h1>{name}</h1>
							</div>
							<p>{data}</p>
						</div>
						<main>
							<div className={s.modal__img}><img src={modalimg} alt="" /></div>
							<div className={s.modal__text}>
								<p>{discription}</p>
							</div>
						</main>
					</div>

				</Modal>
			</>
			
		);
	};


	export default Card;