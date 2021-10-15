using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context) {
            if (context.Posts.Count() == 0) {
                List<Post> seedPosts = new List<Post> {
                    new Post() {
                        Title = "First Post",
                        Body = "This is the body of my first post.",
                    },
                    new Post() {
                        Title = "Second Post",
                        Body = "This is the body of my second post.",
                    },
                    new Post() {
                        Title = "Third Post",
                        Body = "This is the body of my third post.",
                    },
                };

                context.Posts.AddRange(seedPosts);

                context.SaveChanges();
            }
        }
    }
}