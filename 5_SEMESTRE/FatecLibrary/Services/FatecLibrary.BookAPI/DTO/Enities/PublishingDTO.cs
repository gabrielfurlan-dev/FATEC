using System.ComponentModel.DataAnnotations;
using FatecLibrary.BookAPI.Models.Entities;

namespace FatecLibrary.BookAPI.DTO.Enities
{
    public class PublishingDTO
    {
        [Required(ErrorMessage = "The Name is required")]
        [MinLength(3)]
        [MaxLength(100)]
         public string? Name { get; set; }
        public string? Acronym { get; set; }
        public ICollection<Book?> Books { get; set; }
    }
}