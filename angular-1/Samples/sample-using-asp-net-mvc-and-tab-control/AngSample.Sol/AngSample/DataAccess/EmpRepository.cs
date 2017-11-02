using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AngSample.DTO;
using System.Data.SqlClient;
using Dapper;

namespace AngSample.DataAccess
{
    public class EmpRepository
    {
        private SqlConnection GetConnection()
        {
            return new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["db"].ConnectionString);
        }

        public List<Emp> GetEmployees()
        {
            return GetConnection().Query<Emp>("SELECT Empno, Ename, Sal, Deptno FROM Emp").ToList();
        }

        public List<Emp> GetEmployeesByDept(string deptno)
        {
            return GetConnection().Query<Emp>($"SELECT Empno, Ename, Sal, Deptno FROM Emp WHERE Deptno = {deptno}").ToList();
        }

        public Emp GetEmployee(string empno)
        {
            return GetConnection().Query<Emp>($"SELECT Empno, Ename, Sal, Deptno FROM Emp WHERE Empno = {empno}").FirstOrDefault();
        }
    }
}