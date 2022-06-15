import React, {useState} from 'react';

import './Registr.css';

import closedEye from '../icons/closedEye.png';
import openedEye from '../icons/openedEye.png';
import warning from '../icons/warning.png';

import {Link} from 'react-router-dom';

function Registr(){

    const [isPrivate, setPrivate] = useState(true); 
    let typeOfEye = isPrivate ? closedEye : openedEye;
    let typeOfInput = isPrivate ? 'password' : 'text';


    return (
        <div className='registr-wrapper'>
            <div className = 'registr'>
            <h3>Регистрация</h3>
            {/* {anError} */}
            <form
            onSubmit={(e) => e.preventDefault()}>
                <div className='form'>
                    <div className='inputs'>
                        <div className='name-field'>
                            <label htmlFor='name'>Ваше имя</label>
                            <input 
                            type = 'text'
                            name = 'name'
                            // onChange = {changeHandler}
                            >   
                            </input>
                            
                        </div>
                        <div className='email-field'>
                            <label htmlFor='email'>Почта</label>
                            <input 
                            type = 'email'
                            name = 'email'
                            // onChange = {changeHandler}
                            >   
                            </input>
                            
                        </div>
                        
                        <div className='password-field'>
                            <label htmlFor='email'>Пароль</label>
                            <div className='row'>
                                <input 
                                // type = {typeOfInput}
                                type = {typeOfInput}
                                name = 'password'
                                maxLength={14}
                                // onChange = {changeHandler}
                                >   
                                </input>
                                {/* <img src = {require('./closedEye.png')}></img> */}
                                <img 
                                src = {typeOfEye} alt = 'eye'
                                onClick={()=> {setPrivate(!isPrivate)}}
                                ></img> 
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='registr-buttons'>
                        <button 
                        type = 'submit'
                        // onClick={checkForValidate}
                        >Регистрация</button>
                        <Link to = '/'>Есть аккаунт?</Link>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}



export default Registr;