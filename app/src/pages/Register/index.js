import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../service/api';
import './style.css';
import logo from '../../assets/logo.svg';

export default function Register(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');
    
    function handleRegister(event){
        event.preventDefault();

        const data ={
            name,
            email,
            whatsApp,
            city,
            uf,
        };

        api.post('ongs', data);
    }
    

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="logo Be The Hero, vermelho e preto"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft  size={16} color="#E02041"/>
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit = {handleRegister}>
                    <input placeholder="Nome da ONG"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input placeholder="WhatsApp"
                        value={whatsApp}
                        onChange={event => setWhatsApp(event.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="Cidade" 
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input placeholder="UF" 
                            style={{width: 88}}
                            value={uf}
                            onChange={event => setUF(event.target.value)}
                        />                        
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
    
}