﻿using Microsoft.AspNetCore.Cors;
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
        [HttpGet("/GetOwnerById/{Id}")]
        public ContentResult GetOwnerById(string id)
        {

            SqlData repository = new SqlData(getConnectionString());
            List<Unit> result = repository.GetOwnerById(id);
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

        [HttpPost("/signup")]
        public async Task<IActionResult> AddUser( PostBody ok)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");

            //string t = ok;
            // Account newUsr = new Account(usr[0].Fname, usr[0].Lname, usr[0].Password, usr[0].Email, usr[0].UserType);

            // SqlData repository = new SqlData(getConnectionString());
            //  repository.AddNewUser(newUsr);

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