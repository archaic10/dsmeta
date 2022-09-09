import icon from '../../assets/img/notification-icon.svg';
import axios from "axios";
import './styles.css';
import { BASE_URL } from '../../utils/request';

type Props = {
  saleId: number
}

function handleClick(saleId:number){
  axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(()=>{
      console.log("Mensagem enviada com sucesso!")
    });
}

function NotificationButton({saleId}:Props) {
    return (
      <>
        <div className="dsmeta-red-btn" onClick={()=>{handleClick(saleId)}}>
            <img src={icon} alt="Notificar" />
        </div>
    </>
    )
  }
  
export default NotificationButton;