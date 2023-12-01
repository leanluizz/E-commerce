import 'react-bootstrap';
import { getDownloadURL, getStorage, ref} from 'firebase/storage';
import {storage} from '@/pages/api/uploadImages';
import Image from 'next/image';
import Head from 'next/head';
import Cookies from '@/components/Features/cookies'
import Loading from '@/img/Features/loading....gif'
import Context from '@/components/Context/context';
import LogedDropDown from '@/components/Loged/dropmenu'
import Menu from '@/components/Menu/menu'
import MenuDropdown from '@/components/Menu/dropmenu'
import Search from '@/components/Menu/search'
import Butttons from '@/components/Menu/buttons'
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import NotFound from '@/img/Img-Not-Found/icon-image-not-found-free-vector.jpg'
import axios from 'axios';

export default function ({ teste, items }: any){
  const [ArrowOne, setArrowOne] = useState<any>(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
 <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
  )
  const [ArrowTwo, setArrowTwo] = useState<any>(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
     <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>
      )
    const [Profile, setProfile] = useState<any>(<Image src={Loading} alt='loading'/>)
    const [dadosDaAPI, setDadosDaAPI] = useState([]);
    const { header }: any = useContext(Context)
    const route = useRouter()
    const query = {
       query: route?.query.categories
    }
    let [MenuDD, setMenuDD] = useState(<Image width={100} src={Loading} alt='Loading...'/>)
    let [Button, setButton] = useState(<Image width={100} src={Loading} alt='Loading...'/>)
  if (process.browser) {
    useEffect(() => {
      fetch('/api/showData', header)
      .then(resp => resp.json())
      .then(resp => !resp.erro ? ( setMenuDD(<LogedDropDown/ >), setButton(<></>)):(setMenuDD(<MenuDropdown />), setButton(<Butttons />)))
    }, [])
  }
  useEffect(() => {
    // Fazendo a solicitação Fetch para a API
    fetch('/api/shoes')
      .then(resp => resp.json())
      .then(data => {
        // Atualizando o estado com os dados da API
        setDadosDaAPI(data);
      })
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }, []);

function arrowDownOne () {
  const details: Element | any = process.browser ? document.querySelector("#detailsOne") : null
details?.open ? 

//Fechado

setArrowOne(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
) : 

//Aberto

setArrowOne(
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
)
}

function arrowDownTwo () {
  const details: Element | any = process.browser ? document.querySelector("#detailsTwo") : null
details?.open ? 

//Fechado

  setArrowTwo(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
) : 

//Aberto

  setArrowTwo(
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
)
}
    return (
        <>
    <Head>
      <link rel="shortcut icon" href="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/96/Running-Shoe-Flat-icon.png" />
      <title>ShoesShooting</title>
      </Head>
        <Cookies />
      <div className='d-flex justify-content-between '>
      {MenuDD}
      <Menu 
      colortitle="text-light"
      />
      {Button}
      </div>
      <Search />
      
      <div className='bg-light d-flex'>
      <div className='p-5 h-100 '>
        <h1 className='text-dark'>Categorias</h1>
        <label className='d-flex align-items-center' htmlFor="ShoeShooter">
        <input type="radio" id='ShoeShooter' className='m-3 text-dark' />
        <p className='mt-2 text-dark'>ShoeShooter</p>
        </label>
        <label className='d-flex align-items-center' htmlFor="Tuks">
        <input type="radio" id='Tuks' className='m-3 text-dark' />
        <p className='mt-2 text-dark'>Tuks</p>
        </label>
        <label className='d-flex align-items-center' htmlFor="Shoeman">
        <input type="radio" id='Shoeman' className='m-3 text-dark' />
        <p className='mt-2 text-dark'>Shoeman</p>
        </label>
        <label className='d-flex align-items-center' htmlFor="Cutters">
        <input type="radio" id='Cutters' className='m-3 text-dark' />
        <p className='mt-2 text-dark'>Cutters</p>
        </label>
        <details onClick={arrowDownOne} id='detailsOne' className='mt-5'>
          <summary className='d-flex align-items-center'>
            {ArrowOne}
            Preço
          </summary>
          <input type="radio" name="R$200" />
          <p className='text-dark'>R$200</p>
          <input type="radio" name="R$400" />
          <p className='text-dark'>R$400</p>
          <input type="radio" name="R$600" />
          <p className='text-dark'>R$600</p>
        </details>
        
        <details onClick={arrowDownTwo} id='detailsTwo' className='mt-5'>
          <summary>
            {ArrowTwo}
            Tamanho
            </summary>
          <input type="radio" name="Infantil" />
          <p className='text-dark'>32 - 35</p>
          <input type="radio" name="Adolescente" />
          <p className='text-dark'>36 - 38</p>
          <input type="radio" name="Adulto" />
          <p className='text-dark'>39 - 45</p>
        </details>
      </div>
      <div className='d-flex flex-column w-100'>
      {
  dadosDaAPI.map((item: any, index) => (
    <div className='border border-light d-flex bg-dark bg-gradient w-100' key={index}>
      {item.img && (
        <Image
          src={item.img}
          className='m-3 p-3 border-end border-danger'
          width={200}
          height={200}
          alt='item'
        />
      )}
      <div>
        <p className='text-light m-5 fw-medium'>{item.name}</p>
        <p className='text-light m-5 fw-medium'>R${item.price}</p>
        <p className='text-light m-5 fw-medium'>{item.material}</p>
      </div>
    </div>
  ))
}

      </div>
      </div>
        </>
    )
}