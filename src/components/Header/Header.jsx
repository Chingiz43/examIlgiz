import React, { useContext, useState } from 'react';
import s from './Header.module.scss'
import logo from '../../assets/logo.png'
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import img from '../../assets/buttonicon.png'
import pen from '../../assets/pen.png'
import { Link } from 'react-router-dom';
import { AddContext } from '../../AddContext';

const handleChange = (value) => {
	console.log(`selected ${value}`);
};




const Header = () => {
	const [showInput, setShowInput] = useState(true)
	const { posts, setPosts } = useContext(AddContext);
	const { searchTerm, setSearchTerm } = useContext(AddContext)
	const {emojiList} = useContext(AddContext)
	const {filterEmoji , setFilterEmoji} = useContext(AddContext)
	const {selectedEmojis, setSelectedEmojis} = useContext(AddContext)

	

	const handleButtonClick = () => {
		setShowInput(false);
	};
	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};
	

	return (
		<>
		<header className={s.header}>
			<div className={s.logo_block}>
				<div onClick={() => { setShowInput(true) }}>
					<Link to='/'>
						<img src={logo} alt="" />
					</Link>
				</div>
				<h1>Дневник</h1>
			</div>
			{showInput && <div className={s.filters_block}>

				<MyInput
					placeholder='Поиск'
					onChange={handleInputChange}
				/>
				<select onChange={handleInputChange}>
					{emojiList.map((emoji) => {
						return (
						<>
						<option 
						key={emoji.id} value={emoji.symbol}
						>{emoji.symbol}</option>
						</>
						)
					})}
				</select>

			</div>}


			<div className={s.headers_buttons}>
				<div style={{ width: '167px', height: '40px' }}>
					<Link to='/'>
						<MyButton onClick={() => setShowInput(true)} img={img} style={{ background: '#FFCE89', }}>Список</MyButton>
					</Link>

				</div>

				<div style={{ width: '167px', height: '40px' }}>
					<Link to='/create'>	
						<MyButton onClick={handleButtonClick}
							img={pen}
							style={{ background: 'linear-gradient(135deg, #61B15A 0%, #ADCE74 100%', color: 'white' }}>Запись</MyButton>
					</Link>

				</div>
			</div>

		</header>
		</>
	);
};


export default Header;