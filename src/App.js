import './App.css';
import Example from './Example';
import Exampletwo from './Exampletwo';

const styledText = {
  fontSize: "25px",
  textAlign: "center",
  margin: "60px",
  border: "1px solid green"
};
const styleBack={
  background:'1px solid red'
};

function App() {
  return (
    <div>
    < Example styledText={styledText}/>

    </div>
  );
}

export default App;
