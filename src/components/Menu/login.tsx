import axios from "axios"
import Link from "next/link"
import Error from '@/components/Alerts/error'
import ErrorCSS from '@/styles/error.module.css'
import { Context } from "../Context/context"
import { useState, useContext } from "react"

export default function Login(){
  const [Data, setData] = useState<any>({
    mail: '',
    passwd: '',
  })
  const {header, animationOn, setanimationOn, errorType, seterrorType} : any = useContext(Context)

  const handleInput = (e: any) => {
    setData({...Data, [e.target.name] : e.target.value})
  }

  if (process.browser) {
    const btnXError: any = document.querySelector('.x')
    btnXError?.addEventListener('click', () => setanimationOn(ErrorCSS.errorOFF)) 
  }
  const Submit = async (e: any) => {
    e.preventDefault()
    if (process.browser) {
    let allInputsFilled = true
    const input: any = document.querySelectorAll('input')
    input.forEach(function(input: any) {
      if (input.value == '') {
          allInputsFilled = false;
      }
  });
    if(!allInputsFilled){
      setanimationOn(ErrorCSS.error)
      seterrorType('Verify the inputs, some input maybe has empty.')
  }else{
    await axios.post('https://shoesshooting.vercel.app/api/authentication', Data, header) // https://shoesshooting.vercel.app/api/authentication
    .then(resp => {
      if(resp.data == 'PASSWORD NOT FOUND'){
        setanimationOn(ErrorCSS.error)
        seterrorType('Password not found, try again or click in "forget password?"')    
      }else{
        location.replace('/')     
      }
    })
      .catch(err => {
        setanimationOn(ErrorCSS.error)
        seterrorType(`${err}`)   
        console.log(err)
    })
}
}
  }
  const Forgoted = async (e: any) => {
    e.preventDefault()
    if (process.browser) {
      const EmailInput: any = document.querySelector(".Email")
      EmailInput?.value == '' ? (setanimationOn(ErrorCSS.error), seterrorType('Insert your email for change please')) : 
      ( localStorage.setItem('email', EmailInput?.value)
        ,await axios.post('https://shoesshooting.vercel.app/api/forgotedPasswd', Data, header)
      .then(rowCounted => rowCounted.data >= 1 ? (localStorage.setItem('info', rowCounted.data),location.replace('/forgot-your-password')) : console.log('erro'))
      )
    }
  }
    return(
      <div>
         <Error 
      animation={animationOn}
      typeOfError={errorType}/> 

<form onSubmit={Submit}>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-light">Email</label>
    <input placeholder="Email" onChange={handleInput} name="mail" type="email" className="form-control Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
    <input placeholder="Password" onChange={handleInput} name="passwd" type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className='d-flex flex-column'>
  <button type="submit" className="btn btn-danger bg-gradient">Submit</button>
  <button type="submit" className='mt-2 bg-transparent border-0 text-primary' onClick={Forgoted}>Forgot password?</button>
  <Link className='mt-2 text-center' href='/register'>Dont have a account?</Link>
  </div>
</form> 
</div>
    )
}