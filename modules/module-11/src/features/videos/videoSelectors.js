import { createSelector } from "reselect";

export const selectAllVideos = (state) => {
  console.log("Running all videos");
  return state.videos.videos;
};

export const selectWatchVideos = (state) =>
  state.videos.videos.filter((video) => video.watched);

export const selectUnwatchedVideos = (state) =>
  state.videos.videos.filter((video) => !video.watched);

export const selectMemoisedWatchedVideos = createSelector(
  selectAllVideos,
  (allVideos) => {
    console.log("running output selector of watched videos");
    return allVideos.filter((video) => video.watched);
  }
);

export const selectMemoisedUnwatchedVideos = createSelector(
  selectAllVideos,
  (allVideos) => {
    console.log("running output selector of unwatched videos");
    return allVideos.filter((video) => !video.watched);
  }
);
