export const selectAllVideos = (state) => state.videos.videos;

export const selectWatchVideos = (state) =>
  state.videos.videos.filter((video) => video.watched);

export const selectUnwatchedVideos = (state) =>
  state.videos.videos.filter((video) => !video.watched);
