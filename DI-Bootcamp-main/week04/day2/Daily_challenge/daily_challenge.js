class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
  }
}

const video = new Video("video", "Jack", 2000);
video.watch();

const video2 = new Video("video2", "Mary", 3000);
video2.watch();

// 1
// Use an array to store data for five Video instances (ie. title, uploader, time).Think of the best data structure to save this information within the array.

const videos = [
  {
    title: "video3",
    uploader: "John",
    time: 4000,
  },
  {
    title: "video4",
    uploader: "Jane",
    time: 5000,
  },
  {
    title: "video5",
    uploader: "Jack",
    time: 6000,
  },
  {
    title: "video6",
    uploader: "Kate",
    time: 2000,
  },
  {
    title: "video7",
    uploader: "Lily",
    time: 3000,
  },
];

const videoInstancesMap = videos.map((data) => {
  const video = new Video(data.title, data.uploader, data.time);
  return video;
});

console.log(videoInstancesMap);
