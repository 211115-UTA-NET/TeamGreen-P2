using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace PurrcationAPI.Models.DataStorage
{
    public class SqlData : ISqlData
    {
        private readonly string connectionString;


        public SqlData(string connectionString)
        {
            this.connectionString = connectionString;
        }

        //This method will add a new user to the database 
        public void AddNewUser(int cusId, string Fname, string Lname, string Email, string Password)
        {
            using SqlConnection connection = new(connectionString);
            connection.Open();


            string query = "SET IDENTITY_INSERT Account ON INSERT INTO Account (ID, FirstName, Email)";
            query += " VALUES (@Id, @fname, @lname, @StreetAddress, @City, @State)";

            SqlCommand myCommand = new SqlCommand(query, connection);

            myCommand.Parameters.AddWithValue("@Id", cusId);
            myCommand.Parameters.AddWithValue("@fname", Fname);
            myCommand.Parameters.AddWithValue("@lname", Lname);
            myCommand.Parameters.AddWithValue("@Email", Email);
            myCommand.Parameters.AddWithValue("@Password", Password);

            myCommand.ExecuteNonQuery();
            Thread.Sleep(2000);


            connection.Close();
        }


    }
}
