using System;
using System.Collections.Generic;
using System.Text;

namespace MusicPortal.DAT.EF
{
    using Microsoft.EntityFrameworkCore;
    using MusicPortal.DAL.Entities;
    using MusicPortal.DAT.Models;
    public class MusicPortalContext : DbContext
    {
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Music> Musics { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Songwriter> Songwriters { get; set; }

        public MusicPortalContext(DbContextOptions<MusicPortalContext> options)
           : base(options)
        {
            if (Database.EnsureCreated())
            {
                Genre genre_1 = new Genre { Poster = "https://img.magnific.com/premium-vector/pop-music-vintage-3d-vector-lettering-retro-bold-font-typeface-pop-art-stylized-text-old-school-style-letters-numbers-symbols-elements-pack-90s-80s-poster-banner-pine-color-background_106317-21305.jpg?semt=ais_hybrid&w=740&q=80", Name = "Поп-музика" };
                Genre genre_2 = new Genre { Poster = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwg91BClA2mWjGM1w0xZXBrnNYpIdg7fAjAIa1fM6TCs6nfZwONlEEqFIL&s=10", Name = "Хіп-Хоп та Реп" };
                Genres?.Add(genre_1);
                Genres?.Add(genre_2);
                Songwriter songwriter1 = new Songwriter { Name = "Dua Lipa", Photo = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" };
                Songwriter songwriter2 = new Songwriter { Name = "Ed Sheeran", Photo = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" };
                Songwriter songwriter3 = new Songwriter { Name = "Post Malone", Photo = "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80" };
                Songwriter songwriter4 = new Songwriter { Name = "Harry Styles", Photo = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80" };
                Users?.Add(new User { Login = "petrenko24@gmail.com", Name = "Іван", Surname = "Петренко", Password = "ivan245", Salt = " ", Year = 24, IsActivated = true, IsAdmin = false });
                Users?.Add(new User { Login = "ivanenko30@gmail.com", Name = "Петро", Surname = "Іваненко", Password = "petro30", Salt = " ", Year = 30, IsActivated = false, IsAdmin = true });
                Users?.Add(new User { Login = "stepanenko22@gmail.com", Name = "Роман", Surname = "Степаненко", Password = "stepan30", Salt = " ", Year = 22, IsActivated = false, IsAdmin = false });
                Musics?.Add(new Music { Name = "Blinding Lights", Year = 2025, Songwriter = songwriter1, Audio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", Poster = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=150&auto=format&fit=crop&q=80", Genre = genre_1 });
                Musics?.Add(new Music { Name = "Levitating", Year = 2024, Songwriter = songwriter2, Audio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", Poster = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80", Genre = genre_2 });
                Musics?.Add(new Music { Name = "Shape of You", Year = 2023, Songwriter = songwriter3, Audio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", Poster = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80", Genre = genre_1 });
                Musics?.Add(new Music { Name = "Circles", Year = 2025, Songwriter = songwriter4, Audio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", Poster = "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=150&auto=format&fit=crop&q=80", Genre = genre_2 });
                SaveChanges();
            }
        }
    }
}
