using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PurrcationAPI.Models.DataStorage;
using PurrcationAPI.Models.Logic;
using System.ComponentModel.DataAnnotations;

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

        [HttpGet("/GetCommentById/{Id}")]
       
        public ContentResult GetCommentById(string id)
        {

            SqlData repository = new SqlData(getConnectionString());
            List<Comments> result = repository.GetCommentsById(id);
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(result);

            Response.Headers.Add("Access-Control-Allow-Origin", "*");


            return new ContentResult()
            {
                StatusCode = 200,
                ContentType = "application/json",
                Content = json
            };
        }

        [HttpGet("/GetAllUnits")]
        public ContentResult GetItems()

        {
            SqlData repository = new SqlData(getConnectionString());
             
            List<Unit> result = repository.GetAllUnits();
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(result);


            // //header('Access-Control-Allow-Origin: *');
            //  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization");
            // header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, PATCH");
            // HttpContext.Response.AppendHeader("your_header_name", "your_header_value");

            Response.Headers.Add("Access-Control-Allow-Origin", "*");
       

            return new ContentResult()
            {
                
                StatusCode = 200,
                ContentType = "application/json",
                Content = json
            };
        }
        [HttpGet("/GetOwnerUnitById/{Id}")]
        public ContentResult GetOwnerUnitById(string id)
        {

            SqlData repository = new SqlData(getConnectionString());
            List<Unit> result = repository.GetOwnerUnitById(id);
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(result);

            Response.Headers.Add("Access-Control-Allow-Origin", "*");


            return new ContentResult()
            {
                StatusCode = 200,
                ContentType = "application/json",
                Content = json
            };
        }
        [HttpGet("/GetUnitById/{Id}")]
        public ContentResult GetUnitById(string id)
        {

            SqlData repository = new SqlData(getConnectionString());
            List<Unit> result = repository.GetUnitById(id);
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(result);

            Response.Headers.Add("Access-Control-Allow-Origin", "*");


            return new ContentResult()
            {
                StatusCode = 200,
                ContentType = "application/json",
                Content = json
            };
        }
        // [HttpGet("/VerifyCredentials/")]
        // public ActionResult VerifyCredentials([FromQuery(Name = "username")] string username)
        [HttpGet("/VerifyCredentials/{Id}")]
        public ContentResult VerifyCredentials(string id)
        
            {
                Account account = new Account();
            // bool ans = account.checkIfUsrExist(username, getConnectionString());
            SqlData repository = new SqlData(getConnectionString());
            List<Account> result = repository.VerifyCredentials(id);
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(result);

            Response.Headers.Add("Access-Control-Allow-Origin", "*");

            return new ContentResult()
            {
                StatusCode = 200,
                ContentType = "application/json",
                Content = json
            };
           

        }

        [HttpGet("/VerifyCredentialsQuery/")]
        public ActionResult VerifyCredentialsQuery([FromQuery(Name = "username")] string username)
        {
            Account account = new Account();
            // bool ans = account.checkIfUsrExist(username, getConnectionString());
            SqlData repository = new SqlData(getConnectionString());
            List<Account> result = repository.VerifyCredentials(username);
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(result);

            Response.Headers.Add("Access-Control-Allow-Origin", "*");

            return new ContentResult()
            {
                StatusCode = 200,
                ContentType = "application/json",
                Content = json
            };


        }
       // [EnableCors("*", "*", "*")]

        [HttpGet("/signup")]
        public async Task<IActionResult> AddUser([FromQuery(Name = "user")] string info)
        {


            Response.Headers.Add("Access-Control-Allow-Origin", "*");

            string[] infos = info.Split(":");
            string Fname =infos[2]; string Lname=infos[3]; string Password=infos[1]; string Email=infos[0]; string userType="1";

            Account newUsr = new Account(Fname, Lname, Password, Email,  userType);

             SqlData repository = new SqlData(getConnectionString());
              repository.AddNewUser(newUsr);

            return new ContentResult()
            {
                StatusCode = StatusCodes.Status201Created,
                ContentType = "application/json"

            };
        }

        [HttpGet("/AddUnit")]

        public async Task<IActionResult> AddNewUnit([FromQuery(Name = "unit")] string info)
        {


            //string[] infos = info.Split(":");
            // string address = infos[0]; string city = infos[1]; string state = infos[2]; string zip = infos[3]; string picture = infos[4]; string description = infos[5]; string price = infos[6]; string maxGuests = infos[7]; string id = infos[8];

            string address = "434"; string city = "sfs"; string state = "sfs"; string zip = "sfs"; string picture = "sfs"; string description = "sfs"; string price = "sfs"; string maxGuests = "sfs"; string id = "sfs";

            SqlData repository = new SqlData(getConnectionString());

            repository.AddNewUnit(address, city, state, zip, picture, description, price, maxGuests, id);

            return new ContentResult()
            {
                StatusCode = StatusCodes.Status201Created,
                ContentType = "application/json"
            };
        }
        [HttpGet("/AddComments")]
        public async Task<IActionResult> AddComments([FromQuery(Name = "Comments")] string info)
        {


           string Time =  DateTime.Now.ToString("HH:mm:ss tt");


            string[] infos = info.Split(":");
            string review = infos[0]; string rating = infos[1]; string unit_id = infos[2]; string Guest_ID = "1" ;

            SqlData repository = new SqlData(getConnectionString());
          
            repository.AddComment(review, rating, unit_id, Guest_ID, Time);

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