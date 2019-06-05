using System;
using System.Collections.Generic;
using BookShopDataInitializer.Models;

namespace BookShopDataInitializer.Data
{
    public static class Books
    {
        public static List<Book> List = new List<Book>()
        {
            new Book(Guid.NewGuid().ToString(), "Potop", "Henryk Sienkiewicz", 30, 600, "potop.jpg"),
            new Book(Guid.NewGuid().ToString(), "Ogniem i Mieczem", "Henryk Sienkiewicz", 40, 500, "oim.jpg"),
            new Book(Guid.NewGuid().ToString(), "Sachem", "Henryk Sienkiewicz", 30, 100, "sachem.jpg"),
            new Book(Guid.NewGuid().ToString(), "Quo Vadis", "Henryk Sienkiewicz", 50, 800, "qv.jpg"),
            new Book(Guid.NewGuid().ToString(), "Pan Wołodyjowski", "Henryk Sienkiewicz", 20, 700, "pw.jpg"),
            new Book(Guid.NewGuid().ToString(), "W Pustyni i w Puszczy", "Henryk Sienkiewicz", 30, 200, "wpiwp.jpeg"),
            new Book(Guid.NewGuid().ToString(), "Janko Muzykant", "Henryk Sienkiewicz", 30, 110, "jm.jpg"),
            new Book(Guid.NewGuid().ToString(), "Latarnik", "Henryk Sienkiewicz", 30, 60, "latarnik.jpg"),
            new Book(Guid.NewGuid().ToString(), "Gra o Tron", "George R.R. Martin", 130, 1600, "got.jpg"),
            new Book(Guid.NewGuid().ToString(), "Starcie Królów", "George R.R. Martin", 130, 1600, "sk.jpg"),
            new Book(Guid.NewGuid().ToString(), "Nawałnica Mieczy", "George R.R. Martin", 130, 1200, "nm.jpg"),
            new Book(Guid.NewGuid().ToString(), "Taniec ze Smokami", "George R.R. Martin", 230, 1500, "tzs.jpg"),
            new Book(Guid.NewGuid().ToString(), "Krew Elfów", "Andrzej Sapkowski", 50, 500, "ke.jpg"),
            new Book(Guid.NewGuid().ToString(), "Czas Pogardy", "Andrzej Sapkowski", 50, 300, "cp.jpg"),
            new Book(Guid.NewGuid().ToString(), "Chrzest Ognia", "Andrzej Sapkowski", 50, 400, "co.jpg"),
            new Book(Guid.NewGuid().ToString(), "Wieża Jaskółki", "Andrzej Sapkowski", 50, 200, "wj.jpg"),
            new Book(Guid.NewGuid().ToString(), "Pani Jeziora", "Andrzej Sapkowski", 50, 300, "pj.jpg")
        };
    }
}