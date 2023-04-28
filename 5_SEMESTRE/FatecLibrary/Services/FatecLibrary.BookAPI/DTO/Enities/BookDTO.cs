using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FatecLibrary.BookAPI.Models.Entities;

namespace FatecLibrary.BookAPI.DTO.Enities
{
    public class BookDTO
    {
        public int Id { get; private set; }
        
        [Required(ErrorMessage = "The title is required")]
        [MinLength(3)]
        [MaxLength(100)]
        public string? Tittle { get; private set; }

        [Required(ErrorMessage = "The price is required")]
        public decimal Price { get; private set; }

        [Required(ErrorMessage = "The publication year is required")]
        public int PublicationYear { get; private set; }

        [Required(ErrorMessage = "The Edition year is required")]
        public int Edition { get; private set; }

        public string? ImageURL { get; private set; }

        [JsonIgnore]
        public PublishingDTO PublishingDTO { get; private set; }
        public int? PublishingId { get; private set; }
        public string? PublishingName { get; private set; }
    }
}