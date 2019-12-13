import React from "react";
import axios from 'axios';

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trades: [],
            string: "bacd"
        }
        
        this.getTrades();
    }
    render() {
        return (
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>type</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trades.map((trade, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{trade.id}</td>
                                        <td>{trade.typeOfCommodity}</td>
                                        <td>{trade.sellingPrice}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    getTrades = () => {
        axios.get(`http://192.168.1.92:8080/getAllTradeRequest`)
            .then((response) => {
                this.setState({ trades: response.data });
            })
            .catch((err) => {

            });
    }
}
export default Api;