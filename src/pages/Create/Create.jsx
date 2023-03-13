import React, { useContext, useState } from 'react';
import s from './Create.module.scss'
import MyInput from '../../components/UI/MyInput/MyInput';
import search from '../../assets/search_logo.png'
import MyButton from '../../components/UI/MyButton/MyButton';
import addbtn from '../../assets/addbutton.png'
import { AddContext } from '../../AddContext';

const Create = () => {
	
	const { posts, setPosts } = useContext(AddContext);
	const { title, setTitle } = useContext(AddContext);
	const {emojiList} = useContext(AddContext);
	const addNewPost = (e) => {
		e.preventDefault()
		setPosts([...posts, { ...title, }])
		setTitle({ name: '', data: '', discription: '' ,  selectedEmoji: ''})
	}
	console.log();
	return (
		<>
			<section className={s.create}>
				<div className={s.first_section}>
					<MyInput
						placeholder='Название'
						value={title.name}
						onChange={e => setTitle({ ...title, name: e.target.value })}
					/>
					<div className={s.filters}>
						<select 
						onChange={e => setTitle({ ...title, selectedEmoji: e.target.value})}
						>
							{emojiList.map((emoji)=>{
								return(
									<>
									<option
									key={emoji.id} value={emoji.symbol}
									>{emoji.symbol}</  option>
									</>
									
								)
							})}
						</select>
						<div>
							<MyInput
								placeholder='Дата'
								value={title.data}
								onChange={e => setTitle({ ...title, data: e.target.value })}
							/>
						</div>
					</div>
					<div className={s.first_section_description}>
						<MyInput
							placeholder='Описание'
							value={title.discription}
							onChange={e => setTitle({ ...title, discription: e.target.value })}
						/>
					</div>
					<div className={s.first_section_button}>
						<MyButton
							style={{ background: 'linear-gradient(135deg, #61B15A 0%, #ADCE74 100%)', color: 'white' }}
							img={addbtn}
							onClick={addNewPost}
						>Создать</MyButton>
					</div>
				</div>
				<div className={s.second_section}>
					<div className={s.second_section_header}>
						<div className={s.second_section_input}>
							<MyInput
								placeholder='Поиск'

							/>
						</div>
						<button><img src={search} alt="" /></button>
					</div>
					<div className={s.second_section_imgs}>
					</div>
				</div>
			</section>
			
		</>

	);
};

export default Create;