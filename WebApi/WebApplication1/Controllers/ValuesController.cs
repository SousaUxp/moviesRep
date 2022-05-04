using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public HttpResponseMessage Get()
        {
            var value = new { key1 = "v1", key2 = "v2" };
            return Request.CreateResponse(HttpStatusCode.OK, value);
        }

        // GET api/values/5
        public string Get(string id)
        {
            return id;
        }

        // POST api/values
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
