import React, { useContext } from 'react';
import s from './Gallery.module.scss'
import Card from '../Card/Card';
import { AddContext } from '../../AddContext';

const Gallery = () => {
	const {posts, setPosts} = useContext(AddContext)
	const {searchTerm, setSearchTerm} = useContext(AddContext)
	const {selectedEmojis, setSelectedEmojis} = useContext(AddContext)

	const filteredPosts = posts.filter(post => {
		return post.name.toLowerCase().includes(searchTerm.toLowerCase())
		  || post.selectedEmoji.toLowerCase().includes(searchTerm.toLowerCase())
	 })

	return (
		<section className={s.main}>
			{filteredPosts.map(post =>	
			<>
			<Card name={post.name} data={post.data} discription={post.discription} emoji={post.selectedEmoji} />
			</>
			)}
		</section>
	);
};

export default Gallery;