"use strict";
const urlMusic = "https://localhost:7083/api/Music";
const urlGenre = "https://localhost:7083/api/Genre";
const urlSongwriter = "https://localhost:7083/api/Songwriter";
const urlUser = "https://localhost:7083/api/User";
async function getListMusics() {
    try {
        const response = await fetch(urlMusic);
        if (response.ok) {
            const musics = await response.json();
            const listMusics = document.getElementById("list-musics");
            listMusics.innerHTML = "";
            for (const index in musics) {
                const songItem = document.createElement("div");
                songItem.setAttribute("class", "song-item");
                const songTop = document.createElement("div");
                songTop.setAttribute("class", "song-top");
                const img = document.createElement("img");
                img.setAttribute("src", musics[index].poster);
                img.setAttribute("class", "song-img");
                songTop.appendChild(img);
                const songInfo = document.createElement("div");
                songInfo.setAttribute("class", "song-info");
                const title = document.createElement("span");
                title.setAttribute("class", "song-title");
                title.innerText = `${musics[index].name}`;
                const artist = document.createElement("span");
                artist.setAttribute("class", "song-artist");
                artist.innerText = `${musics[index].songwriter}`;
                songInfo.appendChild(title);
                songInfo.appendChild(artist);
                const itemActions = document.createElement("div");
                itemActions.setAttribute("class", "item-actions");
                const edit = document.createElement("button");
                edit.setAttribute("class", "action-btn edit");
                edit.setAttribute("title", "Редагувати");
                const iconEdit = document.createElement("i");
                iconEdit.setAttribute("class", "fa-solid fa-pen-to-square");
                iconEdit.setAttribute("data-id", musics[index].id);
                iconEdit.setAttribute("data-action", "Edit");
                edit.appendChild(iconEdit);
                const remove = document.createElement("button");
                remove.setAttribute("class", "action-btn delete");
                remove.setAttribute("title", "Видалити");
                const iconRemove = document.createElement("i");
                iconRemove.setAttribute("class", "fa-solid fa-trash-can");
                iconRemove.setAttribute("data-id", musics[index].id);
                iconRemove.setAttribute("data-action", "Remove");
                remove.appendChild(iconRemove);
                itemActions.appendChild(edit);
                itemActions.appendChild(remove);
                songTop.appendChild(songInfo);
                songTop.appendChild(itemActions);
                songItem.appendChild(songTop);
                const audio = document.createElement("audio");
                audio.setAttribute("controls", "");
                audio.setAttribute("controlsList", "nodownload");
                const source = document.createElement("source");
                source.setAttribute("src", musics[index].audio);
                source.setAttribute("type", "audio/ogg");
                audio.appendChild(source);
                songItem.appendChild(audio);
                listMusics.appendChild(songItem);
            }
        }
    } catch (e) {
        console.error();
    }
}

async function getListGenre() {
    try {
        const response = await fetch(urlGenre);
        if (response.ok) {
            const genres = await response.json();
            const listGenres = document.getElementById("list-genres");
            listGenres.innerHTML = "";
            for (const index in genres) {
                const mediaItem = document.createElement("div");
                mediaItem.setAttribute("class", "media-item");
                const img = document.createElement("img");
                img.setAttribute("src", genres[index].poster);
                img.setAttribute("class", "media-img");
                mediaItem.appendChild(img);
                const mediaDetails = document.createElement("div");
                mediaDetails.setAttribute("class", "media-details");
                const name = document.createElement("h4");
                name.innerText = genres[index].name;
                mediaDetails.appendChild(name);
                mediaItem.appendChild(mediaDetails);
                const itemActions = document.createElement("div");
                itemActions.setAttribute("class", "item-actions");
                const editBtn = document.createElement("button");
                editBtn.setAttribute("class", "action-btn edit");
                editBtn.setAttribute("title", "Редагувати");
                const iconEdit = document.createElement("i");
                iconEdit.setAttribute("class", "fa-solid fa-pen-to-square");
                iconEdit.setAttribute("data-action", "Edit");
                iconEdit.setAttribute("data-id", genres[index].id);
                editBtn.appendChild(iconEdit);
                itemActions.appendChild(editBtn);
                const removeBtn = document.createElement("button");
                removeBtn.setAttribute("class", "action-btn delete");
                removeBtn.setAttribute("title", "Видалити");
                const iconRemove = document.createElement("i");
                iconRemove.setAttribute("class", "fa-solid fa-trash-can");
                iconRemove.setAttribute("data-action", "Remove");
                iconRemove.setAttribute("data-id", genres[index].id);
                removeBtn.appendChild(iconRemove);
                itemActions.appendChild(removeBtn);
                mediaItem.appendChild(itemActions);
                listGenres.appendChild(mediaItem);
            }
        }
    } catch (e) {
        console.error();
    }
}

