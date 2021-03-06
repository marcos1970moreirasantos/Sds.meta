import axios from 'axios';
import { toast } from 'react-toastify';
import iconeshort from '../../assets/img/iconeshort.svg';
import { BASE_URL } from '../../utils/request';
import './style.css';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("SMS envisdo com sucesso");
        });

}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={iconeshort} alt="Motificar" />
        </div>
    )
}

export default NotificationButton;


