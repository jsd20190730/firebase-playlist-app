// fill in your firebase project's information below:
// const config = {
//   apiKey: 'apiKey',
//   authDomain: 'projectId.firebaseapp.com',
//   databaseURL: 'https://databaseName.firebaseio.com',
//   storageBucket: 'bucket.appspot.com'
// }
//
// firebase.initializeApp(config)

$(function () {
  $('#song-form').submit((event) => {
    event.preventDefault()
    console.log($('#song-name').val())
    console.log($('#artist-name').val())
  })

  // list for clicks on the edit button
  $('body').on('click', 'button.edit-song', (event) => {
    const selectedSongId = $(event.currentTarget).parent().parent().attr('id')
    const selectedSongTitle = $(event.currentTarget).parent().parent().find('.song-title').text()
    const selectedSongArtist = $(event.currentTarget).parent().parent().find('.song-artist').text()

    console.log(selectedSongId)
    console.log(selectedSongTitle)
    console.log(selectedSongArtist)

    const formHtml = buildEditFormHtml(selectedSongId, selectedSongTitle, selectedSongArtist)

    $(event.currentTarget).parent().parent().html(formHtml)
  })

  $('body').on('click', 'song .cancel-edit', (event) => {})

  function buildEditFormHtml (songId, songTitle, songArtist) {
    return (
      `
        <form id="update-song-form">
          <p>Update Song</p>
          <input type="text" id="update-song-title" value="${songTitle}"/>
          <input type="text" id="update-artist-name" value="${songArtist}"/>
          <input type="hidden" id="song-id" text="${songId}"/>
          <button>Update Song</button>
          <a href="#" class="cancel-edit"> cancel </a>
        </form>
      `
    )
  }

  function buildSongItemHtml (songId, songTitle, songArtist) {
    return (
      `<div class="song" id="${songId}">
        <div class="song-title">${songTitle} Song</div>
        <div class="song-artist">${songArtist}</div>

        <div class="actions">
          <button class="edit-song">edit</a>
          <button class="delete-song">delete</a>
        </div>
      </div>`
    )
  }
})
