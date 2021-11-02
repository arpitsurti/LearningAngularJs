using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;

namespace LearningAngularJS
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {

        [WebMethod]
        public void getAllVendors()
        {
            List<clsVendors> lstVendors = new List<clsVendors>();
            JavaScriptSerializer srlzr = new JavaScriptSerializer();
            string conn = ConfigurationManager.ConnectionStrings["DBConn"].ConnectionString;
            using (SqlConnection con = new SqlConnection(conn))
            {
                SqlCommand cmd = new SqlCommand("select * from tblPayments", con);
                con.Open();
                SqlDataReader sdr = cmd.ExecuteReader();
                while (sdr.Read())
                {
                    clsVendors obj = new clsVendors();
                    obj.VendorName = Convert.ToString(sdr["VendorName"]);
                    lstVendors.Add(obj);
                }
                Context.Response.Write(srlzr.Serialize(lstVendors));
            }
        }
    }
}
