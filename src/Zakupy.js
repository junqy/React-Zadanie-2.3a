import React, { Component } from 'react';
import AddProdukt from './AddProdukt';
import './App.css';

class Zakupy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zakupy: [{
                id: 1,
                nazwa: "masło",
                cena: "3.99",
            }, {
                id: 2,
                nazwa: "banan",
                cena: "0.99"
            }]
        }
    }

    addProdukt = (produkt) => {
        this.setState(state => {
            var list = state.zakupy.splice(0);
            var id = list.length + 1;
            list.push({
                id: id,
                nazwa: produkt.nazwa,
                cena: produkt.cena
            })
            return { zakupy: list };
        })
    }

    deleteProdukt = (id) => {
        this.setState(state =>{
            var list = state.zakupy.splice(0)
            let prod = list.filter(val => val.id === id)
            let idx = list.indexOf(prod[0])
            list.splice(idx, 1)
            return{ zakupy: list }
        })
    }

    onChange = (event) => {
        var value = event.target.value;
        var nazwa = event.target.id;
        this.setState({
            [nazwa] : value
        })
    }

    render() {
        const { zakupy } = this.state;
        return (
            <div className="App-header">
                {
                    zakupy.map((produkt, key) => {
                        return <div>
                            <p key={key}>{produkt.id} {produkt.nazwa}  {produkt.cena}zł <button onClick ={() => this.deleteProdukt(produkt.id)}>Remove</button></p>
                        </div>
                    })
                }
                <AddProdukt addProdukt={this.addProdukt} />
            </div>
        );
    }
}

export default Zakupy;