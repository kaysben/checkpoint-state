import React from "react";
import myImage from "./billgates.jpg"
class App extends React.Component {
  state = {
    Person: {
      fullName: "Bill Gates",
      bio: "Bill Gates is a technologist, business leader, and philanthropist. He grew up in Seattle, Washington, with an amazing and supportive family who encouraged his interest in computers at an early age. He dropped out of college to start Microsoft with his childhood friend Paul Allen.",
       imgSrc: myImage,
      profession: " Philanthropist"
    },
    show: true,
    count: 0
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  componentDidMount() {
    this.myInterval = setInterval (()=>{
      this.setState(prevState => ({
        count: prevState.count + 1
    }))
  }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }
  render() {
    const count = this.state.count
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="billgates"></img>
            <h1>{this.state.Person.profession}</h1>
            <h1>{count}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
 

}

export default App;
