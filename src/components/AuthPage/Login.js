import React, {useState} from 'react';
import closedEye from '../icons/closedEye.png';
import openedEye from '../icons/openedEye.png';
import warning from '../icons/warning.png';
import './Login.css';




import {Link} from 'react-router-dom';


function Login({users, setActiveUser}){        //Не забывать про деструктуризацию!

    const [anError, setStatus] = useState()
        
    const [isPrivate, setPrivate] = useState(true); 
    let typeOfEye = isPrivate ? closedEye : openedEye;
    let typeOfInput = isPrivate ? 'password' : 'text';

    //Авторизация пользователя
    const [form, setForm] = useState({      // Принимаем пользователя с такими данными:
        email: '',
        password: ''
    }); 
    const changeHandler = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }


    const checkForValidate = () =>{
        const {email, password} = form;

        //Проверка на пустые поля
        if (email.length === 0){
            setStatus(
                <div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'>Введите почту</p></div>
            );   
            return 
        }else{
            setStatus()
        }
        if (password.length === 0){
            setStatus(
                <div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'>Введите пароль</p></div>
            );   
            return
        }else{
            setStatus()
        }
        const doesEmailValid = users.find(user => user.email === email)

        if(!doesEmailValid){        //doesEmailValid - объект пользователя которого мы нашли по email
            setStatus(
                <div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'>Неправильная почта</p></div>
            );   
            return
        }else{  
            setStatus()
        }
        if (doesEmailValid.password !== password){     //doesEmailValid - объект пользователя которого мы нашли по email
            setStatus(
                <div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'>Неправильный пароль</p></div>
               
            );
        }else{  //Если всё хорошо:
            setStatus(<p className='succes'>Пользователь успешно авторизирован</p>);
            setActiveUser(doesEmailValid);
            console.log('User is loged in')
            
        }   
    }
    return (
        <div className='login-wrapper'>
            <div className = 'login'>
            <h3>Авторизация</h3>
            {anError}
            <form
            onSubmit={(e) => e.preventDefault()}>
                <div className='form'>
                    <div className='inputs'>
                        <div className='email-field'>
                            <label htmlFor='email'>Почта</label>
                            <input 
                            type = 'email'
                            name = 'email'
                            onChange = {changeHandler}
                            >   
                            </input>
                            
                        </div>
                        
                        <div className='password-field'>
                            <label htmlFor='email'>Пароль</label>
                            <div className='row'>
                                <input 
                                type = {typeOfInput}
                                name = 'password'
                                maxLength={14}
                                onChange = {changeHandler}
                                >   
                                </input>
                                
                                <img
                                src = {typeOfEye} alt = 'eye'
                                onClick={()=> {setPrivate(!isPrivate)}}
                                ></img> 
                            </div>
                        </div>
                    </div>
                    <div className='login-buttons'>
                        <button 
                        type = 'submit'
                        onClick={checkForValidate}
                        >Войти</button>
                        <Link to = '/registration'>Нет аккаунта?</Link>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
};

export default Login;