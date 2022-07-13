import imagem from "../../assets/imagem/notification-icon.svg"
import "./style.css"

function NoficationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={imagem} alt="Notificar"/>
        </div>
    )
}

export default NoficationButton