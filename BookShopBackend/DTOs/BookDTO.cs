namespace BookShopBackend.DTOs
{
    public class BookDTO
    {
        public string Id { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
        public int NumberOfPages { get; set; }
        public byte[] Photo { get; set; }
        public string FileName { get; set; }
    }
}