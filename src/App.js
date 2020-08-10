import React, { Component } from 'react';
import {api, sources, apiKey, defaultSource} from './Components/Api';

import './index.css';
import Home from './Components/Home';
import Sources from './Components/Sources';
import Footer from './Components/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles0:[],
      articles1:[],
      articles2:[],
      articles3:[],
      articles4:[],
      articles5:[],
      articles6:[],
      articles7:[],
      articles8:[],
      articles9:[]
    };
    this.myDefaultSource = this.myDefaultSource.bind(this);
    this.mySource0 = this.mySource0.bind(this);
    this.mySource1 = this.mySource1.bind(this);
    this.mySource2 = this.mySource2.bind(this);
    this.mySource3 = this.mySource3.bind(this);
    this.mySource4 = this.mySource4.bind(this);
    this.mySource5 = this.mySource5.bind(this);
  };

  componentDidMount () {
    fetch(api + defaultSource + apiKey)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        articles0: myJson.articles[0],
        articles1: myJson.articles[1],
        articles2: myJson.articles[2],
        articles3: myJson.articles[3],
        articles4: myJson.articles[4],
        articles5: myJson.articles[5],
        articles6: myJson.articles[6],
        articles7: myJson.articles[7],
        articles8: myJson.articles[8],
        articles9: myJson.articles[9]
      });
    }
    );
  };

  myDefaultSource () {
    fetch(api + defaultSource + apiKey)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        articles0: myJson.articles[0],
        articles1: myJson.articles[1],
        articles2: myJson.articles[2],
        articles3: myJson.articles[3],
        articles4: myJson.articles[4],
        articles5: myJson.articles[5],
        articles6: myJson.articles[6],
        articles7: myJson.articles[7],
        articles8: myJson.articles[8],
        articles9: myJson.articles[9]
      });
    }
    );
  };
  
  mySource0 () {
  fetch(api + sources[0] + apiKey)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      articles0: myJson.articles[0],
      articles1: myJson.articles[1],
      articles2: myJson.articles[2],
      articles3: myJson.articles[3],
      articles4: myJson.articles[4],
      articles5: myJson.articles[5],
      articles6: myJson.articles[6],
      articles7: myJson.articles[7],
      articles8: myJson.articles[8],
      articles9: myJson.articles[9]
    });
  }
  );
};
 
mySource1 () {
  fetch(api + sources[1] + apiKey)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      articles0: myJson.articles[0],
      articles1: myJson.articles[1],
      articles2: myJson.articles[2],
      articles3: myJson.articles[3],
      articles4: myJson.articles[4],
      articles5: myJson.articles[5],
      articles6: myJson.articles[6],
      articles7: myJson.articles[7],
      articles8: myJson.articles[8],
      articles9: myJson.articles[9]
    });
  }
  );
};

mySource2 () {
  fetch(api + sources[2] + apiKey)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      articles0: myJson.articles[0],
      articles1: myJson.articles[1],
      articles2: myJson.articles[2],
      articles3: myJson.articles[3],
      articles4: myJson.articles[4],
      articles5: myJson.articles[5],
      articles6: myJson.articles[6],
      articles7: myJson.articles[7],
      articles8: myJson.articles[8],
      articles9: myJson.articles[9]
    });
  }
  );
};

mySource3 () {
  fetch(api + sources[3] + apiKey)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      articles0: myJson.articles[0],
      articles1: myJson.articles[1],
      articles2: myJson.articles[2],
      articles3: myJson.articles[3],
      articles4: myJson.articles[4],
      articles5: myJson.articles[5],
      articles6: myJson.articles[6],
      articles7: myJson.articles[7],
      articles8: myJson.articles[8],
      articles9: myJson.articles[9]
    });
  }
  );
};

mySource4 () {
  fetch(api + sources[4] + apiKey)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      articles0: myJson.articles[0],
      articles1: myJson.articles[1],
      articles2: myJson.articles[2],
      articles3: myJson.articles[3],
      articles4: myJson.articles[4],
      articles5: myJson.articles[5],
      articles6: myJson.articles[6],
      articles7: myJson.articles[7],
      articles8: myJson.articles[8],
      articles9: myJson.articles[9]
    });
  }
  );
};

