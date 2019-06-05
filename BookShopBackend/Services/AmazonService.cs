using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;
using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using BookShopBackend.Constants;
using BookShopBackend.DTOs;
using BookShopBackend.Interfaces;
using BookShopBackend.Models;

namespace BookShopBackend.Services
{
    public class AmazonService : Interfaces.IAmazonService
    {
        private readonly AmazonDynamoDBClient client;
        private readonly DynamoDBContext context;

        public AmazonService()
        {
            var credentials = new BasicAWSCredentials(Keys.AccessKey, Keys.SecretKey);
            client = new AmazonDynamoDBClient(credentials, RegionEndpoint.USEast2);
            context = new DynamoDBContext(client);
        }

        public async Task<IEnumerable<BookDTO>> GetBooks()
        {
            var books = await context.ScanAsync<Book>(new List<ScanCondition>()).GetRemainingAsync();

            var booksDtos = books.Select(b => new BookDTO
            {
                Id = b.Id,
                Author = b.Author,
                NumberOfPages = b.NumberOfPages,
                Price = b.Price,
                Title = b.Title,
                FileName = b.FileName
            })
            .ToList();

            foreach (var book in booksDtos)
            {
                book.Photo = await GetPhoto(book.FileName);
            }
            return booksDtos;
        }

        public async Task<IEnumerable<BookDTO>> GetBooksByIds(string[] ids)
        {
            var books = new List<Book>();

            foreach (var id in ids)
            {
                books.Add(await GetBookById(id));
            }
            
            var booksDtos = books.Select(b => new BookDTO
            {
                Id = b.Id,
                Author = b.Author,
                NumberOfPages = b.NumberOfPages,
                Price = b.Price,
                Title = b.Title,
                FileName = b.FileName
            })
            .ToList();

            foreach (var book in booksDtos)
            {
                book.Photo = await GetPhoto(book.FileName);
            }

            return booksDtos;
        }

        private async Task<Book> GetBookById(string id) 
        {
            var query = context.ScanAsync<Book>
            (
                new[]
                {
                    new ScanCondition
                    (
                        nameof(Book.Id),
                        ScanOperator.Equal,
                        id
                    )
                }
            );

            var result = await query.GetRemainingAsync();

            return result.FirstOrDefault();
        }

        private async Task<byte[]> GetPhoto(string fileName)
        {
            using (var client = new AmazonS3Client(Keys.AccessKey, Keys.SecretKey, RegionEndpoint.USEast2))
            {

                var request = new GetObjectRequest
                {
                    BucketName = Keys.BucketName,
                    Key = fileName
                };

                using (var response = await client.GetObjectAsync(request))
                using (var responseStream = response.ResponseStream)
                {
                    var memoryStream = new MemoryStream();
                    await responseStream.CopyToAsync(memoryStream);

                    memoryStream.Position = 0;

                    return memoryStream.ToArray();
                }
            }
        }
    }
}