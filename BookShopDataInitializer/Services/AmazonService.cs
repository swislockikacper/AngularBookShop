using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.Model;
using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using Amazon.S3.Util;
using BookShopDataInitializer.Constants;
using BookShopDataInitializer.Data;
using BookShopDataInitializer.Models;

namespace BookShopDataInitializer.Services
{
    public class AmazonService
    {
        private readonly AmazonDynamoDBClient client;
        private readonly DynamoDBContext context;

        public AmazonService()
        {
            var credentials = new BasicAWSCredentials(Keys.AccessKey, Keys.SecretKey);
            client = new AmazonDynamoDBClient(credentials, RegionEndpoint.USEast2);
            context = new DynamoDBContext(client);
        }

        public async Task CreateData()
        {
            await CreateTable();
            await CreateBucket();

            foreach (var book in Books.List)
            {
                await CreateBook(book);
            }

            foreach (var fileName in Photos.List)
            {
                await AddPhoto(fileName);
            }
        }

        private async Task CreateTable()
        {
            var currentTables = await client.ListTablesAsync();

            if (!currentTables.TableNames.Contains("Book"))
            {
                var request = new CreateTableRequest
                {
                    AttributeDefinitions = new List<AttributeDefinition>
                {
                    new AttributeDefinition
                    {
                        AttributeName = "Id",
                        AttributeType = "S"
                    },
                    new AttributeDefinition
                    {
                        AttributeName = "Author",
                        AttributeType = "S"
                    }
                },
                    KeySchema = new List<KeySchemaElement>
                {
                    new KeySchemaElement
                    {
                        AttributeName = "Id",
                        KeyType = "HASH"
                    },
                    new KeySchemaElement
                    {
                        AttributeName = "Author",
                        KeyType = "Range"
                    }
                },
                    ProvisionedThroughput = new ProvisionedThroughput
                    {
                        ReadCapacityUnits = 15,
                        WriteCapacityUnits = 15
                    },
                    TableName = "Book"
                };

                await client.CreateTableAsync(request);

                var status = TableStatus.CREATING;

                do
                {
                    var response = await client.DescribeTableAsync(new DescribeTableRequest
                    {
                        TableName = "Book"
                    });

                    status = response.Table.TableStatus;

                } while (status != TableStatus.ACTIVE);
            }
        }

        private async Task CreateBook(Book book) => await context.SaveAsync(book);

        private async Task CreateBucket()
        {
            using (var client = new AmazonS3Client(Keys.AccessKey, Keys.SecretKey, RegionEndpoint.USEast2))
            {
                if (await AmazonS3Util.DoesS3BucketExistAsync(client, Keys.BucketName) == false)
                {
                    var putBucketRequest = new PutBucketRequest
                    {
                        BucketName = Keys.BucketName,
                        UseClientRegion = true
                    };

                    await client.PutBucketAsync(putBucketRequest);
                }
            }
        }

        private async Task AddPhoto(string fileName)
        {
            using (var client = new AmazonS3Client(Keys.AccessKey, Keys.SecretKey, RegionEndpoint.USEast2))
            {
                var fileTransferUtility = new TransferUtility(client);
                var path = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location.Substring(0, Assembly.GetEntryAssembly().Location.IndexOf("bin\\")));

                await fileTransferUtility.UploadAsync($"{path}\\Photos\\{fileName}", Keys.BucketName, fileName);
            }
        }
    }
}