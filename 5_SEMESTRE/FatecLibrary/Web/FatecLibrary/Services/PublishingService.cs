using FatecLibrary.Models.Entities;

namespace FatecLibrary.Services.Interfaces
{
    public class PublishingService : IPublishingService
    {
        public Task<PublishingViewModel> CreatePublishing(PublishingViewModel publishingVM)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeletePublishingById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<PublishingViewModel> FindPublishingById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<PublishingViewModel>> GetAllPublishing()
        {
            throw new NotImplementedException();
        }

        public Task<PublishingViewModel> UpdatePublishing(PublishingViewModel publishingVM)
        {
            throw new NotImplementedException();
        }
    }
}