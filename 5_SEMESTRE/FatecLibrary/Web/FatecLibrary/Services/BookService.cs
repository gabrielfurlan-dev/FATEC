using System.Text;
using System.Text.Json;
using FatecLibrary.Models.Entities;
using FatecLibrary.Services.Interfaces;

namespace FatecLibrary.Services
{

    public class BookService : IBookService
    {
        readonly IHttpClientFactory _clientFactory;
        readonly JsonSerializerOptions _options;
        const string API_ENDPOINT = "/api/book";
        BookViewModel _bookVM;
        IEnumerable<BookViewModel> bookViewModel;

        public BookService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
            _options = new JsonSerializerOptions { PropertyNameCaseInsensitive = false };
        }

        public async Task<IEnumerable<BookViewModel>> GetAllBooks()
        {
            var client = _clientFactory.CreateClient("BookAPI");
            using (var response = await client.GetAsync(API_ENDPOINT))
            {
                if (response.IsSuccessStatusCode)
                {
                    var apiResponse = await response.Content.ReadAsStreamAsync();
                    bookViewModel = await JsonSerializer.DeserializeAsync<IEnumerable<BookViewModel>>(apiResponse, _options);
                }
                else
                    return null;
            }
            return bookViewModel;
        }

        public async Task<BookViewModel> FindBookById(int id)
        {
            var client = _clientFactory.CreateClient("BookAPI");
            using (var response = await client.GetAsync(API_ENDPOINT + id))
            {
                if (response.IsSuccessStatusCode && response.Content != null)
                {
                    var apiResponse = await response.Content.ReadAsStreamAsync();
                    _bookVM = await JsonSerializer.DeserializeAsync<BookViewModel>(apiResponse, _options);
                }
                else
                    return null;
            }
            return _bookVM;
        }

        public async Task<BookViewModel> CreateBook(BookViewModel bookVM)
        {
            var client = _clientFactory.CreateClient("BookAPI");

            StringContent content = new StringContent(JsonSerializer.Serialize(bookVM), Encoding.UTF8, "application/json");

            using (var response = await client.PostAsync(API_ENDPOINT, content))
            {
                if (response.IsSuccessStatusCode)
                {
                    var apiResponse = await response.Content.ReadAsStreamAsync();
                    _bookVM = await JsonSerializer.DeserializeAsync<BookViewModel>(apiResponse, _options);
                }
                else
                    return null;
            }
            return _bookVM;
        }

        public async Task<BookViewModel> UpdateBook(BookViewModel bookVM)
        {
            var client = _clientFactory.CreateClient("BookAPI");
            BookViewModel bookUpdate = new BookViewModel();

            using (var response = await client.PutAsJsonAsync(API_ENDPOINT, bookUpdate))
            {
                if (response.IsSuccessStatusCode && response.Content != null)
                {
                    var apiResponse = await response.Content.ReadAsStreamAsync();
                    _bookVM = await JsonSerializer.DeserializeAsync<BookViewModel>(apiResponse, _options);
                }
                else
                    return null;
            }
            return _bookVM;
        }

        public async Task<bool> DeleteBookById(int id)
        {
            var client = _clientFactory.CreateClient("BookAPI");

            using (var response = await client.DeleteAsync(API_ENDPOINT + id))
            {
                if (response.IsSuccessStatusCode) return true;
            }
            return false;
        }
    }
}