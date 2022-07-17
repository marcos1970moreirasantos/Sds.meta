import axios from 'axios';
import iconeshort from '../../assets/img/iconeshort.svg';
import './style.css';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("SUCESSO");
        });

}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={iconeshort} alt="Motificar" />

        </div>

}

export default NotificationButton;


