using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class MoviesController : ApiController
    {
      public HttpResponseMessage Get()
    {
      string query = @"select * from dbo.Movies";
      DataTable table = new DataTable();
       using (var con = new SqlConnection(ConfigurationManager.
         ConnectionStrings["MoviesAppDB"].ConnectionString))
         using(var cmd = new SqlCommand(query, con))
        using(var da= new SqlDataAdapter(cmd))
      {
        cmd.CommandType = CommandType.Text;
        da.Fill(table);
      }
       return Request.CreateResponse(HttpStatusCode.OK, table);

    }
    }
}
