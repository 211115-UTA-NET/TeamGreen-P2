using Microsoft.AspNetCore.Mvc;
using PurrcationAPI.Models.DataStorage;
using PurrcationAPI.Models.Logic;

namespace PurrcationAPI.Controllers
{//
    [Route("api/[controller]")]
    [ApiController]
    public class MainController : ControllerBase
    {
        private IConfiguration Configuration;
        public MainController(IConfiguration _configuration)
        {
            Configuration = _configuration;
        }

        public string getConnectionString()
        {
            return  this.Configuration.GetConnectionString("Purrcation-DB-Connection");
            
        }

        [HttpPost("/signup")]

        public async Task<IActionResult> AddUser(List<User> usr)
        {
            Account newUsr = new Account(usr[0].Fname, usr[0].Lname, usr[0].Password, usr[0].Email, usr[0].UserType);

            SqlData repository = new SqlData(getConnectionString());
            repository.AddNewUser(newUsr);

            return new ContentResult()
            {
                StatusCode = StatusCodes.Status201Created,
                ContentType = "application/json"

            };
        }

        [HttpPost("/unit")]

        public async Task<IActionResult> AddUnit(List<Unit> unit)
        {
            SqlData repository = new SqlData(getConnectionString());
            repository.AddNewUnit(unit);

            return new ContentResult()
            {
                StatusCode = StatusCodes.Status201Created,
                ContentType = "application/json"
            };
        }
        [HttpPost("/AddComments")]
        public async Task<IActionResult> AddComments(List<Comments> comments)
        {
            SqlData repository = new SqlData(getConnectionString());
            repository.AddComment(comments);

            return new ContentResult()
            {
                StatusCode = StatusCodes.Status201Created,
                ContentType = "application/json"
            };
        }
        [HttpPost("/AddStayLog")]
        public async Task<IActionResult> AddStayLog(List<StayLog> log)
        {
            SqlData repository = new SqlData(getConnectionString());
            repository.AddStayLog(log);

            return new ContentResult()
            {
                StatusCode = StatusCodes.Status201Created,
                ContentType = "application/json"
            };
        }
        [HttpPost("/AddPhoto")]
        public async Task<IActionResult> AddPhoto(List<Photos> photo)
        {
            SqlData repository = new SqlData(getConnectionString());
            repository.AddPhoto(photo);

            return new ContentResult()
            {
                StatusCode = StatusCodes.Status201Created,
                ContentType = "application/json"
            };
        }
        [HttpPost("/Catneeds")]
        public async Task<IActionResult> AddCatNeeds(List<CatNeeds> catNeeds)
        {
            SqlData repository = new SqlData(getConnectionString());
            repository.AddCatNeeds(catNeeds);

            return new ContentResult()
            {
                StatusCode = StatusCodes.Status201Created,
                ContentType = "application/json"

            };
        }
    }
}