namespace FatecLibrary.BookAPI.Models.Entities
{
    public class Publishing
    {
        public Publishing(){}
        
        public Publishing(int id,
                          string? name,
                          string? acronym,
                          ICollection<Book?> books)
        {
            Id = id;
            Name = name;
            Acronym = acronym;
            Books = books;
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Acronym { get; set; }
        public ICollection<Book> Books { get; set; }
    }
}