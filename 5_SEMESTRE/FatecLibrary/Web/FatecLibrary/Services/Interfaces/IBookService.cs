using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FatecLibrary.Models.Entities;

namespace FatecLibrary.Services.Interfaces
{
    public interface IBookService
    {
        Task<IEnumerable<BookViewModel>> GetAllBooks();
        Task<BookViewModel> FindBookById(int id);
        Task<BookViewModel> CreateBook(BookViewModel bookVM);
        Task<BookViewModel> UpdateBook(BookViewModel bookVM);
        Task<bool> DeleteBookById(int id);
    }
}