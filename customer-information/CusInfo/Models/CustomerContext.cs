using System;
using Microsoft.EntityFrameworkCore;
namespace CusInfo.Models
{
    public class CustomerContext: DbContext // interface 
    {
        public CustomerContext(DbContextOptions<CustomerContext> options)
            : base(options) // lam gi ?
        {
        }

        public DbSet<CustomersInfo> Customers { get; set; } 

    }
}
