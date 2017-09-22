using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngSample.DataAccess;

namespace AngSample.Controllers
{
    [RoutePrefix("Data")]
    public class DataController : Controller
    {
        [Route("Departments")]
        public JsonResult GetDepts()
        {
            return Json((new DeptRepository()).GetDepts(), JsonRequestBehavior.AllowGet);
        }

        [Route("Departments/{deptno}")]
        public JsonResult GetDept(string deptno)
        {
            System.Threading.Thread.Sleep(3000);
            return Json((new DeptRepository()).GetDept(deptno), JsonRequestBehavior.AllowGet);
        }

        [Route("Departments/{deptno}/Employees")]
        public JsonResult GetDeptEmployees(string deptno)
        {
            System.Threading.Thread.Sleep(3000);
            return Json((new EmpRepository()).GetEmployeesByDept(deptno), JsonRequestBehavior.AllowGet);
        }

        [Route("Employees")]
        public JsonResult GetEmployees()
        {
            System.Threading.Thread.Sleep(3000);
            return Json((new EmpRepository()).GetEmployees(), JsonRequestBehavior.AllowGet);
        }

        [Route("Employees/{empno}")]
        public JsonResult GetEmployeeResult(string empno)
        {
            System.Threading.Thread.Sleep(3000);
            return Json((new EmpRepository()).GetEmployee(empno), JsonRequestBehavior.AllowGet);
        }

    }
}