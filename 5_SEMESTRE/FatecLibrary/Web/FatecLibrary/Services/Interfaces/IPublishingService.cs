using FatecLibrary.Models.Entities;

namespace FatecLibrary.Services.Interfaces
{
    public interface IPublishingService
    {
        Task<IEnumerable<PublishingViewModel>> GetAllPublishing();
        Task<PublishingViewModel> FindPublishingById(int id);
        Task<PublishingViewModel> CreatePublishing(PublishingViewModel publishingVM);
        Task<PublishingViewModel> UpdatePublishing(PublishingViewModel publishingVM);
        Task<bool> DeletePublishingById(int id);
    }
}