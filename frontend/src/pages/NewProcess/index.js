import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import MaskedInput from 'react-maskedinput'

import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

export default function NewProcess() {
    const [processNumber, setProcessNumber] = useState('');
    const [cpfClient, setCpfClient] = useState('');
    const [error, setError] = useState('');
    const accessToken = localStorage.getItem('accessToken');

    const history = useHistory();

    function validateCPF(cpf){
        console.log(cpf);
        if(cpf === '') {
            setError(true);
            return false;	
        }
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length !== 11 || 
            cpf === "00000000000" || 
            cpf === "11111111111" || 
            cpf === "22222222222" || 
            cpf === "33333333333" || 
            cpf === "44444444444" || 
            cpf === "55555555555" || 
            cpf === "66666666666" || 
            cpf === "77777777777" || 
            cpf === "88888888888" || 
            cpf === "99999999999"){
                setError(true);
                return false;	
            }	
            var numeros = cpf.substring(0,9);
            var  digitos = cpf.substring(9);
            var  soma = 0;
            for (let i = 10; i > 1; i--) {
                    soma += numeros.charAt(10 - i) * i;
            }
            var  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== Number(digitos.charAt(0))){
                setError(true);
                return false;
            }
            numeros = cpf.substring(0,10);
            soma = 0;
            for (let i = 11; i > 1; i--){
                    soma += numeros.charAt(11 - i) * i;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== Number(digitos.charAt(1))){
                setError(true);
                return false;
            }
            setError(false);
            return true;
    }

    async function handleNewProcess(e) {
        e.preventDefault();
        if(validateCPF(cpfClient.replace(/[^0-9]+/g, ""))){
            const data = {
                processNumber,
                cpfClient: cpfClient.replace(/[^0-9]+/g, "")
            };
            
            try{
                await api.post('processes', data, {
                    headers: {
                        Authorization: accessToken
                    }
                });

                history.push('/processes');
            }catch(err) {
                alert('Erro ao tentar cadastrar caso. Tente novamente mais tarde.');
            }
        }
    }
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <h1>Cadastrar novo processo</h1>


                <Link to="/processes" className="back-link">
                    <FiArrowLeft size={16} color={"#E02041"} />
                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNewProcess}>
                    <input placeholder="Número do Processo"
                        value={processNumber}
                        onChange={e => setProcessNumber(e.target.value)}
                    />
                    <MaskedInput placeholder="CPF do cliente"
                        value={cpfClient}
                        onChange={e => setCpfClient(e.target.value)}
                        mask="111.111.111-11"
                    />
                    {error && <span color={"red"}>CPF Inválido</span>}
                    <button className="button" type="submit">Cadastrar</button>
                </form>
        </div>
    </div>
    );
}