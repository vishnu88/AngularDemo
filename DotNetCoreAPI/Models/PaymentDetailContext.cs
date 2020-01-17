using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreAPI.Models
{
   // https://www.youtube.com/watch?v=fom80TujpYQ
    public class PaymentDetailContext :DbContext 
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options):base(options)
        {
                
        }

         public DbSet<PaymentDetail> paymentDetails { get; set; }
    }
}
