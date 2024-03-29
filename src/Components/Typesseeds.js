import React, { Component } from 'react'
import axios from 'axios';

class Typesseeds extends Component {
    constructor(props) {
        super(props)

        this.state = {
            seeddata: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/apiget/')
        .then(response=>{
            console.log(response.data.seedinfo);
            this.setState({ seeddata : response.data.seedinfo})
        })
        .catch((error)=>{console.log(error);})
    }

    render() {
        return (
            <div className='p-4 row'>
                <h1>Seed Information</h1> 
                {Array.isArray(this.state.seeddata) && this.state.seeddata.map((item,index)=>(
                    <div key={index} className="col-md-3 ">
                    <div className="card-container">
                        <div className="card">
                            <div className="img-content">
                                <img src={'http://127.0.0.1:8000/' + item.Seed_image} alt='card' />
                            </div>
                            <div className="content">
                                <p className="heading">{item.Seed_Name}</p>
                                <h4>{item.Seed_Type}</h4>
                                <p>
                                    {item.Seed_Description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <h5>{item.Seed_Name}</h5>
                </div>
                ))}     
            </div>
        )
    }
}

export default Typesseeds;