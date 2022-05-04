import './App.css';
import Card from './Card';

function App() {

  return (
    <div id="container">
      <Card bgColor = "red" description = "Hello World 1!" subtitle = "Sub Title 1" title = "Title 1" width = "250px"/>
      <Card bgColor = "orange" description = "Hello World 2!" subtitle = "Sub Title 2" title = "Title 2" width = "250px"/>
      <Card bgColor = "yellow" description = "Hello World 3!" subtitle = "Sub Title 3" title = "Title 3" width = "250px"/>
      <Card bgColor = "green" description = "Hello World 4!" subtitle = "Sub Title 4" title = "Title 4" width = "250px"/>
    </div>
  );
}

export default App;