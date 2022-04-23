import './App.css';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Title>Audio Player</Title>
      <AudioPlayer />
    </div>
  );
}

const Title = styled.span`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 170%;
  color: #fff;
`;
export default App;
