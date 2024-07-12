

import team from '../../assets/images/pic.png'
import logoPutih from '../../assets/images/logo_putih.png'
import icon1 from '../../assets/images/login-illustrator.png'
import mercurio from '../../assets/images/mercurio.png'
import './Login.css'
import { useState } from 'react'

const Verification = () => {

    const [verCode, setVerCode] = useState('')
    const [inputFocus, setInputFocus] = useState(false)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        // masukkan login untuk fetch data
    }

    let codeBox = []
    for (let i = 0; i < 6; i++) {
        codeBox.push(i)
    }

    return <>
        
        <div className='page-container d-flex align-items-end justify-content-center'>
            <div className='side-image-container position-relative'>
                <img src={team} alt="" />
                <img src={mercurio} alt="" className='position-absolute start-0 bottom-0 w-100'/>
            </div>
            <div className='h-100 form-container p-5 text-white d-flex flex-column align-items-center justify-content-center'>
                <img src={logoPutih} alt="" className='mb-5'/>
                <h1>Silahkan Masuk!</h1>
                <img src={icon1} alt="" className='pt-3'/>
                <div className='px-5 py-3 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

                <form onSubmit={handleSubmitForm} className='w-100 d-flex flex-column align-items-center justify-content-center gap-2'>
                    <label htmlFor='verification-code' className='vercode-container'>
                        {codeBox.map(i => {
                            return <div key={i} className='position-relative'>
                            {verCode[i]}
                            {inputFocus && verCode.length == i && 
                                <div className='w-75 bg-light rounded position-absolute' style={{height: '1.5px', top: '75%'}}>
                                </div>
                            }
                            </div>
                        })}
                    </label>
                    <input type="number" id='verification-code' style={{height: 0, border: 0, padding: 0}} onChange={(e)=>{
                        e.target.value.length <= 6 && setVerCode(e.target.value)
                    }} onFocus={()=>setInputFocus(true)} onBlur={()=>setInputFocus(false)} value={verCode}/>
                    <button type='submit' className='submit-form'>Submit</button>
                </form>

            </div>
        </div>

    </>
}

export default Verification