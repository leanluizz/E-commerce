import Search from '@/components/Menu/search'
import Carousel from '@/components/Carousel/carousel'
import Dropdown from '@/components/Menu/dropdown'
import Menu from '@/components/Menu/menu'
import MenuDropdown from '@/components/Menu/dropmenu'
import LogedDropDown from '@/components/Loged/dropmenu'
import Buttons from '@/components/Menu/buttons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Context from '@/components/Context/context'

export default function Home() {
  //If logged account
  let [MenuDD, setMenuDD] = useState(<MenuDropdown />)
  let [Button, setButton] = useState(<Buttons />)
if (process.browser) {
 const { header }: any = useContext(Context)
  useEffect(() => {
    fetch('/api/showData', header)
    .then(resp => resp.json())
    .then(resp => !resp.erro ? ( setMenuDD(<LogedDropDown/ >), setButton(<></>)):null)
  }, [])
  localStorage.removeItem('email')
}
  return (
    <main>
      <Head>
      <link rel="shortcut icon" href="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/96/Running-Shoe-Flat-icon.png" />
      <title>ShoesShooting</title>
      </Head>
      <div className='d-flex justify-content-between '>
      {MenuDD}
      <Menu 
      colortitle="text-light"
      />
      {Button}
      </div>
      <Search />
      <div id='content-background-white' className='d-none d-lg-flex bg-white content-bg-white' >
      <Dropdown />
      </div>
      <div className="d-flex justify-content-evenly">
      <Carousel />
      </div>
    </main>
  )
}
