import React, { Component } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default class SoilTesting extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    handleform = (event) => {
        const cookies = document.cookie.split(';');
        let postId = null;
        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name === 'postId') { // Check for postId cookie
                postId = value; // Set postId if found
            }
            return { postId };
        });
        const Name = postId;
        const Laboratory_Number = event.target.Laboratory_Number.value;
        const Farmer_Name = event.target.Farmer_Name.value;
        const Village = event.target.Village.value;
        const Survey_Number = event.target.Survey_Number.value;
        const Taluka_District = event.target.Taluka_District.value;
        const P_H_Number_Proporstion = event.target.P_H_Number_Proporstion.value;
        const P_H_Number_Quality = event.target.P_H_Number_Quality.value;
        const Electrical_Conductivity_Proporstion = event.target.Electrical_Conductivity_Proporstion.value;
        const Electrical_Conductivity_Quality = event.target.Electrical_Conductivity_Quality.value;
        const Organic_carbon_Proporstion = event.target.Organic_carbon_Proporstion.value;
        const Organic_carbon_Quality = event.target.Organic_carbon_Quality.value;
        const Avalaible_PhosPhorus_Proporstion = event.target.Avalaible_PhosPhorus_Proporstion.value;
        const Avalaible_PhosPhorus_Quality = event.target.Avalaible_PhosPhorus_Quality.value;
        const Avalaible_Potas_Proporstion = event.target.Avalaible_Potas_Proporstion.value;
        const Avalaible_Potas_Quality = event.target.Avalaible_Potas_Quality.value;
        const Zinc_Analysis = event.target.Zinc_Analysis.value;
        const Zinc_Quality = event.target.Zinc_Quality.value;
        const Cooper_Analysis = event.target.Cooper_Analysis.value;
        const Cooper_Quality = event.target.Cooper_Quality.value;
        const Magananese_Analysis = event.target.Magananese_Analysis.value;
        const Magananese_Quality = event.target.Magananese_Quality.value;
        const Brimstone_Analysis = event.target.Brimstone_Analysis.value;
        const Boron_Analysis = event.target.Boron_Analysis.value;
        const Boron_Quality = event.target.Boron_Quality.value;
        const Lime_Quality = event.target.Lime_Quality.value;
        const Gypsum_Quality = event.target.Gypsum_Quality.value;
        const data = { Name, Laboratory_Number, Farmer_Name, Village, Survey_Number, Taluka_District, P_H_Number_Proporstion, P_H_Number_Quality, Electrical_Conductivity_Proporstion, Electrical_Conductivity_Quality, Organic_carbon_Proporstion, Organic_carbon_Quality, Avalaible_PhosPhorus_Proporstion, Avalaible_PhosPhorus_Quality, Avalaible_Potas_Proporstion, Avalaible_Potas_Quality, Zinc_Analysis, Zinc_Quality, Cooper_Analysis, Cooper_Quality, Magananese_Analysis, Magananese_Quality, Brimstone_Analysis, Boron_Analysis, Boron_Quality, Lime_Quality, Gypsum_Quality }
        console.log(data);
        console.log(postId);
        axios.post('http://127.0.0.1:8000/apisoil/', data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

    }

    printForm = (event) => {
        // Capture the form container element
        const formContainer = document.getElementById('form-container');
    
        // Check if the form container exists
        if (formContainer) {
            // Convert the form container to a canvas
            html2canvas(formContainer).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = pdf.internal.pageSize.getWidth();
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('form.pdf');
            });
        } else {
            console.error('Form container element not found');
        }
    };
    render() {
        return (
            <div className='container border border-3 p-4'>
                <form action="" className='row' onSubmit={this.handleform} id="form-container">
                    <div className='' >
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>Laboratory Number</td>
                                    <td>Date</td>
                                </tr>
                                <tr>
                                    <td><input type="text" name="Laboratory_Number" className='form-control' /></td>
                                    <td><input type="date" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>Farmer Name</td>
                                    <td>Village</td>
                                </tr>
                                <tr>
                                    <td><input type="text" name="Farmer_Name" id="" className="form-control" /></td>
                                    <td><input type="text" name="Village" id="" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td>Survey Number</td>
                                    <td>Taluka/District</td>
                                </tr>
                                <tr>
                                    <td><input type="text" name="Survey_Number" id="" className="form-control" /></td>
                                    <td><input type="text" name="Taluka_District" id="" className="form-control" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 className='m-3'>Land verification Report</h3>
                    <div className=' m-2'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"><label htmlFor="">Test</label></th>
                                    <th scope="col"><label htmlFor="">Proporstion</label></th>
                                    <th scope="col"><label htmlFor="">Quality</label></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>P.H Number</th>
                                    <td><input type="text" name="P_H_Number_Proporstion" id="" className="form-control" /></td>
                                    <td><input type="text" name="P_H_Number_Quality" id="" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">Electrical Conductivity</th>
                                    <td><input type="text" name="Electrical_Conductivity_Proporstion" id="" className="form-control" /></td>
                                    <td><input type="text" name="Electrical_Conductivity_Quality" id="" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">Organic carbon</th>
                                    <td><input type="text" name="Organic_carbon_Proporstion" id="" className="form-control" /></td>
                                    <td><input type="text" name="Organic_carbon_Quality" id="" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">Avalaible PhosPhorus</th>
                                    <td><input type="text" name="Avalaible_PhosPhorus_Proporstion" id="" className="form-control" /></td>
                                    <td><input type="text" name="Avalaible_PhosPhorus_Quality" id="" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">Avalaible Potas</th>
                                    <td><input type="text" name="Avalaible_Potas_Proporstion" id="" className="form-control" /></td>
                                    <td><input type="text" name="Avalaible_Potas_Quality" id="" className="form-control" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className=' m-2'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope='col'>Micro Element</th>
                                    <th scope='col'>Analysis</th>
                                    <th scope='col'>Quality</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'><label htmlFor="">Zinc</label></th>
                                    <td><input type="text" name="Zinc_Analysis" id="" className="form-control" /></td>
                                    <td><input type="text" name="Zinc_Quality" id="" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <th scope='row'><label htmlFor="">Cooper</label></th>
                                    <td><input type="text" name="Cooper_Analysis" id="" className="form-control" /></td>
                                    <td><input type="text" name="Cooper_Quality" id="" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <th scope='row'><label htmlFor="">Magananese</label></th>
                                    <td><input type="text" name="Magananese_Analysis" id="" className="form-control" /></td>
                                    <td><input type="text" name="Magananese_Quality" id="" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <th scope='row'><label htmlFor="">Brimstone</label></th>
                                    <td><input type="text" name="Brimstone_Analysis" id="" className="form-control" /></td>
                                    <td><input type="text" name="Brimstone_Quality" id="" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <th scope='row'><label htmlFor="">Boron</label></th>
                                    <td><input type="text" name="Boron_Analysis" id="" className="form-control" /></td>
                                    <td><input type="text" name="Boron_Quality" id="" className="form-control" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 className='m-3'>Recommendation for land reform</h3>
                    <div className=' m-2'>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope='row'><label htmlFor="">Lime(tons/hector) Mix with soil</label></th>
                                    <td><input type="text" name="Lime_Quality" id="" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <th scope='row'><label htmlFor="">Gypsum(tons/hector) Mix with soil</label></th>
                                    <td><input type="text" name="Gypsum_Quality" id="" className="form-control" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary m-4 ">Submit Form</button>
                        <button type="button" className="btn btn-primary" onClick={this.printForm}>
                            Print Form
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
