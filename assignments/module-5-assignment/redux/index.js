const store = require("./app/store");

const { fetchVideo } = require("./video/videoSlice");
const { fetchRelatedVideos } = require("./relatedVideos/relatedVideosSlice");

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
let tags = null;
store.subscribe(() => {
  data = store?.getState()?.video;
  tags = data?.video?.tags;

  const relatedVideosSorted = [...store.getState()?.relatedVideos?.videos]
    .map((v) => {
      return {
        ...v,
        views: Number(v.views.slice(0, -1)),
      };
    })
    .sort((a, b) => b.views - a.views)
    .map((v) => {
      return {
        ...v,
        views: v.views + "k",
      };
    });
  console.log(relatedVideosSorted);
});

setTimeout(() => {
  if (tags) {
    store.dispatch(fetchRelatedVideos(tags));
  }
}, 200);

// dispatch actions
store.dispatch(fetchVideo());
