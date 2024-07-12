

import team from '../../assets/images/pic.png'
import logoPutih from '../../assets/images/logo_putih.png'
import icon1 from '../../assets/images/Mask group.png'
import mercurio from '../../assets/images/mercurio.png'
import './Login.css'

const Success = () => {

    return <>
        
        <div className='page-container d-flex align-items-end justify-content-center'>
            <div className='side-image-container position-relative'>
                <img src={team} alt="" />
                <img src={mercurio} alt="" className='position-absolute start-0 bottom-0 w-100'/>
            </div>
            <div className='h-100 form-container p-5 text-white d-flex flex-column align-items-center justify-content-center'>
                <img src={logoPutih} alt="" className='mb-5'/>
                <h1>Success!</h1>
                <img src={icon1} alt="" className='pt-3'/>
                <div className='px-5 py-3 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

                <a href='/login' type='submit' className='submit-form'>Login</a>

            </div>
        </div>

    </>
}

export default Success