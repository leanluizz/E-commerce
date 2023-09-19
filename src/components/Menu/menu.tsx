import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuCSS from '@/styles/menu.module.css'
import Image from "next/image"
import Link from 'next/link'
import ShoeIcon from '@/img/Menu/Hopstarter-Van-Slip-Ons-Vans-Checkerboard-Dirty-White.256.png'

export default function menu ({ colortitle }: any){
    return(
        <div className='w-100'>
            <div className=' flex-start d-md-flex align-items-center'>
           <Link href='/'><Image width={100} className={ MenuCSS.icon } src={ShoeIcon} alt='iconMenu'/></Link>
            <Link className='link-offset-2 link-underline link-underline-opacity-0' href={'/'}>
            <h2 id='titleSS' className={`fs-4 ${ colortitle } fw-lighter`}>
                ShoesShooting
            </h2>
            </Link>
            </div>
        </div>
    )
}