async function getListSongwriters() {
    try {
        const response = await fetch(urlSongwriter);
        if (response.ok) {
            const songwriters = await response.json();
            const listSongwriters = document.getElementById("list-songwriters");
            listSongwriters.innerHTML = "";
            for (const index in songwriters) {
                const mediaItem = document.createElement("div");
                mediaItem.setAttribute("class", "media-item");
                const img = document.createElement("img");
                img.setAttribute("src", songwriters[index].photo);
                img.setAttribute("class", "media-img circle");
                mediaItem.appendChild(img);
                const mediaDetails = document.createElement("div");
                mediaDetails.setAttribute("class", "media-details");
                const name = document.createElement("h4");
                name.innerText = songwriters[index].name;
                mediaDetails.appendChild(name);
                mediaItem.appendChild(mediaDetails);
                const itemActions = document.createElement("div");
                itemActions.setAttribute("class", "item-actions");
                const editBtn = document.createElement("button");
                editBtn.setAttribute("class", "action-btn edit");
                editBtn.setAttribute("title", "Редагувати");
                const iconEdit = document.createElement("i");
                iconEdit.setAttribute("class", "fa-solid fa-pen-to-square");
                iconEdit.setAttribute("data-action", "Edit");
                iconEdit.setAttribute("data-id", songwriters[index].id);
                editBtn.appendChild(iconEdit);
                const removeBtn = document.createElement("button");
                removeBtn.setAttribute("class", "action-btn delete");
                removeBtn.setAttribute("title", "Видалити");
                const iconRemove = document.createElement("i");
                iconRemove.setAttribute("class", "fa-solid fa-trash-can");
                iconRemove.setAttribute("data-action", "Remove");
                iconRemove.setAttribute("data-id", songwriters[index].id);
                removeBtn.appendChild(iconRemove);
                itemActions.appendChild(editBtn);
                itemActions.appendChild(removeBtn);
                mediaItem.appendChild(itemActions);
                listSongwriters.appendChild(mediaItem);
            }
        }
    } catch (e) {
        console.error();
    }
}

async function getListUsers() {
    try {
        const response = await fetch(urlUser);
        if (response.ok) {
            const users = await response.json();
            const listUsers = document.getElementById("list-users");
            listUsers.innerHTML = "";
            for (const index in users) {
                const mediaItem = document.createElement("div");
                mediaItem.setAttribute("class", "media-item");
                const mediaDetails = document.createElement("div");
                mediaDetails.setAttribute("class", "media-details");
                const login = document.createElement("h4");
                login.innerText = users[index].login;
                mediaDetails.appendChild(login);
                const status = document.createElement("p");
                if (users[index].isAdmin) {
                    status.innerText = "Адміністратор";
                }
                else {
                    status.innerText = (users[index].isActivated) ? "Активний" : "Не активний";
                }
                mediaDetails.appendChild(status);
                mediaItem.appendChild(mediaDetails);
                const itemActions = document.createElement("div");
                itemActions.setAttribute("class", "item-actions");
                const editBtn = document.createElement("button");
                editBtn.setAttribute("class", "action-btn edit");
                editBtn.setAttribute("title", "Редагувати");
                const iconEdit = document.createElement("i");
                iconEdit.setAttribute("class", "fa-solid fa-pen-to-square");
                iconEdit.setAttribute("data-action", "Edit");
                iconEdit.setAttribute("data-id", users[index].id);
                editBtn.appendChild(iconEdit);
                itemActions.appendChild(editBtn);
                const removeBtn = document.createElement("button");
                removeBtn.setAttribute("class", "action-btn delete");
                removeBtn.setAttribute("title", "Видалити");
                const iconRemove = document.createElement("i");
                iconRemove.setAttribute("class", "fa-solid fa-trash-can");
                iconRemove.setAttribute("data-action", "Remove");
                iconRemove.setAttribute("data-id", users[index].id);
                removeBtn.appendChild(iconRemove);
                itemActions.appendChild(removeBtn);
                mediaItem.appendChild(itemActions);
                listUsers.appendChild(mediaItem);
            }
        }
    } catch (e) {
        console.error();
    }
}

