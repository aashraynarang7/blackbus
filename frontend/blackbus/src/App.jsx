import { useState } from 'react'
import {Stack, Box} from '@mui/material'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'

function App() {
  return (
      <Stack>
        <Navbar/>
        <Home/>
      </Stack>
  )
}

export default App
