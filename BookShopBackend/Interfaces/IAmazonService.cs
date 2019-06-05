using System.Collections.Generic;
using System.Threading.Tasks;
using BookShopBackend.DTOs;

namespace BookShopBackend.Interfaces
{
    public interface IAmazonService
    {
        Task<IEnumerable<BookDTO>> GetBooks();
        Task<IEnumerable<BookDTO>> GetBooksByIds(string[] ids);
    }
}