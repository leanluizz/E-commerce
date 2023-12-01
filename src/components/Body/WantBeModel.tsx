import Image from "next/image";
import 'react-bootstrap';
import Button from "react-bootstrap/Button";
import LanceReis from '@/img/Gallery/lance-Reis.png'

export default function (){

    if(process.browser){
        const textEmail = document.querySelectorAll(".text-email")
        textEmail.forEach(function(e){
            setInterval(() => {
                e.classList.add("animate__animated")
                e.classList.add("animate__swing")
            }, 5000)
            setInterval(() => {
                e.classList.remove("animate__animated")
                e.classList.remove("animate__swing")
            }, 6000)
        })
    }
    return(
        <>
        <form className="d-flex flex-column flex-lg-row justify-content-around align-items-center text-center">
        <Image className="w-50 h-25 rounded-5" alt="Model" src={LanceReis}/>
        <div className="mt-5 pt-5">
        <h3 className="text-email text-light text-center mb-5">Estamos precisando de modelo pras demonstrações dos nossos tênis</h3>
        <h4 className="text-email text-light text-center mb-5">Se interessou?</h4>
        <h4 className="text-email text-light text-center mb-5">Envie seu email pra conversarmos</h4>
        <input type="email" className="rounded-2 border-0 mt-5" />
        <Button className="bg-danger bg-gradient border-0 m-2">Submit</Button>
            </div>
        </form>
        </>
    )
}