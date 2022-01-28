using Newtonsoft.Json;
using PurrcationAPI.Models.DataStorage;

namespace PurrcationAPI.Models.Logic
{
    public class Account
    {

        [JsonProperty]

        public string FirstName { get; set; }
        [JsonProperty]

        public string LastName { get; set; }
        [JsonProperty]

        public string Password { get; set; }
        [JsonProperty]

        public string Email { get; set; }
        [JsonProperty]

        public string userType { get; set; }
        [JsonProperty]

        public string userId { get; set; }



        public Account(string Fname, string Lname, string Password, string Email, string userType, string userId)
        {
            this.FirstName = Fname;
            this.LastName = Lname;
            this.Password = Password;
            this.Email = Email;
            this.userType = userType;
            this.userId = userId;


        }
        public Account()
        {
        }

        public bool checkIfUsrExist(string userID, string connectionString)
        {
            //check UserId with DB data to see if user exist.
            //return true if yes or return false
            SqlData repository = new SqlData(connectionString);
           // return  repository.VerifyCredentials(userID);
           return true;
        }

        public int IdGenerator()
        {
            Random ran = new Random();
            int RandomNumber = ran.Next(1, 99999);

            return RandomNumber;
        }
    }
}