async function getLists(e) {
    await getListMusics();
    await getListGenre();
    await getListSongwriters();
    await getListUsers();
    addEvents();
}

async function clickButtonCardMusic(e) {
    if (e.target.tagName == "I") {
        const id = e.target.getAttribute("data-id");
        if (e.target.getAttribute("data-action") == "Edit") {
            await musicFormInfo(`${urlMusic}/${id}`);
        }
        else if (e.target.getAttribute("data-action") == "Remove") {
            await removeMusic(`${urlMusic}/${id}`);
        }
    }
}

async function musicFormInfo(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const music = await response.json();
            document.forms["form-music"].id.value = music.id;
            document.forms["form-music"].title.value = music.name;
            document.forms["form-music"].songwriter.value = music.songwriter;
            document.forms["form-music"].year.value = music.year;
            document.forms["form-music"].genre.value = music.genre;
            document.forms["form-music"].song_img.value = music.poster;
            document.forms["form-music"].audio_url.value = music.audio;
        }
    } catch (e) {
        console.error();
    }
}

async function removeMusic(url) {
    if (confirm("Чи дійсно ви бажаєте видалити пісню ?")) {
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });
            if (response.ok) {
                await getListMusics();
            }
        } catch (e) {
            console.error();
        }
    }
}

async function editMusic(idMusic) {
    try {
        let music = {
            id: idMusic,
            name: document.forms["form-music"].title.value,
            year: document.forms["form-music"].year.value,
            songwriter: document.forms["form-music"].songwriter.value,
            audio: document.forms["form-music"].audio_url.value,
            poster: document.forms["form-music"].song_img.value,
            genre: document.forms["form-music"].genre.value
        };
        const response = await fetch(`${urlMusic}/${idMusic}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(music)
        });
        if (response.ok) {
            document.forms["form-music"].reset();
            await getListMusics();
        }
    } catch (e) {
        console.error();
    }
}

async function addMusic() {
    try {
        let music = {
            name: document.forms["form-music"].title.value,
            year: document.forms["form-music"].year.value,
            songwriter: document.forms["form-music"].songwriter.value,
            audio: document.forms["form-music"].audio_url.value,
            poster: document.forms["form-music"].song_img.value,
            genre: document.forms["form-music"].genre.value
        };
        const response = await fetch(urlMusic, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(music)
        });
        if (response.ok) {
            const answer = await response.json();
            document.forms["form-music"].reset();
            await getListMusics();
        }
    } catch (e) {
        console.error();
    }
}

async function saveMusic(e) {
    try {
        e.preventDefault();
        if (document.forms["form-music"].id.value == "0") {
            await addMusic();
        }
        else {
            await editMusic(document.forms["form-music"].id.value);
        }

    } catch (e) {
        console.error();
    }
}

async function genreFormInfo(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const genre = await response.json();
            document.forms["form-genre"].id.value = genre.id;
            document.forms["form-genre"].genre_name.value = genre.name;
            document.forms["form-genre"].genre_img.value = genre.poster;
        }
    } catch (e) {
        console.error();
    }
}

async function removeGenre(url) {
    if (confirm("Ви дійсно бажаєте видалити цей жанр ?")) {
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });
            if (response.ok) {
                await getListGenre();
                await getListMusics();
            }
        } catch (e) {
            console.error();
        }
    }
}

async function saveGenre(e) {
    e.preventDefault();
    if (document.forms["form-genre"].id.value == "0") {
        await addGenre();
    }
    else {
        await editGenre(document.forms["form-genre"].id.value);
    }
}

async function addGenre() {
    try {
        const genre = {
            name: document.forms["form-genre"].genre_name.value,
            poster: document.forms["form-genre"].genre_img.value
        };
        const response = await fetch(urlGenre, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(genre)
        });
        if (response.ok) {
            document.forms["form-genre"].reset();
            await getListGenre();
        }
    } catch (e) {
        console.error();
    }
}

async function editGenre(idGenre) {
    try {
        const genre = {
            id: document.forms["form-genre"].id.value,
            name: document.forms["form-genre"].genre_name.value,
            poster: document.forms["form-genre"].genre_img.value
        };
        const response = await fetch(`${urlGenre}/${idGenre}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(genre)
        });
        if (response.ok) {
            document.forms["form-genre"].reset();
            await getListGenre();
        }
    } catch (e) {
        console.error();
    }
}

