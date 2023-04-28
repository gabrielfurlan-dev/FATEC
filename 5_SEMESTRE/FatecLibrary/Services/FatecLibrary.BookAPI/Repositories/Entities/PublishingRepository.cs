using FatecLibrary.BookAPI.Contexts;
using FatecLibrary.BookAPI.Models.Entities;
using FatecLibrary.BookAPI.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FatecLibrary.BookAPI.Repositories.Entities
{
    public class PublishingRepository : IPublishingRepository
    {
        private readonly AppDbContext _dbContext;

        public PublishingRepository(AppDbContext dbContext)
            => _dbContext = dbContext;

        public async Task<Publishing> Create(Publishing publishing)
        {
            _dbContext.Publishers.Add(publishing);
            await _dbContext.SaveChangesAsync();
            return publishing;
        }

        public async Task<Publishing> Delete(int id)
        {
            var publishing = await _dbContext.Publishers.FindAsync(id);
            if (publishing != null)
            {
                _dbContext.Publishers.Remove(publishing);
                await _dbContext.SaveChangesAsync();
            }
            return publishing;
        }

        public async Task<IEnumerable<Publishing>> GetAll()
            =>  await _dbContext.Publishers.ToListAsync();
        
        public async Task<Publishing> GetById(int id)
            => await _dbContext.Publishers.FindAsync(id);

        public async Task<IEnumerable<Publishing>> GetPublisherBook()
        => await _dbContext.Publishers
                                   .Include(p => p.Books)
                                   .ToListAsync();

        public async Task<Publishing> Update(Publishing publishing)
        {
            _dbContext.Publishers.Update(publishing);
            await _dbContext.SaveChangesAsync();
            return publishing;
        }
    }
}