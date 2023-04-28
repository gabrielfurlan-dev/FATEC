using FatecLibrary.BookAPI.Contexts;
using FatecLibrary.BookAPI.Models.Entities;
using FatecLibrary.BookAPI.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FatecLibrary.BookAPI.Repositories.Entities
{
    public class BookRepository : IBookRepository
    {
        private readonly AppDbContext _dbContext;

        public BookRepository(AppDbContext dbContext) 
            => _dbContext = dbContext;

        public async Task<Book> Create(Book book)
        {
            _dbContext.Books.Add(book);
            await _dbContext.SaveChangesAsync();
            return book;
        }

        public async Task<Book> Delete(int id)
        {
            var book = await _dbContext.Books.FindAsync(id);
            if (book == null)
                return null;

            _dbContext.Books.Remove(book);
            await _dbContext.SaveChangesAsync();
            return book;
        }

        public async Task<IEnumerable<Book>> GetAll() 
            => await _dbContext.Books.ToListAsync();

        public async Task<Book> GetById(int id) 
            => await _dbContext.Books.FindAsync(id);

        public async Task<Book> Update(Book book)
        {
            _dbContext.Entry(book).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return book;
        }
    }
}