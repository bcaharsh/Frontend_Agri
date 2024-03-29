import React, { Component } from 'react';
import axios from 'axios';

class GovermentSchem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Govdata: []
        };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/apiget/')
            .then(response => {
                console.log(response.data.GovSch);
                this.setState({ Govdata: response.data.GovSch });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className='p-5'>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Publish Date</th>
                                <th scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(this.state.Govdata) && (this.state.Govdata.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{item.Title}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.Publish_Date}</td>
                                    <td><a href={item.Link}>{item.Link}</a></td>
                                </tr>
                            )))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default GovermentSchem;
