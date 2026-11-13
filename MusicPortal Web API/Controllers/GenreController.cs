using Microsoft.AspNetCore.Mvc;
using MusicPortal.BLL.DTO;
using MusicPortal.BLL.Interfaces;

namespace MusicPortal_Web_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GenreController(IGenreService genreService) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<GenreDTO>>> GetListGenres()
        {
            IEnumerable<GenreDTO> genres = await genreService.GetListGenresAsync();
            return genres.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<GenreDTO> GetGenre(int id)
        {
            var genre = genreService.GetGenreFirhstOrDefault(id);
            if (genre == null) return NotFound();
            return genre;
        }

        [HttpPost]
        public IActionResult PostGenre(GenreDTO genre)
        {
            genreService.AddGenre(genre);
            GenreDTO model = genreService.GetGenreFirhstOrDefault(genre.Name!);
            return CreatedAtAction(nameof(GetGenre), new { id = model.Id }, model);
        }

        [HttpPut("{id}")]
        public IActionResult PutGenre(int id, GenreDTO genre)
        {
            if (id != genre.Id) return BadRequest();
            genreService.UpdateGenre(genre);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteGenre(int id)
        {
            var genre = genreService.GetGenreFirhstOrDefault(id);
            if (genre == null) return NotFound();
            genreService.RemoveGenre(genre);
            return NoContent();
        }
    }
}
