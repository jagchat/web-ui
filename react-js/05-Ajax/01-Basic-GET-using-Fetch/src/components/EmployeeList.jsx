import React, { Component } from 'react';

const API = process.env.REACT_APP_API || 'http://localhost:8000/api';

class Header extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        this.getEmployees();
    }

    async fetch(method, endpoint, body) {
        try {
            const response = await fetch(`${API}${endpoint}`, {
                method,
                body: body && JSON.stringify(body),
                headers: {
                    'content-type': 'application/json',
                    accept: 'application/json'
                },
            });
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    async getEmployees() {
        this.setState({ loading: false, data: await this.fetch('get', '/Employees') });
    }

    render() {

        let renderEmpRowsList = () => {
            let empRowsList = [];
            for (let i = 0; i < this.state.data.length; i++) {
                let r = this.state.data[i];
                empRowsList.push(
                    <tr key={r.Empno}>
                        <th scope="row">
                            {r.Empno}
                        </th>
                        <td>{r.Ename}</td>
                        <td>{r.Sal}</td>
                    </tr>
                );
            }
            return empRowsList;
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-auto mr-auto">
                        <h3>List of Employees</h3>
                    </div>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderEmpRowsList()}
                        </tbody>
                    </table>
                </div >
            </div >
        )
    }
}

export default Header;
