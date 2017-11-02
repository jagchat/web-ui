using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngSample.Controllers
{
    [RoutePrefix("Template")]
    public class TemplateController : Controller
    {
        [Route("deptRow")]
        [OutputCache(NoStore = true, Duration = 0)]
        public ActionResult deptRow()
        {
            return View();
        }

        [Route("deptDynamicDetails")]
        [OutputCache(NoStore = true, Duration = 0)]
        public ActionResult deptDynamicDetails()
        {
            return View();
        }

        [Route("EmpListRenderer")]
        [OutputCache(NoStore = true, Duration = 0)]
        public ActionResult empListRenderer()
        {
            return View();
        }

        [Route("EmpList")]
        [OutputCache(NoStore = true, Duration = 0)]
        public ActionResult empList()
        {
            return View();
        }

        [Route("empRow")]
        [OutputCache(NoStore = true, Duration = 0)]
        public ActionResult empRow()
        {
            return View();
        }

        [Route("Components/tabset")]
        [OutputCache(NoStore = true, Duration = 0)]
        public ActionResult componentTabset()
        {
            return View("components/tabset");
        }

        [Route("Components/tab")]
        [OutputCache(NoStore = true, Duration = 0)]
        public ActionResult componentTab()
        {
            return View("components/tab");
        }
    }
}