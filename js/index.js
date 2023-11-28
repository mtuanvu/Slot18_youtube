var keyword = "Sơn Tùng";

var YOUTUBE_API =
  "https://content.googleapis.com/youtube/v3/search?q=" +
  keyword +
  "&type=video&maxResults=9&part=snippet&key= AIzaSyAeH2HPtxZ4U_iHvQysY8icnmZ9COOe3nI";

fetch(YOUTUBE_API, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
}).then((res) => {
  return res.json;
});
