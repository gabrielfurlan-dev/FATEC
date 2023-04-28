using FatecLibrary.Models.Entities;
using FatecLibrary.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FatecLibrary.Controllers
{
    public class PublishingController : Controller
    {
        readonly IPublishingService _publishingService;

        public PublishingController(IPublishingService publishingService)
            => _publishingService = publishingService;

        [HttpGet]
        async Task<ActionResult<IEnumerable<PublishingViewModel>>> Index()
        {
            var result = await _publishingService.GetAllPublishing();
            if(result is null) return View("Error");
            return View(result);
        }

        [HttpGet]
        public async Task<IActionResult> CreatePublishing()
           => View();

        [HttpGet] 
        public  async Task<IActionResult> FindById(int id){
            var result = await _publishingService.FindPublishingById(id);
            if (result is null) return View("Error");
            return View(result);
        }

        [HttpPut] 
        public async Task<IActionResult> UpdatePublishing(PublishingViewModel publishingViewModel){
            if(ModelState.IsValid)
            {
                var result = await _publishingService.UpdatePublishing(publishingViewModel);
                if(result is null) return RedirectToAction(nameof(Index));
            }
            
            else
                return BadRequest("Error");

            return View(publishingViewModel);
        }

        [HttpGet]
        public async Task<ActionResult<PublishingViewModel>> DeletePublishing(int id)
        {
            var result = await _publishingService.FindPublishingById(id);
            if(result is null) return View("Error");
            return View(result);
        }

        [HttpPost(), ActionName("DeletePublishing")]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            var result = await _publishingService.DeletePublishingById(id);
            if (!result) return View("Error");
            return RedirectToAction("Index");
        }
    }
}