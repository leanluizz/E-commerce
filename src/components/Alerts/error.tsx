import ErrorCSS from '@/styles/error.module.css'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Error({animation, typeOfError}: any){
    return(
  <div className={`err ${animation} d-flex align-items-center bg-danger text-center bg-gradient rounded-end position-absolute`}>
    <div className='d-flex flex-column'>
    <p className='fw-bolder text-light p-2 m-1'>Oops occurred some one error!</p>   
    <p className='fw-bolder text-light p-2 m-1'>{typeOfError}</p>
    </div>
    <Button className={`x ${ ErrorCSS.esc } bg-transparent border-0 p-2 mb-5`}>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" id={ErrorCSS.x} fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
    </svg>
    </Button>
  </div>
    )
}