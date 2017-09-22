using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AngSample.DTO;
using System.Data.SqlClient;
using Dapper;

namespace AngSample.DataAccess
{
    public class DeptRepository
    {
        private SqlConnection GetConnection()
        {
            return new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["db"].ConnectionString);
        }

        public List<Dept> GetDepts()
        {
            return GetConnection().Query<Dept>("SELECT Deptno, Dname FROM Dept").ToList();
        }

        public Dept GetDept(string deptno)
        {
            return GetConnection().Query<Dept>($"SELECT Deptno, Dname FROM Dept WHERE deptno = {deptno}").FirstOrDefault();
        }
    }
}