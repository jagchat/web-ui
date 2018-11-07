import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as employeeActions from '../actions/employeeActions';

class EmployeeList extends Component {
    constructor(...args) {
        super(...args);
    }

    render() {

        let renderEmpRowsList = () => {
            let empRowsList = [];
            for (let i = 0; i < this.props.employees.length; i++) {
                let r = this.props.employees[i];
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

function mapStateToProps(state, ownProps) {
    return {
        employees: state.employees
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);

