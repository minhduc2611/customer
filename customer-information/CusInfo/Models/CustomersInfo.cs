using System;
namespace CusInfo.Models
{
    public class CustomersInfo
    {
        public long Id { get; set; }

        public string Name { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; }
    }
}
