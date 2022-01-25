using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using PurrcationAPI.Models.Logic;

namespace PurrcationAPI.Models.DataStorage
{
    public class SqlData : ISqlData
    {
        private readonly string connectionString;


        public SqlData(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public List<Unit> GetAllUnits()
        {
            List<Unit> result = new();

            using SqlConnection connection = new(connectionString);
            connection.Open();

            using SqlCommand cmd = new(
                @"Select *
                from Units",
                connection);

            using SqlDataAdapter adapter = new(cmd);
            DataSet dataSet = new();
            adapter.Fill(dataSet);

            connection.Close();

            foreach (DataRow row in dataSet.Tables[0].Rows)
            {

                int Unit_Type_ID = Convert.ToInt32(row["Unit_Type_ID"]);
                int Owner_ID = Convert.ToInt32(row["Owner_ID"].ToString());
                string? Address = row["Address"].ToString();
                string? City = row["City"].ToString();
                string? State = row["State"].ToString();
                string? Unit_Description = row["Unit_Description"].ToString();
                string? Price_Night_Cat = row["Price_Night_Cat"].ToString();
                int Zip_Code = Convert.ToInt32(row["Zip_Code"]);
                int Max_Guests = Convert.ToInt32(row["Max_Guests"]);


                result.Add(new(Unit_Type_ID, Owner_ID, Address, City, State, Unit_Description, Price_Night_Cat, Zip_Code, Max_Guests));

            }

            return result;
        }

        //This method will add a new user to the database 
        public void AddNewUser(Account usr)
        {


            using SqlConnection connection = new(connectionString);
            connection.Open();
            string query = " INSERT INTO Users (First_Name, Last_Name, Password,Email,User_Type_ID)";
            query += " VALUES (@First_Name, @Last_Name, @Password, @Email, @User_Type_ID)";
            SqlCommand myCommand = new SqlCommand(query, connection);

            myCommand.Parameters.AddWithValue("@First_Name", usr.Fname);
            myCommand.Parameters.AddWithValue("@Last_Name", usr.Lname);
            myCommand.Parameters.AddWithValue("@Password", usr.Password);
            myCommand.Parameters.AddWithValue("@Email", usr.Email);
            myCommand.Parameters.AddWithValue("@User_Type_ID", usr.userType);
            myCommand.ExecuteNonQuery();
            connection.Close();
        }
        public void AddNewUnit(List<Unit> unit)
        {
           // unit[0].Unit_Type_ID, unit[0].Owner_ID, unit[0].Address, unit[0].City, unit[0].State, unit[0].Zip_Code, unit[0].Unit_Description, unit[0].Price_Night_Cat, unit[0].Max_Guests
            using SqlConnection connection = new(connectionString);
            connection.Open();
            string query = "INSERT INTO Unit (Unit_Type_ID, Owner_ID, Address,City,State,Unit_Description,Price_Night_Cat,Zip_Code,Max_Guests)";
            query += " VALUES (@Unit_Type_ID, @Owner_ID, @Address, @City, @State,@Unit_Description,@Price_Night_Cat,@Zip_Code,@Max_Guests)";

            SqlCommand myCommand = new SqlCommand(query, connection);

            myCommand.Parameters.AddWithValue("@Unit_Type_ID", unit[0].Unit_Type_ID);
            myCommand.Parameters.AddWithValue("@Owner_ID", unit[0].Owner_ID);
            myCommand.Parameters.AddWithValue("@Address", unit[0].Address);
            myCommand.Parameters.AddWithValue("@City", unit[0].City);
            myCommand.Parameters.AddWithValue("@State", unit[0].State);
            myCommand.Parameters.AddWithValue("@Unit_Description", unit[0].Unit_Description);
            myCommand.Parameters.AddWithValue("@Price_Night_Cat", unit[0].Price_Night_Cat);
            myCommand.Parameters.AddWithValue("@Zip_Code", unit[0].Zip_Code);
            myCommand.Parameters.AddWithValue("@Max_Guests", unit[0].Max_Guests);

            myCommand.ExecuteNonQuery();
            connection.Close();
        }
        public void AddComment(List<Comments> comments)
        {
            using SqlConnection connection = new(connectionString);
            connection.Open();
            string query = "INSERT INTO Comments (Unit_ID, Guest_ID, Review,Rating,Post_Date_Time)";
            query += " VALUES (@Unit_ID, @Guest_ID, @Review, @Rating, @Post_Date_Time)";
            SqlCommand myCommand = new SqlCommand(query, connection);

            myCommand.Parameters.AddWithValue("@Unit_ID", comments[0].Unit_ID);
            myCommand.Parameters.AddWithValue("@Guest_ID", comments[0].Guest_ID);
            myCommand.Parameters.AddWithValue("@Review", comments[0].Review);
            myCommand.Parameters.AddWithValue("@Rating", comments[0].Rating);
            myCommand.Parameters.AddWithValue("@Post_Date_Time", comments[0].getDateTime());
            myCommand.ExecuteNonQuery();
            connection.Close();
        }

        public void AddStayLog(List<StayLog> log)
        {
            using SqlConnection connection = new(connectionString);
            connection.Open();
            string query = "INSERT INTO Stay_Log (Unit_ID, Cat_ID, Check_In_Date,Check_Out_Date,Total,Approval_ID)";
            query += " VALUES (@Unit_ID, @Cat_ID, @Check_In_Date, @Check_Out_Date, @Total,@Approval_ID)";
            SqlCommand myCommand = new SqlCommand(query, connection);

            myCommand.Parameters.AddWithValue("@Unit_ID", log[0].Unit_ID);
            myCommand.Parameters.AddWithValue("@Cat_ID", log[0].Cat_ID);
            myCommand.Parameters.AddWithValue("@Check_In_Date", log[0].Check_In_Date);
            myCommand.Parameters.AddWithValue("@Check_Out_Date", log[0].Check_In_Date);
            myCommand.Parameters.AddWithValue("@Total", log[0].Total);
            myCommand.Parameters.AddWithValue("@Approval_ID", log[0].Approval_ID);

            myCommand.ExecuteNonQuery();
            connection.Close();
        }

        public void AddPhoto(List<Photos> photo)
        {
            using SqlConnection connection = new(connectionString);
            connection.Open();
            string query = "INSERT INTO Photos (Picture, Unit_ID)";
            query += " VALUES (@Picture, @Unit_ID)";
            SqlCommand myCommand = new SqlCommand(query, connection);
            myCommand.Parameters.AddWithValue("@Picture", photo[0].Picture);
            myCommand.Parameters.AddWithValue("@Unit_ID", photo[0].UnitId);

            myCommand.ExecuteNonQuery();
            connection.Close();
        }

        public void AddCatNeeds(List<CatNeeds> catNeeds)
        {
            using SqlConnection connection = new(connectionString);
            connection.Open();
            string query = "INSERT INTO Cat_Needs (Need_ID, Cat_ID,)";
            query += " VALUES (@Need_ID, @Cat_ID)";
            SqlCommand myCommand = new SqlCommand(query, connection);

            myCommand.Parameters.AddWithValue("@Need_ID", catNeeds[0].Need_ID);
            myCommand.Parameters.AddWithValue("@Cat_ID", catNeeds[0].Cat_ID);
           
            myCommand.ExecuteNonQuery();
            connection.Close();
        }
    }
}
