import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/ui/Header'
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, setQuery] = useState('')

  // console.log(typeof setItems)
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      
      // console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
  

    fetchItems()
    // return () => {
    //   second
    // }
  }, [query])
  


  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q) } />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
