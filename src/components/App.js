import video from "../data/video.js";
import Header from "./Header"
import About from "./About"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src= {video.embedUrl}//"https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <Header title={video.title}/>
      <About views={video.views}
      createdAt={video.createdAt}
      upvotes={video.upvotes}
      downvotes={video.downvotes}
      comments={video.comments}
      />
    </div>
  );
}

export default App;
