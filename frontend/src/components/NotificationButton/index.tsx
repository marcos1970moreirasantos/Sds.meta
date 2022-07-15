import iconeshort from '../../assets/img/iconeshort.svg'
import './style.css'
function NotificationButton() {
    return (
        <>
            <div className=" dsmeta-logo-container">
                <img src={iconeshort} alt="DSMeta" />
                <h1> DSMeta </h1>
                <p>
                    Desenvolvido por
                    <a href=" https://www.instagram.com/devsuperior.ig">@devsuperior.ig </ a >
                </p>
            </div>

            <div className="dsmeta-red-btn">
                <img src={iconeshort} alt="Notificar" />
            </div>

            <div className="dsmeta-red-btn">
                <img src={iconeshort} alt="Notificar" />
            </div>
        </>
    )

}

export default NotificationButton
