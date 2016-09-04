using System.Web.Mvc;

namespace AngularJSDirectiveSamples.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return this.View();
        }
    }
}