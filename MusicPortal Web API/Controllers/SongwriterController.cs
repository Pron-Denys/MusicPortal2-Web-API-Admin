using Microsoft.AspNetCore.Mvc;
using MusicPortal.BLL.DTO;
using MusicPortal.BLL.Interfaces;

namespace MusicPortal_Web_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongwriterController(ISongwriterService songwriterService) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SongwriterDTO>>> GetListSongwriters()
        {
            IEnumerable<SongwriterDTO> songwriters = await songwriterService.GetListSongwritersAsync();
            return songwriters.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<SongwriterDTO> GetSongwriter(int id)
        {
            var songwriter = songwriterService.GetSongwriter(id);
            if (songwriter == null) return NotFound();
            return songwriter;
        }

        [HttpPost]
        public IActionResult PostSongwriter(SongwriterDTO songwriter)
        {
            songwriterService.AddSongwriter(songwriter);
            SongwriterDTO model = songwriterService.GetSongwriter(songwriter.Name!);
            return CreatedAtAction(nameof(GetSongwriter), new { id = model.Id }, model);
        }

        [HttpPut("{id}")]
        public IActionResult PutSongwriter(int id, SongwriterDTO songwriter)
        {
            if (id != songwriter.Id) return BadRequest();
            songwriterService.UpdateSongwriter(songwriter);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSongwriter(int id)
        {
            SongwriterDTO songwriter = songwriterService.GetSongwriter(id);
            if (songwriter == null) return NotFound();
            songwriterService.RemoveSongwriter(songwriter);
            return NoContent();
        }
    }
}
