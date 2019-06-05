using System;
using Amazon.DynamoDBv2.DataModel;

namespace BookShopBackend.Models
{
    [DynamoDBTable("Book")]
    public class Book : IEquatable<Book>
    {
        [DynamoDBHashKey]
        public string Id { get; set; }
        [DynamoDBRangeKey]
        public string Author { get; set; }

        public string Title { get; set; }
        public double Price { get; set; }
        public int NumberOfPages { get; set; }
        public string FileName { get; set; }
        public string BucketName { get; set; }

        public Book()
        {
        }

        public bool Equals(Book other)
        {
            if (ReferenceEquals(null, other))
                return false;

            if (ReferenceEquals(this, other))
                return true;

            return Id == other.Id && string.Equals(Title, other.Title) && string.Equals(Title, other.Title);
        }
    }
}