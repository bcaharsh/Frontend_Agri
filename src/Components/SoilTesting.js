import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default class SoilTesting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 'form',
            validationph: "",
            validationel: "",
            validationorg: "",
            validationpho: "",
            validationpotas: "",
            P_H_Number_Quality: "---",
            Electrical_Conductivity_Quality: "---",
            Organic_carbon_Quality: "---",
            Avalaible_PhosPhorus_Quality: "---",
            Avalaible_Potas_Quality: "---",
            Laboratory_Number: "",
            Farmer_Name: "",
            Village: "",
            Survey_Number: "",
            Taluka_District: "",
            P_H_Number_Proporstion: "",
            Electrical_Conductivity_Proporstion: "",
            Organic_carbon_Proporstion: "",
            Avalaible_PhosPhorus_Proporstion: "",
            Avalaible_Potas_Proporstion: "",
            Fe_Analysis: "",
            Fe_Quality: "",
            Zinc_Analysis: "",
            Zinc_Quality: "---",
            Cooper_Analysis: "",
            Cooper_Quality: "---",
            Magananese_Analysis: "",
            Magananese_Quality: "---",
            Brimstone_Analysis: "",
            Brimstone_Quality: "",
            Boron_Analysis: "",
            Boron_Quality: "---",
            Lime_Quality: "---",
            Gypsum_Quality: "---",
            Potato: false,
            Aubergine: false,
            option3: false,
            Potato_Nitrogen: "",
            Potato_PhosPhorus: "",
            Potato_Potas: "",
            Aubergine_Nitrogen: "",
            Aubergine_PhosPhorus: "",
            Aubergine_Potas: ""
        }
    }

    handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        this.setState({ [name]: checked });
    };

    handleform = (event) => {
        event.preventDefault();
        const Laboratory_Number = event.target.Laboratory_Number.value;
        const Farmer_Name = event.target.Farmer_Name.value;
        const Village = event.target.Village.value;
        const Survey_Number = event.target.Survey_Number.value;
        const Taluka_District = event.target.Taluka_District.value;
        const P_H_Number_Proporstion = event.target.P_H_Number_Proporstion.value
        const Electrical_Conductivity_Proporstion = event.target.Electrical_Conductivity_Proporstion.value;
        const Organic_carbon_Proporstion = event.target.Organic_carbon_Proporstion.value;
        const Avalaible_PhosPhorus_Proporstion = event.target.Avalaible_PhosPhorus_Proporstion.value;
        const Avalaible_Potas_Proporstion = event.target.Avalaible_Potas_Proporstion.value;
        const Fe_Analysis = event.target.Fe_Analysis.value;
        const Zinc_Analysis = event.target.Zinc_Analysis.value;
        const Cooper_Analysis = event.target.Cooper_Analysis.value;
        const Magananese_Analysis = event.target.Magananese_Analysis.value;
        const Brimstone_Analysis = event.target.Brimstone_Analysis.value;
        const Boron_Analysis = event.target.Boron_Analysis.value;

        this.setState({
            Laboratory_Number: Laboratory_Number,
            Farmer_Name: Farmer_Name,
            Village: Village,
            Survey_Number: Survey_Number,
            Taluka_District: Taluka_District,
            P_H_Number_Proporstion: P_H_Number_Proporstion,
            Electrical_Conductivity_Proporstion: Electrical_Conductivity_Proporstion,
            Organic_carbon_Proporstion: Organic_carbon_Proporstion,
            Avalaible_PhosPhorus_Proporstion: Avalaible_PhosPhorus_Proporstion,
            Avalaible_Potas_Proporstion: Avalaible_Potas_Proporstion,
            Fe_Analysis: Fe_Analysis,
            Zinc_Analysis: Zinc_Analysis,
            Cooper_Analysis: Cooper_Analysis,
            Magananese_Analysis: Magananese_Analysis,
            Brimstone_Analysis: Brimstone_Analysis,
            Boron_Analysis: Boron_Analysis,

        });

        // ---------------------------------this is validation -------------------------------------
        if (!Laboratory_Number.trim()) {
            console.log("Laboratory Number is required");
        }
        if (!Farmer_Name.trim()) {
            console.log("Farmer Name is required");
        }
        if (!Village.trim()) {
            console.log("Village is required");
        }
        if (!Survey_Number.trim()) {
            console.log("Survey Number is required");
        }
        if (!Taluka_District.trim()) {
            console.log("Taluka/District is required");
        }
        // --------------------this is ph number code -------------------------
        if (P_H_Number_Proporstion >= 0.00 && P_H_Number_Proporstion < 6.50) {
            this.setState({ P_H_Number_Quality: "Acidic" })
            if (P_H_Number_Proporstion == 6.40) {
                this.setState({ Lime_Quality: '1 ton' })
            }
            else if (P_H_Number_Proporstion == 6.30) {
                this.setState({ Lime_Quality: '1.5 ton' })
            }
            else if (P_H_Number_Proporstion == 6.20) {
                this.setState({ Lime_Quality: '2.0 ton' })
            }
            else if (P_H_Number_Proporstion == 6.10) {
                this.setState({ Lime_Quality: '2.5 ton' })
            }
            else if (P_H_Number_Proporstion == 6) {
                this.setState({ Lime_Quality: '3 ton' })
            }
        }
        else if (P_H_Number_Proporstion >= 6.50 && P_H_Number_Proporstion < 8.20) {
            this.setState({ P_H_Number_Quality: "Normal" })
        }
        else if (P_H_Number_Proporstion >= 8.20 && P_H_Number_Proporstion <= 8.50) {
            this.setState({ P_H_Number_Quality: "Alkaline" })
            if (P_H_Number_Proporstion == 8.20) {
                this.setState({ Gypsum_Quality: '3 ton' })
            }
            else if (P_H_Number_Proporstion == 8.30) {
                this.setState({ Gypsum_Quality: '2.5 ton' })
            }
            else if (P_H_Number_Proporstion == 8.40) {
                this.setState({ Gypsum_Quality: '2.0 ton' })
            }
            else if (P_H_Number_Proporstion == 8.50) {
                this.setState({ Gypsum_Quality: '1.5 ton' })
            }
        }
        else {
            this.setState({ P_H_Number_Quality: "Add Valid value", validationph: "Invalid Value" });
        }

        // ----------------------this is Electrical_Conductivity_Proporstion code ----------------------------------------------------

        if (Electrical_Conductivity_Proporstion >= 0.00 && Electrical_Conductivity_Proporstion < 1.00) {
            this.setState({ Electrical_Conductivity_Quality: "Normal" })
        }
        else if (Electrical_Conductivity_Proporstion >= 1.0 && Electrical_Conductivity_Proporstion < 2.99) {
            this.setState({ Electrical_Conductivity_Quality: "Critical" })
        }
        else if (Electrical_Conductivity_Proporstion >= 2.99 && Electrical_Conductivity_Proporstion < 3.00) {
            this.setState({ Electrical_Conductivity_Quality: "Injurious" })
        }
        else {
            this.setState({ Electrical_Conductivity_Quality: "Add Valid value", validationel: "Invalid Value" });
        }
        // --------------------------this is Organic_carbon_Proporstion code ------------------------------------------------------------
        if (Organic_carbon_Proporstion >= 0.00 && Organic_carbon_Proporstion <= 0.50) {
            this.setState({ Organic_carbon_Quality: "Low" })
            if (this.state.Potato) {
                if (Organic_carbon_Proporstion >= 0.00 && Organic_carbon_Proporstion <= 0.25) {
                    this.setState({ Potato_Nitrogen: "270" })
                }
                else if (Organic_carbon_Proporstion >= 0.26 && Organic_carbon_Proporstion <= 0.40) {
                    this.setState({ Potato_Nitrogen: "250" })
                }
                else if (Organic_carbon_Proporstion >= 0.41 && Organic_carbon_Proporstion <= 0.50) {
                    this.setState({ Potato_Nitrogen: "240" })
                }
            }
            if (this.state.Aubergine) {
                if (Organic_carbon_Proporstion >= 0.00 && Organic_carbon_Proporstion <= 0.25) {
                    this.setState({ Aubergine_Nitrogen: "120" })
                }
                else if (Organic_carbon_Proporstion >= 0.26 && Organic_carbon_Proporstion <= 0.40) {
                    this.setState({ Aubergine_Nitrogen: "120" })
                }
                else if (Organic_carbon_Proporstion >= 0.41 && Organic_carbon_Proporstion <= 0.50) {
                    this.setState({ Aubergine_Nitrogen: "110" })
                }
            }
        }
        else if (Organic_carbon_Proporstion >= 0.51 && Organic_carbon_Proporstion <= 0.75) {
            this.setState({ Organic_carbon_Quality: "Medium" })
            if (this.state.Potato) {
                this.setState({ Potato_Nitrogen: "220" })
            }
            else if (this.state.Aubergine) {
                this.setState({ Aubergine_Nitrogen: "100" })
            }
        }
        else if (Organic_carbon_Proporstion >= 0.76) {
            this.setState({ Organic_carbon_Quality: "High" })
            if (this.state.Potato) {
                if (Organic_carbon_Proporstion >= 0.76 && Organic_carbon_Proporstion <= 1.00) {
                    this.setState({ Potato_Nitrogen: "170" })
                }
                else if (Organic_carbon_Proporstion >= 1.01 && Organic_carbon_Proporstion <= 1.25) {
                    this.setState({ Potato_Nitrogen: "110" })
                }
                else if (Organic_carbon_Proporstion >= 1.15) {
                    this.setState({ Potato_Nitrogen: "55" })
                }
            }
            if (this.state.Aubergine) {
                if (Organic_carbon_Proporstion >= 0.76 && Organic_carbon_Proporstion <= 1.00) {
                    this.setState({ Aubergine_Nitrogen: "75" })
                }
                else if (Organic_carbon_Proporstion >= 1.01 && Organic_carbon_Proporstion <= 1.25) {
                    this.setState({ Aubergine_Nitrogen: "50" })
                }
                else if (Organic_carbon_Proporstion >= 1.15) {
                    this.setState({ Aubergine_Nitrogen: "25" })
                }
            }
        }
        else {
            this.setState({ Organic_carbon_Quality: "Add Valid value", validationorg: "Invalid Value" });
        }
        // -------------------------this is Avalaible_PhosPhorus_Proporstion code ---------------------------------------------------------
        if (Avalaible_PhosPhorus_Proporstion >= 0.00 && Avalaible_PhosPhorus_Proporstion <= 25.00) {
            this.setState({ Avalaible_PhosPhorus_Quality: "Low" })
            if (this.state.Potato) {
                if (Avalaible_PhosPhorus_Proporstion >= 0.00 && Avalaible_PhosPhorus_Proporstion <= 10.00) {
                    this.setState({ Potato_PhosPhorus: "140" })
                }
                else if (Avalaible_PhosPhorus_Proporstion >= 11.00 && Avalaible_PhosPhorus_Proporstion <= 25.00) {
                    this.setState({ Potato_PhosPhorus: "120" })
                }
            }
            if (this.state.Aubergine) {
                if (Avalaible_PhosPhorus_Proporstion >= 0.00 && Avalaible_PhosPhorus_Proporstion <= 10.00) {
                    this.setState({ Aubergine_PhosPhorus: "65" })
                }
                else if (Avalaible_PhosPhorus_Proporstion >= 11.00 && Avalaible_PhosPhorus_Proporstion <= 25.00) {
                    this.setState({ Aubergine_PhosPhorus: "55" })
                }
            }
        }
        else if (Avalaible_PhosPhorus_Proporstion >= 26.00 && Avalaible_PhosPhorus_Proporstion <= 60.00) {
            this.setState({ Avalaible_PhosPhorus_Quality: "Medium" })
            if (this.state.Potato) {
                this.setState({ Potato_PhosPhorus: "110" })
            }
            else if (this.state.Aubergine) {
                this.setState({ Aubergine_PhosPhorus: "50" })
            }
        }
        else if (Avalaible_PhosPhorus_Proporstion >= 61.00) {
            this.setState({ Avalaible_PhosPhorus_Quality: "High" })
            if (this.state.Potato) {
                if (Avalaible_PhosPhorus_Proporstion >= 61.00 && Avalaible_PhosPhorus_Proporstion <= 100.00) {
                    this.setState({ Potato_PhosPhorus: "75" })
                }
                else if (Avalaible_PhosPhorus_Proporstion >= 100.00) {
                    this.setState({ Potato_PhosPhorus: "55" })
                }
            }
            if (this.state.Aubergine) {
                if (Avalaible_PhosPhorus_Proporstion >= 61.00 && Avalaible_PhosPhorus_Proporstion <= 100.00) {
                    this.setState({ Aubergine_PhosPhorus: "35" })
                }
                else if (Avalaible_PhosPhorus_Proporstion >= 100.00) {
                    this.setState({ Aubergine_PhosPhorus: "25" })
                }
            }
        }
        else {
            this.setState({ Avalaible_PhosPhorus_Quality: "Add Valid value", validationpho: "Invalid Value" });
        }
        // ---------------------------this is Avalaible_Potas_Proporstion code -------------------------------------------
        if (Avalaible_Potas_Proporstion >= 0.00 && Avalaible_Potas_Proporstion <= 150.00) {
            this.setState({ Avalaible_Potas_Quality: "Low" })
            if (this.state.Potato) {
                if (Avalaible_Potas_Proporstion >= 0.00 && Avalaible_Potas_Proporstion <= 75.00) {
                    this.setState({ Potato_Potas: "260" })
                }
                else if (Avalaible_Potas_Proporstion >= 76.00 && Avalaible_Potas_Proporstion <= 150.00) {
                    this.setState({ Potato_Potas: "220" })
                }
            }
            if (this.state.Aubergine) {
                if (Avalaible_Potas_Proporstion >= 0.00 && Avalaible_Potas_Proporstion <= 75.00) {
                    this.setState({ Aubergine_Potas: "65" })
                }
                else if (Avalaible_Potas_Proporstion >= 76.00 && Avalaible_Potas_Proporstion <= 150.00) {
                    this.setState({ Aubergine_Potas: "55" })
                }
            }
        }
        else if (Avalaible_Potas_Proporstion >= 151.00 && Avalaible_Potas_Proporstion <= 300.00) {
            this.setState({ Avalaible_Potas_Quality: "Medium" })
            if (this.state.Potato) {
                this.setState({ Potato_Potas: "220" })
            }
            else if (this.state.Aubergine) {
                this.setState({ Aubergine_Potas: "50" })
            }
        }
        else if (Avalaible_Potas_Proporstion >= 301.00) {
            this.setState({ Avalaible_Potas_Quality: "High" })
            if (this.state.Potato) {
                if (Avalaible_Potas_Proporstion >= 301 && Avalaible_Potas_Proporstion < 450) {
                    this.setState({ Potato_Potas: "150" })
                }
                else if (Avalaible_Potas_Proporstion >= 450) {
                    this.setState({ Potato_Potas: "100" })
                }
            }
            if (this.state.Aubergine) {
                if (Avalaible_Potas_Proporstion >= 301 && Avalaible_Potas_Proporstion < 450) {
                    this.setState({ Aubergine_Potas: "35" })
                }
                else if (Avalaible_Potas_Proporstion >= 450) {
                    this.setState({ Aubergine_Potas: "25" })
                }
            }
        }
        else {
            this.setState({ Avalaible_Potas_Quality: "Add Valid value", validationpotas: "Invalid Value" });
        }
        // -------------------------------this is Fe_Analysis code -------------------------------------------------------
        if (Fe_Analysis >= 0.00 && Fe_Analysis < 5.0) {
            this.setState({ Fe_Quality: "Low" })
        }
        else if (Fe_Analysis >= 5 && Fe_Analysis < 10) {
            this.setState({ Fe_Quality: "Medium" })
        }
        else if (Fe_Analysis >= 10) {
            this.setState({ Fe_Quality: "Enough" })
        }
        else {
            this.setState({ Fe_Quality: "Add Valid value" });
        }
        // ----------------------------------------this is Zinc_Analysis code ----------------------------------------------------
        if (Zinc_Analysis >= 0.00 && Zinc_Analysis < 0.50) {
            this.setState({ Zinc_Quality: "Low" })
        }
        else if (Zinc_Analysis >= 0.50 && Zinc_Analysis < 1.00) {
            this.setState({ Zinc_Quality: "Medium" })
        }
        else if (Zinc_Analysis >= 1.00) {
            this.setState({ Zinc_Quality: "Enough" })
        }
        else {
            this.setState({ Zinc_Quality: "Add Valid value" });
        }
        // ---------------------------------this is Cooper_Analysis code ------------------------------------------
        if (Cooper_Analysis >= 0.00 && Cooper_Analysis < 0.2) {
            this.setState({ Cooper_Quality: "Low" })
        }
        else if (Cooper_Analysis >= 0.2 && Cooper_Analysis < 0.4) {
            this.setState({ Cooper_Quality: "Medium" })
        }
        else if (Cooper_Analysis >= 0.4) {
            this.setState({ Cooper_Quality: "Enough" })
        }
        else {
            this.setState({ Cooper_Quality: "Add Valid value" });
        }
        // ---------------------------------this is Magananese_Analysis code ---------------------------------------------
        if (Magananese_Analysis >= 0.00 && Magananese_Analysis < 5.0) {
            this.setState({ Magananese_Quality: "Low" })
        }
        else if (Magananese_Analysis >= 5 && Magananese_Analysis < 10) {
            this.setState({ Magananese_Quality: "Medium" })
        }
        else if (Magananese_Analysis >= 10) {
            this.setState({ Magananese_Quality: "Enough" })
        }
        else {
            this.setState({ Magananese_Quality: "Add Valid value" });
        }
        // ---------------------------------this is Brimstone_Analysis code --------------------------------
        if (Brimstone_Analysis >= 0.00 && Brimstone_Analysis < 10) {
            this.setState({ Brimstone_Quality: "Low" })
        }
        else if (Brimstone_Analysis >= 10 && Brimstone_Analysis < 20) {
            this.setState({ Brimstone_Quality: "Medium" })
        }
        else if (Brimstone_Analysis >= 20) {
            this.setState({ Brimstone_Quality: "Enough" })
        }
        else {
            this.setState({ Brimstone_Quality: "Add Valid value" });
        }
        // --------------------------------this is Boron_Analysis code --------------------------------------
        if (Boron_Analysis >= 0.00 && Boron_Analysis < 0.09) {
            this.setState({ Boron_Quality: "Low" })
        }
        else if (Boron_Analysis >= 0.09 && Boron_Analysis < 0.20) {
            this.setState({ Boron_Quality: "Medium" })
        }
        else if (Boron_Analysis >= 0.20) {
            this.setState({ Boron_Quality: "Enough" })
        }
        else {
            this.setState({ Boron_Quality: "Add Valid value" });
        }

    }

    potatourea = () => {
        const val = Math.floor(this.state.Potato_PhosPhorus * 100 / 32)
        const a = val * 12 / 100
        const b = this.state.Potato_Nitrogen - a
        return Math.floor(b * 100 / 46)
    }
    potasnpk = () => {
        const val = Math.floor(this.state.Potato_PhosPhorus * 100 / 32)
        const a = val * 16 / 100
        const b = this.state.Potato_Potas - a
        return Math.floor(b * 100 / 60)
    }
    potato_npk = () => {
        const val = Math.floor(this.state.Potato_PhosPhorus * 100 / 32)
        return val
    }
    Aubergine_npk = () => {
        const val = Math.floor(this.state.Aubergine_PhosPhorus * 100 / 32)
        return val
    }
    Auberginenpk = () => {
        const val = Math.floor(this.state.Aubergine_PhosPhorus * 100 / 32)
        const a = Math.floor(val * 16 / 100)
        const b = this.state.Aubergine_Potas - a
        return Math.floor(b * 100 / 60)
    }
    Aubergineurea = () => {
        const val = Math.floor(this.state.Aubergine_PhosPhorus * 100 / 32)
        const a = Math.floor(val * 12 / 100)
        const b = this.state.Aubergine_Nitrogen - a
        return Math.floor(b * 100 / 46)
    }

    renderFormTab = () => {
        return (
            <div>
                {/* Your form JSX */}
                <div className='container p-4'>
                    <form action="" className='row' onSubmit={this.handleform} id="form-container">
                        <div className='' >
                            <table className='table table-borderless'>
                                <tbody>
                                    <tr>
                                        <td>Laboratory Number</td>
                                        <td>Date</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="Laboratory_Number" className='form-control border border-dark' /></td>
                                        <td><input type="date" className='form-control border border-dark' /></td>
                                    </tr>
                                    <tr>
                                        <td>Farmer Name</td>
                                        <td>Village</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="Farmer_Name" id="" className="form-control border border-dark" /></td>
                                        <td><input type="text" name="Village" id="" className="form-control border border-dark" /></td>
                                    </tr>
                                    <tr>
                                        <td>Survey Number</td>
                                        <td>Taluka/District</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="Survey_Number" id="" className="form-control border border-dark" /></td>
                                        <td><input type="text" name="Taluka_District" id="" className="form-control border border-dark" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className='m-3'>Land verification Report</h3>
                        <div className=' m-2'>
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col"><label htmlFor="">Test</label></th>
                                        <th scope="col"><label htmlFor="">Proporstion</label></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope='row'>P.H Number</th>
                                        <td><input type="number" step="0.01" name="P_H_Number_Proporstion" id="" className="form-control border border-dark" required />{this.state.validationph}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Electrical Conductivity</th>
                                        <td><input type="number" step="0.01" name="Electrical_Conductivity_Proporstion" id="" className="form-control border border-dark" required />{this.state.validationel}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Organic carbon</th>
                                        <td><input type="number" step="0.01" name="Organic_carbon_Proporstion" id="" className="form-control border border-dark" required />{this.state.validationorg}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Avalaible PhosPhorus</th>
                                        <td><input type="number" step="0.01" name="Avalaible_PhosPhorus_Proporstion" id="" className="form-control border border-dark" required />{this.state.validationpho}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Avalaible Potas</th>
                                        <td><input type="number" step="0.01" name="Avalaible_Potas_Proporstion" id="" className="form-control border border-dark" required />{this.state.validationpotas}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className=' m-2'>
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope='col'>Micro Element</th>
                                        <th scope='col'>Analysis</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope='row'><label htmlFor="">Iron(Fe)</label></th>
                                        <td><input type="number" step="0.01" name="Fe_Analysis" id="" className="form-control border border-dark" required /></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'><label htmlFor="">Zinc</label></th>
                                        <td><input type="number" step="0.01" name="Zinc_Analysis" id="" className="form-control border border-dark" required /></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'><label htmlFor="">Cooper</label></th>
                                        <td><input type="number" step="0.01" name="Cooper_Analysis" id="" className="form-control border border-dark" required /></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'><label htmlFor="">Magananese</label></th>
                                        <td><input type="number" step="0.01" name="Magananese_Analysis" id="" className="form-control border border-dark" required /></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'><label htmlFor="">Brimstone</label></th>
                                        <td><input type="number" step="0.01" name="Brimstone_Analysis" id="" className="form-control border border-dark" required /></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'><label htmlFor="">Boron</label></th>
                                        <td><input type="number" step="0.01" name="Boron_Analysis" id="" className="form-control border border-dark" required /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="m-2">
                            <h3>SELECT CROP FOR  ANALYSIS:</h3>
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Crops</th>
                                        <th>Selection</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Potato</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name="Potato"
                                                checked={this.state.Potato}
                                                onChange={this.handleCheckboxChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Aubergine</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name="Aubergine"
                                                checked={this.state.Aubergine}
                                                onChange={this.handleCheckboxChange}
                                            />
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td>Option 3</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name="option3"
                                                checked={this.state.option3}
                                                onChange={this.handleCheckboxChange}
                                            />
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button type="submit" onClick={() => this.setState({ activeTab: 'report' })} className="btn btn-primary m-4 ">Submit Form</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    renderReportTab = () => {
        return (
            <div>
                {/* Your report JSX */}
                <div id="form-container" className=' container  p-4'>
                    <h3 className='m-3'>Land verification Report</h3>
                    <hr />
                    <table className="table table-borderless">
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
                                <td><label htmlFor="">{this.state.P_H_Number_Proporstion}</label></td>
                                <td><label htmlFor="">{this.state.P_H_Number_Quality}</label></td>
                            </tr>
                            <tr>
                                <th scope="row">Electrical Conductivity</th>
                                <td><label htmlFor="">{this.state.Electrical_Conductivity_Proporstion}</label></td>
                                <td><label htmlFor="">{this.state.Electrical_Conductivity_Quality}</label></td>
                            </tr>
                            <tr>
                                <th scope="row">Organic carbon</th>
                                <td><label htmlFor="">{this.state.Organic_carbon_Proporstion}</label></td>
                                <td><label htmlFor="">{this.state.Organic_carbon_Quality}</label></td>
                            </tr>
                            <tr>
                                <th scope="row">Avalaible PhosPhorus</th>
                                <td><label htmlFor="">{this.state.Avalaible_PhosPhorus_Proporstion}</label></td>
                                <td><label htmlFor="">{this.state.Avalaible_PhosPhorus_Quality}</label></td>
                            </tr>
                            <tr>
                                <th scope="row">Avalaible Potas</th>
                                <td><label htmlFor="">{this.state.Avalaible_Potas_Proporstion}</label></td>
                                <td><label htmlFor="">{this.state.Avalaible_Potas_Quality}</label></td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope='col'>Micro Element</th>
                                <th scope='col'>Analysis</th>
                                <th scope='col'>Quality</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'><label htmlFor="">Iron(Fe)</label></th>
                                <td>{this.state.Fe_Analysis}</td>
                                <td>{this.state.Fe_Quality}</td>
                            </tr>
                            <tr>
                                <th scope='row'><label htmlFor="">Zinc</label></th>
                                <td>{this.state.Zinc_Analysis}</td>
                                <td>{this.state.Zinc_Quality}</td>
                            </tr>
                            <tr>
                                <th scope='row'><label htmlFor="">Cooper</label></th>
                                <td>{this.state.Cooper_Analysis}</td>
                                <td>{this.state.Cooper_Quality}</td>
                            </tr>
                            <tr>
                                <th scope='row'><label htmlFor="">Magananese</label></th>
                                <td>{this.state.Magananese_Analysis}</td>
                                <td>{this.state.Magananese_Quality}</td>
                            </tr>
                            <tr>
                                <th scope='row'><label htmlFor="">Brimstone</label></th>
                                <td>{this.state.Brimstone_Analysis}</td>
                                <td>{this.state.Brimstone_Quality}</td>
                            </tr>
                            <tr>
                                <th scope='row'><label htmlFor="">Boron</label></th>
                                <td>{this.state.Boron_Analysis}</td>
                                <td>{this.state.Boron_Quality}</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <h3 className='m-3'>Recommendation for land reform</h3>
                    <hr />
                    <div className=' m-2'>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th scope='row'><label htmlFor="">Lime(tons/hector) Mix with soil</label></th>
                                    <td><label htmlFor="">{this.state.Lime_Quality}</label></td>
                                </tr>
                                <tr>
                                    <th scope='row'><label htmlFor="">Gypsum(tons/hector) Mix with soil</label></th>
                                    <td>{this.state.Gypsum_Quality}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className='mt-4'>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th>Crop Name</th>
                                    <th>Nitrogen</th>
                                    <th>Phospho</th>
                                    <th>potas</th>
                                    <th>N.P.K <br />(12:32:16)</th>
                                    <th>N.P.K <br />(10:26:26)</th>
                                    <th>D.A.P <br />(18:46)</th>
                                    <th>Urea</th>
                                    <th>Potas</th>
                                    <th>Farm Yard Manure <br />(Trackter/Per hector)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!this.state.Potato ? "" : (
                                    <tr>
                                        <td>Potato</td>
                                        <td>{this.state.Potato_Nitrogen}</td>
                                        <td>{this.state.Potato_PhosPhorus}</td>
                                        <td>{this.state.Potato_Potas}</td>
                                        <td>{this.potato_npk()}</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>{this.potatourea()}</td>
                                        <td>{this.potasnpk()}</td>
                                        <td>12.5</td>
                                    </tr>
                                )}
                                {!this.state.Aubergine ? "" : (
                                    <tr>
                                        <td>Aubergine</td>
                                        <td>{this.state.Aubergine_Nitrogen}</td>
                                        <td>{this.state.Aubergine_PhosPhorus}</td>
                                        <td>{this.state.Aubergine_Potas}</td>
                                        <td>{this.Aubergine_npk()}</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>{this.Aubergineurea()}</td>
                                        <td>{this.Auberginenpk()}</td>
                                        <td>3.75</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />
                <button className='btn btn-primary' onClick={() => this.setState({ activeTab: 'form' })}>Go Back to Form</button>

            </div>
        );
    };
    render() {
        return (
            <>
                <div className='container border border-2 p-4'>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className={`nav-link ${this.state.activeTab === 'form' ? 'active' : ''}`} onClick={() => this.setState({ activeTab: 'form' })}>Form</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${this.state.activeTab === 'report' ? 'active' : ''}`} onClick={() => this.setState({ activeTab: 'report' })}>Report</button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-pane ${this.state.activeTab === 'form' ? 'active' : ''}`}>
                            {this.renderFormTab()}
                        </div>
                        <div className={`tab-pane ${this.state.activeTab === 'report' ? 'active' : ''}`}>
                            {this.renderReportTab()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

