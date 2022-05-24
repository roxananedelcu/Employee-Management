using EmployeeManagement.Domain;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> _employees = new List<Employee> 
        {
            new Employee
            {
                Id = Guid.NewGuid(),
                FirstName = "First name",
                LastName = "Last name",
                Age = 10,
                DateOfBirth = DateTime.Now.AddYears(-10),
                Company = "OWL",
                IsDirector = false
            },
            new Employee
            {
                Id = Guid.NewGuid(),
                FirstName = "First name 2",
                LastName = "Last name 2",
                Age = 20,
                DateOfBirth = DateTime.Now.AddYears(-20),
                Company = "OWL 2",
                IsDirector = true
            }

        };

        public EmployeeController()
        {
        }

        [HttpGet]
        [Route("employees")]
        public IActionResult GetEmployees()
        {
            return Ok(_employees);
        }

        [HttpGet]
        public IActionResult GetEmployee([FromQuery]Guid employeeId)
        {
            var employee = _employees.FirstOrDefault(e => e.Id == employeeId);

            if (employee == null)
            {
                return NotFound("Employee with given id could not be found");
            }
            else
            {
                return Ok(employee);
            }
        }
    }
}
