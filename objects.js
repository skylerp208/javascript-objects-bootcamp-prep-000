var playlist = { lofang : "88"}
function updatePlaylist(play, artist, song) {
  play[artist] = song;
  return playlist;
}
function removeFromPlaylist(play, artist){
  delete play.artist;
  playlist;
}