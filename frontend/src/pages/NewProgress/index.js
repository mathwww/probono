import React , {useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';

import './styles.css';

import api from '../../services/api';
import {FiArrowLeft} from 'react-icons/fi';
import MaskedInput from 'react-maskedinput';

export default function NewProgress() {

    const {id} = useParams();
    const [description, setDescription] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [publicationTime, setPublicationTime] = useState('');
    const accessToken = localStorage.getItem('accessToken');

    const history = useHistory();

    async function handleNewProcess(e) {
        e.preventDefault();
        const dateParts = publicationDate.split('/');
        const data = {
            description,
            publicationDate: dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0],
            publicationTime
        };
        try{
            await api.post(`processes/${id}/progress`, data, {
                headers: {
                    Authorization: accessToken
                }
            });

            history.push('/processes');
        }catch(err) {
            alert('Erro ao tentar cadastrar caso. Tente novamente mais tarde.');
        }
        
    }


    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <h1>Cadastrar andamento</h1>


                <Link to="/processes" className="back-link">
                    <FiArrowLeft size={16} color={"#E02041"} />
                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNewProcess}>
                    <textarea placeholder="Descrição do andamento"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <MaskedInput placeholder="Data de Publicação"
                        value={publicationDate}
                        onChange={e => setPublicationDate(e.target.value)}
                        mask="11/11/1111"
                    />
                    <MaskedInput placeholder="Momento da Publicação"
                        value={publicationTime}
                        onChange={e => setPublicationTime(e.target.value)}
                        mask="11:11"
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
        </div>
    </div>
    );
}