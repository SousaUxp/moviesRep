using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
  public class Movies
  {
    public int MovieId { get; set; }
    public string MovieName { get; set; }
    public int Ranking { get; set; }
    public string tags { get; set; }
    public string info { get; set; }
  }
}
