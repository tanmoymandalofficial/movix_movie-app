import { useState, useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenras } from './store/homeSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Elplore';
import PageNotFound from './pages/404/PageNotFound'




function App() {
    const {total_pages} = useSelector((state)=> state.home.url);
    const dispatch = useDispatch()

    useEffect(()=>{
        apiTesting();
    }, [])


    const apiTesting = ()=>{
        fetchDataFromApi('/movie/popular')
        .then((res)=>{
            console.log(res);
            dispatch(getApiConfiguration(res));
        })
        .catch((err)=> console.log(err))
    }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:mideaType/:id' element={<Details />}></Route>
        <Route path='/search/:query' element={<SearchResult />}></Route>
        <Route path='/explore/:mideaType' element={<Explore />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
