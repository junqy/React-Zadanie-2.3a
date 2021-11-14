import React, { Component } from 'react';

class AddProdukt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nazwa: "",
            cena: ""
        }
    }

    addProdukt = () => {
        const { addProdukt } = this.props;
        addProdukt(this.state);
    }

    onChange = (event) => {
        var value = event.target.value;
        var nazwa = event.target.id;
        this.setState({
            [nazwa] : value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" id="nazwa" placeholder="Nazwa produktu" onChange={this.onChange}/>
                    <input type="text" id="cena" placeholder="Cena produktu" onChange={this.onChange} />
                    <button onClick={this.addProdukt}>Add</button>
                </div>
            </div>
        )
    }
}

export default AddProdukt;