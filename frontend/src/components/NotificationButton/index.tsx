import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';
import axios from "axios";
import './styles.css';

type Props = {
  saleId: number
}

function handleClick(saleId:number){
  axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(()=>{
      toast.success("SMS enviada com sucesso!", {
        position: toast.POSITION.TOP_CENTER
      })
    }).catch(()=>{
      toast.error("Erro ao enviar SMS!", {
        position: toast.POSITION.TOP_CENTER
      })
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