async function clickButtonCardGenre(e) {
    if (e.target.tagName == "I") {
        const id = e.target.getAttribute("data-id");
        if (e.target.getAttribute("data-action") == "Edit") {
            await genreFormInfo(`${urlGenre}/${id}`);
        }
        else if (e.target.getAttribute("data-action") == "Remove") {
            await removeGenre(`${urlGenre}/${id}`);
        }
    }
}

async function clickButtonCardSongwriter(e) {
    if (e.target.tagName == "I") {
        const id = e.target.getAttribute("data-id");
        if (e.target.getAttribute("data-action") == "Edit") {
            await songwriterFormInfo(id);
        }
        else if (e.target.getAttribute("data-action") == "Remove") {
            await removeSongwriter(id);
        }
    }
}

async function removeSongwriter(idSongwriter) {
    if (confirm("Ви дійсно бажаєте видалити цього співака ?")) {
        try {
            const response = await fetch(`${urlSongwriter}/${idSongwriter}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });
            if (response.ok) {
                await getListMusics();
                await getListSongwriters();
            }
        } catch (e) {
            console.error();
        }
    }
}

async function songwriterFormInfo(idSongwriter) {
    try {
        const response = await fetch(`${urlSongwriter}/${idSongwriter}`);
        if (response.ok) {
            const songwriter = await response.json();
            document.forms["form-songwriter"].id.value = songwriter.id;
            document.forms["form-songwriter"].artist_name.value = songwriter.name;
            document.forms["form-songwriter"].artist_img.value = songwriter.photo;
        }
    } catch (e) {
        console.error();
    }
}

async function saveSongwriter(e) {
    e.preventDefault();
    const id = document.forms["form-songwriter"].id.value;
    if (document.forms["form-songwriter"].id.value == "0") {
        await addSongwriter();
    }
    else {
        await editSongwriter(id);
    }
}

async function editSongwriter(idSongwriter) {
    try {
        const songwriter = {
            id: document.forms["form-songwriter"].id.value,
            name: document.forms["form-songwriter"].artist_name.value,
            photo: document.forms["form-songwriter"].artist_img.value
        };
        const response = await fetch(`${urlSongwriter}/${idSongwriter}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(songwriter)
        });
        if (response.ok) {
            document.forms["form-songwriter"].reset();
            await getListSongwriters();
        }
    } catch (e) {
        console.error();
    }
}

async function addSongwriter() {
    try {
        const songwriter = {
            name: document.forms["form-songwriter"].artist_name.value,
            photo: document.forms["form-songwriter"].artist_img.value
        };
        const response = await fetch(urlSongwriter, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(songwriter)
        });
        if (response.ok) {
            document.forms["form-songwriter"].reset();
            await getListSongwriters();
        }
    } catch (e) {
        console.error();
    }
}

async function clickButtonCardUser(e) {
    if (e.target.tagName == "I") {
        const id = e.target.getAttribute("data-id");
        if (e.target.getAttribute("data-action") == "Edit") {
            await userFormInfo(id);
        }
        else if (e.target.getAttribute("data-action") == "Remove") {
            await removeUser(id);
        }
    }
}

