import React from 'react'; 
import './App.css';
import Header from './components/Header';
import SelectedBeast from './components/SelectedBeast';
import Main from './components/Main';
import Footer from './components/Footer';
import beastData from './data/data.json';



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

  handleSelectBeast = beastIndex => {
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
          handleSelectBeast = {this.handleSelectBeast}
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
