import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState, useContext } from 'react'
import {storage} from '@/pages/api/uploadImages';
import { getDownloadURL, ref, uploadBytesResumable, listAll, deleteObject } from 'firebase/storage';
import Head from "next/head";
import PhotoProfile from '@/img/Profile/profile.png';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Error from '@/components/Alerts/error'
import ErrorCSS from '@/styles/error.module.css'
import Context from '@/components/Context/context';
import Menu from '@/components/Menu/menu'
import LogedDropDown from '@/components/Loged/dropmenu'
export default function Config(){

  if (process.browser) {
    const btnXError: any = document.querySelector('.x')
    btnXError?.addEventListener('click', () => setanimationOn(ErrorCSS.errorOFF)) 
  }

  const {header ,animationOn, setanimationOn, errorType, seterrorType} : any = useContext(Context)
    const formPosition: string = 'm-lg-5 d-flex flex-column'
    const [User, setUser] = useState<any>()
    const imagepath = `profiles/${process.browser ? localStorage.getItem('id') : null}/profile.png`
    const ImageProfile = ref(storage, imagepath)
    const [Profile, setProfile] = useState<any>()
    const [ImgURL, setImgURL] = useState("")
    const [progress, setprogress] = useState(0)
    const [data, setdata] = useState({
      name: '',
      passwordReset: '',
      id: process.browser ? localStorage.getItem("id") : null,
      emailReset: ''
    })
    const [Resp, setResp] = useState<String>('')
    getDownloadURL(ImageProfile)
    .then((url) => {
      setProfile(url);
    })
    .catch(err => setProfile(PhotoProfile))
    useEffect(() => {
        fetch('/api/showData')
        .then(resp => resp.json())
        .then(resp => resp.message == "This JWT don't exist!" ? location.replace("/") : null)
      }, [])

      useEffect(() => {
        fetch('/api/showData')
        .then(resp => resp.json())
        .then(resp => !resp.erro ? setUser(resp.data[0]) : null)
        }, [])

        const handleInput = (e: any) => {
          setdata({...data, [e.target.name] : e.target.value})
          console.log(data.id)
        }

        const sendPhoto = (e: any) => {
          const file = e?.target?.files[0];
          
          if (!file) return console.log("Erro");
          const storageRef = ref(storage, `profiles/${process.browser ? localStorage.getItem('id') : null}/profile.png`)
          const uploadTask = uploadBytesResumable(storageRef, file)
        
          uploadTask.on(
            "state_changed",
            snapshot => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              setprogress(progress)
            },
            error => {
              alert(error)
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(url => {
                setImgURL(url)
              })
            }
          )
        }

        const Submit = async (e: any) => {
          e.preventDefault()
          if (process.browser) {
            const passwd: any = document.querySelector("#passwd")
            const ConfirmPasswd: any = document.querySelector("#Confirm-passwd")
            const forms: any = document.querySelectorAll("input")
            if(passwd?.value == ConfirmPasswd?.value){
            await axios.post('/api/config', data, header)
            .then(resp => setResp(resp.data))
            }else{
              setResp("Verify your credentials!")
            }
          }
          setTimeout(() => {
            setResp('')
          }, 2000);

          setTimeout(() => {
            location.reload()
          }, 3000);
        }
    return(
        <>
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/96/Running-Shoe-Flat-icon.png" />
      <title>ShoesShooting</title>
      </Head>
      <Error 
      animation={animationOn}
      typeOfError={errorType}/> 
      <div className='d-flex justify-content-between '>
      <Menu 
      colortitle="text-light"
      />
      <LogedDropDown />
      </div>
      <div className="d-lg-flex m-5 justify-content-center">
      <div className="d-flex flex-column align-items-center justify-content-center rounded-3 bg-danger w-100 h-75">
        <h1 className="p-5 m-5 text-light">Olá, {User?.users}</h1>
        <label htmlFor="fileInput">
        <Image loading="eager" priority={true} src={Profile} alt="profile" className="mb-5 rounded-circle w-100" width={200} height={200} />
        </label>
        <input onChange={sendPhoto} accept="image/jpeg, image/png" max-size="2MB" type="file" id="fileInput" className="changePhoto d-none" />
        <Button className="w-50 mb-5 bg-dark border-0 bg-gradient" onClick={() => process.browser ? document.getElementById('fileInput')?.click(): null }>Change</Button>
        </div>
        <div className="w-100">
            <form id="datas" onSubmit={Submit} className={formPosition}>
                <h3 className="text-light">Nome</h3>
                <p className="text-danger fs-5 fst-italic">{User?.users}</p>
                <input name="name" onChange={handleInput} className="ps-2 rounded-1 w-100 border-0" placeholder="Insira aqui para alterar seu nome..." type="text" />
                <h3 className="text-light mt-2">Password</h3>
                <input id="passwd" name="passwordReset" onChange={handleInput} className="ps-2 rounded-1 w-100 border-0" placeholder="Insira aqui para alterar sua senha..." type="password" />
                <h3 className="text-light mt-2">Confirm your password</h3>
                <input id="Confirm-passwd" className="ps-2 rounded-1 w-100 border-0" placeholder="Insira aqui para alterar sua senha..." type="password" />
                <h3 className="text-light mt-2">Email</h3>
                <p className="text-danger fs-5 fst-italic">{User?.email}</p>
                <input name="emailReset" onChange={handleInput} className="ps-2 rounded-1 w-100 border-0" placeholder="Insira aqui para alterar seu email..." type="email" />
            <button className="bg-danger text-light rounded-2 w-50 border-0 m-5 bg-gradient">Enviar</button>
            <h3 className="text-center text-danger">{Resp}</h3>
            </form>
        </div>
      </div>
        </>
    )
}