mySource5 () {
  fetch(api + sources[5] + apiKey)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      articles0: myJson.articles[0],
      articles1: myJson.articles[1],
      articles2: myJson.articles[2],
      articles3: myJson.articles[3],
      articles4: myJson.articles[4],
      articles5: myJson.articles[5],
      articles6: myJson.articles[6],
      articles7: myJson.articles[7],
      articles8: myJson.articles[8],
      articles9: myJson.articles[9]
    });
  }
  );
};
 render() {
   console.log(this.state)
   const defaultImg = "https://i.ibb.co/F56SBSz/blank.png";
    return (
      <React.Fragment>
      <Home myDefaultSource = {this.myDefaultSource} />
      <Sources 
      mySource0 = {this.mySource0} 
      mySource1 = {this.mySource1}
      mySource2 = {this.mySource2}
      mySource3 = {this.mySource3}
      mySource4 = {this.mySource4}
      mySource5 = {this.mySource5}
      />    
      <main>
            <h1>Latest</h1>
            <div className="orizontal_line"></div>
            <div id="latest_news">
            
                <div className="big">
                <a href={this.state.articles0.url} target="_blank" rel="noopener noreferrer">
                    <div className="text-content">
                    <h3>{this.state.articles0.title}</h3>
                    <p>{this.state.articles0.description}</p>
                    </div>
                    <img src={this.state.articles0.image || defaultImg} alt={this.state.articles0.image}/>
                    </a>
                </div>
                <div className="square">
                <a href={this.state.articles1.url} target="_blank" rel="noopener noreferrer">
                    <img src={this.state.articles1.image || defaultImg} alt={this.state.articles1.image}/>
                    <div className="text-content">
                    <h3>{this.state.articles1.title}</h3>
                    <p>{this.state.articles1.description}</p>
                    </div>
                    </a>
                  </div>
                  <div className="square" >
                  <a href={this.state.articles2.url} target="_blank" rel="noopener noreferrer">
                    <img src={this.state.articles2.image || defaultImg} alt={this.state.articles2.image}/>
                    <div className="text-content">
                    <h3>{this.state.articles2.title}</h3>
                    <p>{this.state.articles2.description}</p>
                    </div>
                  </a>
                  </div>
                  <div className="wide">
                  <a href={this.state.articles3.url} target="_blank" rel="noopener noreferrer">
                      <img src={this.state.articles3.image || defaultImg} alt={this.state.articles3.image}/>
                      <div className="text-content">
                      <h3>{this.state.articles3.title}</h3>
                      <p>{this.state.articles3.description}</p>
                      </div>
                  </a>
                  </div>
                  <div className="square">
                  <a href={this.state.articles4.url} target="_blank" rel="noopener noreferrer">
                      <img src={this.state.articles4.image || defaultImg} alt={this.state.articles4.image}/>
                      <div className="text-content">
                      <h3>{this.state.articles4.title}</h3>
                      <p>{this.state.articles4.description}</p>
                      </div>
                  </a>
                  </div>
                  <div className="square">
                  <a href={this.state.articles5.url} target="_blank" rel="noopener noreferrer">
                      <img src={this.state.articles5.image || defaultImg} alt={this.state.articles5.image}/>
                      <div className="text-content">
                      <h3>{this.state.articles5.title}</h3>
                      <p>{this.state.articles5.description}</p>
                      </div> 
                  </a> 
                  </div>
            </div>

            <h1>Trending</h1>
            <div className="orizontal_line"></div>
            <div id="trending_news">
                        <div className="square">
                        <a href={this.state.articles6.url} target="_blank" rel="noopener noreferrer">
                          <img src={this.state.articles6.image || defaultImg} alt={this.state.articles6.image}/>
                          <div className="text-content">
                          <h3>{this.state.articles6.title}</h3>
                          <p>{this.state.articles6.description}</p>
                          </div>
                        </a>
                        </div>
                        <div className="square">
                        <a href={this.state.articles7.url} target="_blank" rel="noopener noreferrer">
                          <img src={this.state.articles7.image || defaultImg} alt={this.state.articles7.image}/>
                          <div className="text-content">
                          <h3>{this.state.articles7.title}</h3>
                          <p>{this.state.articles7.description}</p>
                          </div>
                        </a>
                        </div>
                        <div className="big">
                        <a href={this.state.articles8.url} target="_blank" rel="noopener noreferrer">
                            <div className="text-content">
                            <h3>{this.state.articles8.title}</h3>
                            <p>{this.state.articles8.description}</p>
                            </div>
                            <img src={this.state.articles8.image || defaultImg} alt={this.state.articles8.image}/>
                        </a>
                        </div>
                        <div className="square">
                        <a href={this.state.articles9.url} target="_blank" rel="noopener noreferrer">
                          <img src={this.state.articles9.image || defaultImg} alt={this.state.articles9.image}/>  
                          <div className="text-content">
                            <h3>{this.state.articles9.title}</h3>
                            <p>{this.state.articles9.description}</p>
                          </div>
                        </a>
                        </div>
                        <div className="square">
                        <a href={this.state.articles6.url} target="_blank" rel="noopener noreferrer">
                            <img src={this.state.articles6.image || defaultImg} alt={this.state.articles6.image}/> 
                            <div className="text-content">
                            <h3>{this.state.articles6.title}</h3>
                            <p>{this.state.articles6.description}</p>
                            </div>
                          </a>
                        </div>
                        <div className="wide">
                        <a href={this.state.articles4.url} target="_blank" rel="noopener noreferrer">
                            <img src={this.state.articles4.image || defaultImg} alt={this.state.articles4.image}/> 
                            <div className="text-content">
                            <h3>{this.state.articles4.title}</h3>
                            <p>{this.state.articles4.description}</p>
                            </div>
                        </a>
                        </div>
            </div>   
        </main>
        <Footer />
        </React.Fragment>
    );
  };
};
export default App;
