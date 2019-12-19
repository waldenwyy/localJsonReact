import React from "react";
import axios from 'axios';

export class Json extends React.Component {

    constructor() {
        super();

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        const that = this;

        axios
        .get("data.json")
        .then(function(response) {
           
            that.setState({
                data: response.data
            })

            console.log(that.state.data);
            //Perform action based on response
        })
        .catch(function(error) {
            console.log("error: " + error);
            //Perform action based on error
        });
    }

    render() {
        if (this.state.data !== null) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {this.state.data.LIST.map((item, key) => <div key={key}>
                            {item.NAME}</div>)}
                        </div>
                    </div>
                </div>
            )
        }
        
        return (
            
            <div>
                <p>Data is empty, please check the api call.</p>
            </div>
        );
    }
}