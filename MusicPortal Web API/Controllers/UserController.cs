using Microsoft.AspNetCore.Mvc;
using MusicPortal.BLL.DTO;
using MusicPortal.BLL.Interfaces;

namespace MusicPortal_Web_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController(IUserService userService, IPasswordHashing hash) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<UserDTO>>> GetListUsers()
        {
            IEnumerable<UserDTO> users = await userService.GetUserListAsync();
            return users.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<UserDTO> GetUser(int id)
        {
            var user = userService.GetUserFirstOrDefault(id);
            if (user == null) return NotFound();
            return user;
        }

        [HttpPost]
        public IActionResult PostUser(UserDTO user)
        {
            PasswordAndSaltDTO passwordAndSalt = hash.Hashing(user.Password!);
            user.Salt = passwordAndSalt.Salt;
            user.Password = passwordAndSalt.Password;
            userService.AddUser(user);
            UserDTO model = userService.GetUserFirstOrDefault(user.Login!);
            return CreatedAtAction(nameof(GetUser), new { id = model.Id }, model);
        }

        [HttpPut("{id}")]
        public IActionResult PutUser(int id, UserDTO user)
        {
            if (user.Id != id) return BadRequest();
            UserDTO model = userService.GetUserFirstOrDefault(user.Id);
            if (model == null) return NotFound();
            user.Salt = model.Salt;
            user.Password = model.Password;
            userService.UpdateUser(user);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            UserDTO user = userService.GetUserFirstOrDefault(id);
            if (user == null) return NotFound();
            userService.RemoveUser(user);
            return NoContent();
        }
    }
}
