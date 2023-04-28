namespace FatecLibrary.BookAPI.Models.Entities
{
    public class Book
    {
        public Book() 
            => Id = Guid.NewGuid().ToString();
        public Book(string tittle,
                    decimal price,
                    int publicationYear,
                    int edition,
                    string imageURL,
                    Publishing publishing,
                    int publishingId)
        {
            Id = Guid.NewGuid().ToString();
            Title = tittle;
            Price = price;
            PublicationYear = publicationYear;
            Edition = edition;
            ImageURL = imageURL;
            Publishing = publishing;
            PublishingId = publishingId;
        }
        
        public string Id { get; set; }
        public string? Title { get; set; }
        public decimal Price { get; set; }
        public int PublicationYear { get; set; }
        public int Edition { get; set; }
        public string? ImageURL { get; set; }

        public Publishing? Publishing { get; set; }
        public int PublishingId { get; set; }
    }
}