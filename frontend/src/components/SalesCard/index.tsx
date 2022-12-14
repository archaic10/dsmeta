import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import { BASE_URL } from "../../utils/request";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { Sale } from "../../models/sale";
import axios from "axios";
import './styles.css';

function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate]= useState(max);
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(()=>{
        const dMin = minDate.toISOString().slice(0, 10)
        const dMax = maxDate.toISOString().slice(0, 10)
        axios.get(`${BASE_URL}/sales?minDate=${dMin}&maxDate=${dMax}`)
            .then(response =>{
                setSales(response.data.content);
            })
    },[minDate,maxDate])

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        { sales.map(sale =>{
                            let {id, sellerName, date, visited, deals, amount} = sale
                            return (
                                <tr key={id}>
                                    <td className="show992">{id}</td>
                                    <td className="show576">{new Date(date).toLocaleDateString()}</td>
                                    <td>{sellerName}</td>
                                    <td className="show992">{visited}</td>
                                    <td className="show992">{deals}</td>
                                    <td>R$ {amount.toFixed(2)}</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <NotificationButton 
                                            saleId={id}
                                        />  
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default SalesCard;