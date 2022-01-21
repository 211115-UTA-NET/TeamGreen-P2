using Newtonsoft.Json;

namespace PurrcationAPI.Models.Logic
{
    public class Account
    {

        [JsonProperty]

        public string Fname { get; set; }
        [JsonProperty]

        public string Lname { get; set; }
        [JsonProperty]

        public string Password { get; set; }
        [JsonProperty]

        public string Email { get; set; }
        [JsonProperty]

        public string userType { get; set; }



        public Account(string Fname, string Lname, string Password, string Email, string userType)
        {
            this.Fname = Fname;
            this.Lname = Lname;
            this.Password = Password;
            this.Email = Email;
            this.userType = userType;


        }
        public Account()
        {
        }

        public bool checkIfUsrExist()
        {
            //check UserId with DB data to see if user exist.
            //return true if yes or return false


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
