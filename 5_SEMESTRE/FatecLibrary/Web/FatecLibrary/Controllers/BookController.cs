using FatecLibrary.Models.Entities;
using FatecLibrary.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FatecLibrary.Controllers
{
    public class BookController : Controller
    {
        readonly IBookService _bookService;
        readonly IPublishingService _publishingService;

        public BookController(IBookService bookService, IPublishingService publishingService)
        {
            _bookService = bookService;
            _publishingService = publishingService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookViewModel>>> Index()
        {
            var result = await _publishingService.GetAllPublishing();
            if (result is null) return View("Error");
            return View(result);
        }

        [HttpGet]
        public async Task<ActionResult<BookViewModel>> DeleteBook(int id)
        {
            var result = await _bookService.FindBookById(id);
            if (result is null) return View("Error");
            {
                return View("Error");
            }
            return View(result);

        }
    }
}