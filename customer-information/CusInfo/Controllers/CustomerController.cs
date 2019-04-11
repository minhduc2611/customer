using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using CusInfo.Models;

namespace CusInfo.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CusController : ControllerBase // interface 
    {
        private readonly CustomerContext _context; //model 

        public CusController(CustomerContext context)
        {
            _context = context; // set model 

            if (_context.Customers.Count() == 0)
            {
                // rut gon code 
                // database ntn ? 
                _context.Customers.Add(new CustomersInfo {
                    Name = "Mccoy Gross",
                    Gender = "male",
                    Email= "mccoygross@daisu.com",
                });
            _context.Customers.Add(new CustomersInfo
            {
                Name = "Sellers Horton",
                Gender = "male",
                Email = "sellershorton@spacewax.com",
            });
            _context.Customers.Add(new CustomersInfo
            {
                Name = "Anthony Mossie",
                Gender = "male",
                Email = "XCcasdadadqdqwd@daisu.com",
            });

            _context.SaveChanges();
            }
        }

        // create 

        [HttpPost]
        public IActionResult Create(CustomersInfo item)
        {
            _context.Customers.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetTodo", new { id = item.Id }, item);
        }

        //get 

        [HttpGet]
        public ActionResult<List<CustomersInfo>> GetAll()
        {
            return _context.Customers.ToList();
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public ActionResult<CustomersInfo> GetById(long id)
        {
            var item = _context.Customers.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        // update 

        [HttpPut("{id}")]
        public IActionResult Update(long id, CustomersInfo item)
        {
            var todo = _context.Customers.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            todo.IsActive = item.IsActive;
            todo.Name = item.Name;

            _context.Customers.Update(todo);
            _context.SaveChanges();
            return NoContent();
        }

        //delete

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var todo = _context.Customers.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Customers.Remove(todo);
            _context.SaveChanges();
            return NoContent();
        }
    }



}
