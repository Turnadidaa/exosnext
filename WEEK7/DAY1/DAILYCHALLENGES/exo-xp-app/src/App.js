import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div className="App">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src="https://images.pexels.com/photos/1337144/pexels-photo-1337144.jpeg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/509685/pexels-photo-509685.jpeg" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/2540664/pexels-photo-2540664.jpeg" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
