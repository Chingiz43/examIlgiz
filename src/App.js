import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Create from './pages/Create/Create';
import Main from './pages/Main/Main';
import emojiList from './emojiList.json'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddContext } from './AddContext';



function App() {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem('posts');
    return storedPosts ? JSON.parse(storedPosts) : [{id: 1, name: 'a', data: 'data1', discription: 'opisania1' , selectedEmoji: '🗿'}];
  });
  const [title, setTitle] = useState({name: '' , data: '' , discription: '' , selectedEmoji: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmojis, setSelectedEmojis] = useState('');

  
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);
  return (
    <>
      <BrowserRouter>
        <AddContext.Provider value={{
            posts , setPosts,
            title, setTitle,
            searchTerm , setSearchTerm,
            emojiList ,
            selectedEmojis ,
            setSelectedEmojis ,
            }}>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/create' element={<Create />} />
          </Routes>

        </AddContext.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;
