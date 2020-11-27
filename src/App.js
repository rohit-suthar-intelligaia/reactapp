import night from './images/night.jpg';
import morning from './images/goodmorning.jpeg';
import afternoon from './images/afternoon.jpg';
import evening from './images/evening.jpg';

function App() {
  const imgStyle = {
    width: '100%',
    height: '100vh',
    pointerEvents: 'none'
  }
  const textStyle = {
    position: 'absolute',
    fontSize: '44px'
  }
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
  let currentTime = new Date().getHours();

  let message, img;
    if ( currentTime >= 4 && currentTime <= 11 ) {
      message = 'Morning'
      img = morning
      }
    else if ( currentTime >= 12 && currentTime <= 16) {
      message = 'Afternoon';
      img = afternoon
      }
    else if ( (currentTime >= 17 && currentTime <= 20)) {
      message = 'Evening';
      img = evening
      }
    else if ( (currentTime >= 21 && currentTime <= 3)) {
      message = 'Night';
      img = night
      }

  return (
    <div style={style}>
      <img src={img} style={imgStyle} alt="logo" />
      <p style={textStyle}>
        Hello Rohit Good {message}!
      </p>
    </div>
  );
}

export default App;
