using MusicPortal.BLL.Infrastructures;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
string connection = builder.Configuration.GetConnectionString("DefaultConnection")!;
builder.Services.AddDbContextMusicPortal(connection);
builder.Services.AddUnitOfWork();
builder.Services.AddPasswordHashing();
builder.Services.AddMusicPortalProfile();
builder.Services.AddGenreService();
builder.Services.AddMusicService();
builder.Services.AddSongwriterService();
builder.Services.AddUserService();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

app.Run();
