import React from 'react'; 
import './App.css';
import Header from './components/Header';
import SelectedBeast from './components/SelectedBeasts';
import Main from './components/Main';
import Footer from './components/Footer';
import beastData from './data/data.json';


//converted from function compnent to a class component by calling the function 'render' and putting it in a class that extends Component
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Main />
//       <HornedBeasts />
//       <Footer />

//     </div>
//   );
// }

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showModal:  false,
      selectedBeast: {},
    };
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleSelectBeast = () => {
    this.setState({
      selectedBeast: beastData[beastIndex],
      showModal: true,
    });
    
  }

  render () {
    let theme = 'dark';

    return (
      <div className = "App">
        <Header theme = {theme} />
        <Main 
          beasts = {beastData}
          handleSelectBeast ={this.props.handleSelectBeast}
        />
        <Footer theme = {theme} />
        <SelectedBeast
          beast = {this.state.selectedBeast}
          show = {this.state.showModal}
          handleClose = {this.handleClose}
          />
      </div>
    );
  }
}

export default App;
