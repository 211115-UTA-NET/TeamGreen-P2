using Microsoft.AspNetCore.Mvc;

namespace PurrcationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MainController : ControllerBase
    {
        private IConfiguration Configuration;
        public MainController(IConfiguration _configuration)
        {
            Configuration = _configuration;
        }

        [HttpPost("/signup")]

        public async Task<IActionResult> AddUser()
        {
            string connString = this.Configuration.GetConnectionString("Purrcation-DB-Connection");


            return new ContentResult()
            {
                StatusCode = StatusCodes.Status201Created,
                ContentType = "application/json"

            };
        }
    }
}
