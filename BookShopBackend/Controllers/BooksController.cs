using System.Collections.Generic;
using System.Threading.Tasks;
using BookShopBackend.DTOs;
using BookShopBackend.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BookShopBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IAmazonService amazonService;

        public BooksController(IAmazonService amazonService) =>
            this.amazonService = amazonService;

        [HttpGet]
        public async Task<IEnumerable<BookDTO>> Books() =>
            await amazonService.GetBooks();

        [HttpGet("ByIds")]
        public async Task<IEnumerable<BookDTO>> BooksByIds([FromQuery(Name = "ids")] string[] ids) =>
            await amazonService.GetBooksByIds(ids);
    }
}
