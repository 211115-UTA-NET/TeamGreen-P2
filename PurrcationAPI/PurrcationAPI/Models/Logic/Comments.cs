namespace PurrcationAPI.Models.Logic
{
    public class Comments
    {

        public string Unit_ID { get; set; }
        public string Guest_ID { get; set; }

        public string Review { get; set; }
        public string Rating { get; set; }

        public string RatPost_Date_Timeing { get; set; }


        public string getDateTime()
        {

            string time = DateTime.Now.ToString("HH:mm:ss tt");
            return time;
        }
    }
}
