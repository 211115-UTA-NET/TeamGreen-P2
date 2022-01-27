namespace PurrcationAPI.Models.Logic
{
    public class Comments
    {

        public string Unit_ID { get; set; }
        public string Guest_ID { get; set; }

        public string Review { get; set; }
        public string Rating { get; set; }

        public string RatPost_Date_Timeing { get; set; }


        public Comments(string Unit_ID, string Guest_ID, string Review, string Rating, string RatPost_Date_Timeing)
        {
            this.Unit_ID = Unit_ID;
            this.Guest_ID = Guest_ID;
            this.Review = Review;
            this.Rating = Rating;
            this.RatPost_Date_Timeing = RatPost_Date_Timeing;
        }

        public string getDateTime()
        {

            string time = DateTime.Now.ToString("HH:mm:ss tt");
            return time;
        }
    }
}
