import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import Image from 'next/image'
import ListCSS from '@/styles/list.module.css'
import Shoe from '@/img/Menu/tenis.png'
import Boot from '@/img/Menu/dr-mateen-boot.png'
import { useState, useContext, useEffect } from 'react';
import Context from '../Context/context';
import Link from 'next/link';

export default function list(){
    let [userComponent, setuserComponent] = useState(
    <div>
    <li><Button href='/' variant={`danger bg-gradient w-100 text-start p-3 `}>Perfil</Button></li>
    <li><Button href='/' variant={`danger bg-gradient w-100 text-start p-3 `}>Seus pedidos</Button></li>
    </div>
    )


    return(
        <ul className='p-0'>
            <Button href='/login' variant={`danger bg-gradient w-100 text-start p-3 `}>Login</Button>
            <Button href='/register' variant={`danger bg-gradient w-100 text-start p-3 `}>Register</Button>
            <li id={ListCSS.li} className='d-flex align-item-center '>
            <Accordion defaultActiveKey="0" className='w-100 bg-gradient outline-0 border-0'>
             <Accordion.Item className='d-lg-none' eventKey="1">
                <Accordion.Header className='d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mb-1 bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>
                    <span className=' text-dark fw-light'>Promotion</span>
                </Accordion.Header>
            <Accordion.Body className=' bg-danger bg-gradient'>     
            <li><a className='text-light bg-transparent text-center rounded-top' href="#">Shoeman</a></li>
            <li><a className='text-light bg-transparent text-center' href="#">ShoeShooter</a></li>
            <li><a className='text-light bg-transparent text-center' href="#">Cutters</a></li>
            <li><a className='text-light bg-transparent text-center' href="#">Niks</a></li>
            <li><a className='text-light bg-transparent text-center' href="#">Shourts</a></li>
            <li><a className='text-light bg-transparent text-center rounded-bottom' href="#">Tuks</a></li>
             </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </li>

            <li id={ListCSS.li} className='d-flex align-item-center '>
                <Accordion defaultActiveKey="0" className='w-100 bg-gradient outline-0 border-0'>
             <Accordion.Item className='d-lg-none' eventKey="1">
                <Accordion.Header className='d-flex align-items-center'>
                <Image src={Shoe} className='mt-1 me-1 ms-1' alt='icon-schoes'/>
                Shoes
                </Accordion.Header>
            <Accordion.Body className='bg-danger bg-gradient'>     
            <li><a className='text-light bg-transparent text-center rounded-top' href="#">For man</a></li>
            <li><a className='text-light bg-transparent text-center' href="#">For woman</a></li>
            <li><a className='text-light bg-transparent text-center' href="#">Kids</a></li>
             </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </li>
            <li id={ListCSS.li} className='d-flex align-item-center '>
                <Accordion defaultActiveKey="0" className='w-100 bg-gradient outline-0 border-0'>
             <Accordion.Item className='d-lg-none' eventKey="1">
                <Accordion.Header className='d-flex align-items-center'>
                <Image src={Boot} className='mt-1 me-1 ms-1' alt="boot-icon"/>
                Boots
                </Accordion.Header>
            <Accordion.Body className='bg-danger bg-gradient'>     
            <li><a className='text-light bg-transparent text-center rounded-top' href="#">For man</a></li>
            <li><a className='text-light bg-transparent text-center' href="#">For woman</a></li>
            <li><a className='text-light bg-transparent text-center' href="#">Kids</a></li>
             </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </li>
            <li id={ListCSS.li} className='d-flex align-item-center '>
                <Accordion defaultActiveKey="0" className='w-100 bg-gradient outline-0 border-0'>
             <Accordion.Item className='d-lg-none' eventKey="1">
                <Accordion.Header className='d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 me-1 ms-1 bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
                Services
                </Accordion.Header>
            <Accordion.Body className='bg-danger bg-gradient'>     
            <li><a className='text-light bg-transparent text-center rounded-top' href="#">Suport</a></li>
            <li><a className='text-light bg-transparent text-center' href="#">Reimbursement</a></li>
            <li><a className='text-light bg-transparent text-center' href="#">Local Address</a></li>
             </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </li>
            <li className='w-100 pt-5 mt-5 text-center'><Link href='/' onClick={() => (localStorage.clear(), location.reload()) } className='text-danger '>Logout</Link></li>
        </ul>
    )
}