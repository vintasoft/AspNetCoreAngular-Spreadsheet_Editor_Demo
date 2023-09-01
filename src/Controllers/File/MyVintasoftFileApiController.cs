using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;

using Vintasoft.Data;
using Vintasoft.Imaging.AspNetCore.ApiControllers;
using Vintasoft.Imaging.Web.Services;


namespace AspNetCoreAngularSpreadsheetEditorDemo.Controllers
{
    /// <summary>
    /// A Web API controller that handles HTTP requests from clients and
    /// allows to manipulate PDF documents on server.
    /// </summary>
    public class MyVintasoftFileApiController : VintasoftFileApiController
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftFileApiController"/> class.
        /// </summary>
        /// <param name="hostingEnvironment">Information about the web hosting environment an application is running in.</param>
        public MyVintasoftFileApiController(IWebHostEnvironment hostingEnvironment)
            : base(hostingEnvironment)
        {
        }



        /// <summary>
        /// Creates the <see cref="MyVintasoftFileWebService"/>
        /// that handles HTTP requests from clients and allows to manipulate files on a server.
        /// </summary>
        /// <returns>The <see cref="MyVintasoftFileWebService"/>
        /// that handles HTTP requests from clients and allows to manipulate files on a server.</returns>
        protected override VintasoftFileWebService CreateWebService(string sessionId)
        {
            return new MyVintasoftFileWebService(CreateSessionDataStorage(sessionId), CreateSerializedDocumentsDataStorage(sessionId));
        }

    }
}