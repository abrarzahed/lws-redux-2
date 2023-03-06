const configureStore = require("@reduxjs/toolkit").configureStore;
const videoReducer = require("../video/videoSlice");
const relatedVideosReducer = require("../relatedVideos/relatedVideosSlice");

const { createLogger } = require("redux-logger");
const logger = createLogger();

const store = configureStore({
  reducer: {
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
  },
  // middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
