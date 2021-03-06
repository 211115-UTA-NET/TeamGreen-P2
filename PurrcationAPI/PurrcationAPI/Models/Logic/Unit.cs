namespace PurrcationAPI.Models.Logic
{
    public class Unit
    {
        public string Unit_Type_ID { get; set; }
        public int Owner_ID { get; set; }
        public string Address { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Unit_Description { get; set; }

        public string Price_Night_Cat { get; set; }

        public int Zip_Code { get; set; }

        public int Max_Guests { get; set; }
        public string Photo_URL { get; set; }

        public string Unit_ID { get; set; }

        public Unit (string Unit_ID, string Unit_Type_ID, int Owner_ID, string  Address, string City, string State, string Unit_Description, string Price_Night_Cat, int Zip_Code, int Max_Guests, string Photo_URL)
        {
            this.Unit_ID = Unit_ID;
            this.Unit_Type_ID = Unit_Type_ID;
            this.Owner_ID = Owner_ID;
            this.Address = Address;
            this.City = City;
            this.State = State;
            this.Unit_Description = Unit_Description;
            this.Price_Night_Cat = Price_Night_Cat;
            this.Zip_Code = Zip_Code;
            this.Max_Guests = Max_Guests;
            this.Photo_URL = Photo_URL;


        }




    }
}
