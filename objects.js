var playlist = { lofang : "88"}
function updatePlaylist(play, artist, song) {
  play[artist] = song;
  return playlist;
}
function removeFromPlaylist(playList, artistName){
  delete playlist.artistName
  return playlist
}