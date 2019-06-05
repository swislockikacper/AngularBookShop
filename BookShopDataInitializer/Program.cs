using BookShopDataInitializer.Services;

namespace BookShopDataInitializer
{
    class Program
    {
        static void Main(string[] args)
        {
            var amazonService = new AmazonService();
            amazonService.CreateData().Wait();
        }
    }
}