async function removeUser(idUser) {
    if (confirm("Ви дійсно бажаєте видалити цього користувача ?")) {
        try {
            const response = await fetch(`${urlUser}/${idUser}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });
            if (response.ok) {
                await getListUsers();
            }
        } catch (e) {
            console.error();
        }
    }
}

async function userFormInfo(idUser) {
    try {
        const response = await fetch(`${urlUser}/${idUser}`);
        if (response.ok) {
            const user = await response.json();
            document.forms["form-user"].id.value = user.id;
            document.forms["form-user"].user_name.value = user.name;
            document.forms["form-user"].user_surname.value = user.surname;
            document.forms["form-user"].user_age.value = user.year;
            document.forms["form-user"].user_login.value = user.login;
            document.forms["form-user"].user_password.value = user.password;
            document.forms["form-user"].is_Admin.value = (user.isAdmin) ? "Так" : "Ні";
            document.forms["form-user"].is_Activated.value = (user.isActivated) ? "Так" : "Ні";
        }
    } catch (e) {
        console.error();
    }
}

async function saveUser(e) {
    e.preventDefault();
    if (document.forms["form-user"].id.value == "0") {
        await addUser();
    }
    else {
        await editUser(document.forms["form-user"].id.value);
    }
}

async function addUser() {
    try {
        const user = {
            name: document.forms["form-user"].user_name.value,
            surname: document.forms["form-user"].user_surname.value,
            year: document.forms["form-user"].user_age.value,
            login: document.forms["form-user"].user_login.value,
            password: document.forms["form-user"].user_password.value,
            isActivated: (document.forms["form-user"].is_Activated.value == "Так") ? true : false,
            isAdmin: (document.forms["form-user"].is_Admin.value == "Так") ? true : false
        };
        const response = await fetch(urlUser, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            document.forms["form-user"].reset();
            await getListUsers();
        }
    } catch (e) {
        console.error();
    }
}

async function editUser(idUser) {
    try {
        const user = {
            id: document.forms["form-user"].id.value,
            name: document.forms["form-user"].user_name.value,
            surname: document.forms["form-user"].user_surname.value,
            year: document.forms["form-user"].user_age.value,
            login: document.forms["form-user"].user_login.value,
            password: document.forms["form-user"].user_password.value,
            isActivated: (document.forms["form-user"].is_Activated.value == "Так") ? true : false,
            isAdmin: (document.forms["form-user"].is_Admin.value == "Так") ? true : false
        };
        const response = await fetch(`${urlUser}/${idUser}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            document.forms["form-user"].reset();
            await getListUsers();
        }
    } catch (e) {
        console.error();
    }
}

function addEvents() {
    const formMusic = document.getElementById("form-music");
    formMusic.addEventListener("submit", saveMusic);
    formMusic.addEventListener("reset", (e) => document.forms["form-music"].id.value = "0");
    const listMusics = document.getElementById("list-musics");
    listMusics.addEventListener("click", clickButtonCardMusic);
    const listGenres = document.getElementById("list-genres");
    listGenres.addEventListener("click", clickButtonCardGenre);
    const formGenre = document.getElementById("form-genre");
    formGenre.addEventListener("submit", saveGenre);
    formGenre.addEventListener("reset", (e) => document.forms["form-genre"].id.value = "0");
    const formSongwriter = document.getElementById("form-songwriter");
    formSongwriter.addEventListener("submit", saveSongwriter);
    formSongwriter.addEventListener("reset", (e) => document.forms["form-songwriter"].id.value = "0");
    const listSongwriters = document.getElementById("list-songwriters");
    listSongwriters.addEventListener("click", clickButtonCardSongwriter);
    const listUsers = document.getElementById("list-users");
    listUsers.addEventListener("click", clickButtonCardUser);
    const formUser = document.getElementById("form-user");
    formUser.addEventListener("submit", saveUser);
    formUser.addEventListener("reset", (e) => document.forms["form-user"].id.value = "0");
}

document.addEventListener("DOMContentLoaded", getLists);
