namespace EmployeeManagement.Domain
{
    public class Employee
    {
        public Guid Id { get; set; }
        public int Age { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Company { get; set; }
        public bool IsDirector { get; set; }
    }
}
