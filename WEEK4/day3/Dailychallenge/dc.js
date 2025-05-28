// // Class definition
// class Video {
//   constructor(title, uploader, time) {
//     this.title = title;
//     this.uploader = uploader;
//     this.time = time;
//   }

//   watch() {
//     console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
//   }
// }

// // Instantiate first Video
// const video1 = new Video("The Secret Life of Cats", "Nada", 300);
// video1.watch();

// // Instantiate second Video
// const video2 = new Video("JavaScript Basics", "Samir", 600);
// video2.watch();

// // Bonus: Array of video data
// const videoData = [
//   { title: "Learn React in 10 Minutes", uploader: "Alice", time: 600 },
//   { title: "CSS Grid Tutorial", uploader: "Bob", time: 450 },
//   { title: "Vue.js for Beginners", uploader: "Claire", time: 520 },
//   { title: "Advanced Node.js", uploader: "David", time: 900 },
//   { title: "Python Crash Course", uploader: "Eve", time: 720 }
// ];

// // Instantiate all videos from array
// const videos = videoData.map(video => new Video(video.title, video.uploader, video.time));

// // Call watch() on each instance
// videos.forEach(video => video.watch());