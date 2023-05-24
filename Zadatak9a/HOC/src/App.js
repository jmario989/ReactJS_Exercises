import './App.css';

const withColor = function(Element){
  return function(props){
    const { color, font, ...otherProps } = props;
    return <Element {...otherProps} style={{ backgroundColor: color, fontFamily: font }} />
  }
}

const Button = function(props){
  return <button {...props} ></button>
}

const ColoredButton = withColor(Button);


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ColoredButton color="red" font="Arial">Ja sam crven</ColoredButton>
      <ColoredButton color="blue" className="novi-stil">Ja sam plav</ColoredButton>
    </div>
  );
}

export default App;
