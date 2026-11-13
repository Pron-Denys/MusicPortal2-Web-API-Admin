using Microsoft.AspNetCore.Mvc;
using MusicPortal.BLL.DTO;
using MusicPortal.BLL.Interfaces;

namespace MusicPortal_Web_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MusicController(IMusicService musicService, IGenreService genreService, ISongwriterService songwriterService) : Controller
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MusicDTO>>> GetMusicsList()
        {
            var musics = await musicService.GetIncludeToListMusics();
            return musics.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<MusicDTO> GetMusic(int id)
        {
            var music = musicService.GetMusicFirstOrDefault(id);
            if (music == null) return NotFound();
            return music;
        }

        [HttpPost]
        public IActionResult PostMusic(MusicDTO music)
        {
            var genre = genreService.GetGenreFirhstOrDefault(music.Genre!);
            var songwriter = songwriterService.GetSongwriter(music.Songwriter!);
            if (genre == null || songwriter == null) return NotFound();
            musicService.AddMusic(music);
            MusicDTO model = musicService.GetMusicFirstOrDefault(music.Name!);
            return CreatedAtAction(nameof(GetMusic), new { id = model.Id }, model);
        }

        [HttpPut("{id}")]
        public IActionResult PutMusic(int id, MusicDTO music)
        {
            if (id != music.Id) return BadRequest();
            var genre = genreService.GetGenreFirhstOrDefault(music.Genre!);
            var songwriter = songwriterService.GetSongwriter(music.Songwriter!);
            if (genre == null || songwriter == null) return NotFound();
            musicService.UpdateMusic(music);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMusic(int id)
        {
            MusicDTO music = musicService.GetMusicFirstOrDefault(id);
            if (music == null) return NotFound();
            musicService.RemoveMusic(music);
            return NoContent();
        }
    }
}
