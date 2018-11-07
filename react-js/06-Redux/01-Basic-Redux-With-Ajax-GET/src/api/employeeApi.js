const API = process.env.REACT_APP_API || 'http://localhost:8000/api';

class employeeApi {

    static async fetch(method, endpoint, body) {
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

    static getAllEmployees() {
        var self = this;
        return new Promise(async (resolve, reject) => {
            var employees = await self.fetch('get', '/Employees');
            resolve(Object.assign([], employees));
        });
    }

    static saveEmployee(employee) {}

    static deleteEmployee(empno) {}
}

export default employeeApi;