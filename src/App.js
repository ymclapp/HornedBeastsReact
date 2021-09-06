import React from 'react'; 
// import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import rawData from './data/data.json';
import SelectedBeast from './components/SelectedBeast';




class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      beastData: rawData,
      showModal:  false,
      selectedBeast: {},
    };
  }

  handleClose = () => {
    console.log('Hiding modal');
    this.setState({ showModal: false });
  }

  handleSelectBeast = beastIndex => {
    this.setState({
      selectedBeast: this.state.beastData[beastIndex],
      showModal: true,
    });
    
  }



  render () {
    let theme = 'dark';

    return (
      <div className = "App">
        <Header theme = {theme} />
       
        <Main 
          beasts={this.state.beastData}
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
