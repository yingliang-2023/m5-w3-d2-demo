import React from "react";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        alldata: [],
        singledata: {
          title: "",
          author: ""
        }
      };
    };

    getLists() {
      fetch("http://localhost:5000/posts")
      .then(res=>res.json())
      .then(result=>
        this.setState({
          loading:false,
          alldata:result})
          )
          .catch(console.log);
        };

    render(){
      return ( 
        <div className="container">
          <span className="title-bar">
            <button 
            type="button"
            className="btn btn-primary"
            onClick={this.getLists}
            >
              Get Lists
            </button>
          </span>
        </div>
      );
    }
 
  }

export default App;