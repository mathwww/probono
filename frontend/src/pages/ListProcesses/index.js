import {React} from 'react';

import './styles.css';

import api from '../../services/api';

export default function ListProcesses() {
    const userName = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');
    const [processes, setIncidents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get('processes', {
            headers: {
                Authorization:  accessToken 
            }
        }).then(response => setProcesses(response.data));
    }, [accessToken]);


    function handleLogOut() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
        <header>
            <spam>Bem Vindo, {userName}</spam>
            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button type="button" onClick={handleLogOut}>
                <FiPower size={18} color={"#E02041"}/>     
            </button>
        </header>

        <h1>Casos cadastrados</h1>
        <ul>
            {processes.map(process => (
                <li key={process.id}>
                    <strong>Número do processo:</strong>
                    <p>{process.processNumber}</p>
                    <strong>Cliente:</strong>
                    <p>{process.cpfClient}</p>
                    {/* <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p> */}
                    <button type="button" >
                        <FiTrash2 size={20} color="#A8A8B3"/>
                    </button>
                </li>
            ))}
        </ul>
    </div>
    );
}