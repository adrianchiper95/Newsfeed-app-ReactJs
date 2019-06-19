import React, { Component } from 'react';
import {api, sources, apiKey, defaultSource} from './Api';
import aerojet from './images/aerojet.png';
import airbus from './images/airbus.png';
import nasa from './images/nasa.png';
import spacex from './images/spacex.png';
import zodiac from './images/zodiac.png';
import aurora from './images/aurora.png';
import './Content.css';

class Content extends Component {
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
      articles9:[],
      articles10:[],
      articles11:[]
    };
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
        articles9: myJson.articles[9],
        articles10: myJson.articles[10],
        articles11: myJson.articles[11]
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
      articles9: myJson.articles[9],
      articles10: myJson.articles[10],
      articles11: myJson.articles[11]
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
      articles9: myJson.articles[9],
      articles10: myJson.articles[10],
      articles11: myJson.articles[11]
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
      articles9: myJson.articles[9],
      articles10: myJson.articles[10],
      articles11: myJson.articles[11]
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
      articles9: myJson.articles[9],
      articles10: myJson.articles[10],
      articles11: myJson.articles[11]
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
      articles9: myJson.articles[9],
      articles10: myJson.articles[10],
      articles11: myJson.articles[11]
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
      articles9: myJson.articles[9],
      articles10: myJson.articles[10],
      articles11: myJson.articles[11]
    });
  }
  );
};
 render() {
   const defaultImg = "http://ltm.sk/wp-content/themes/photobook/images/blank.png";
    return (
      <React.Fragment>
      <div id="nav_source">
          <img src={aerojet} onClick={this.mySource0} alt="aerojet"/>
          <img src={airbus} onClick={this.mySource1} alt="irbus"/>
          <img src={nasa} onClick={this.mySource2} alt="nasa"/>
          <img src={spacex} onClick={this.mySource3} alt="spacex"/>
          <img src={zodiac} onClick={this.mySource4} alt="zodiac"/>
          <img src={aurora} onClick={this.mySource5} alt="aurora"/>
      </div>

    <main>
            <h1>Latest</h1>
            <div className="orizontal_line"></div>
            <div id="latest_news">
                <div className="big">
                    <div className="text-content">
                    <h3>{this.state.articles0.title}</h3>
                    <p>{this.state.articles0.description}</p>
                    </div>
                    <img src={this.state.articles0.urlToImage || defaultImg} alt={this.state.articles0.urlToImage}/>
                </div>

                <div className="square">
                    <img src={this.state.articles1.urlToImage || defaultImg} alt={this.state.articles1.urlToImage}/>
                    <div className="text-content">
                    <h3>{this.state.articles1.title}</h3>
                    <p>{this.state.articles1.description}</p>
                    </div>
                  </div>
                  <div className="square" >
                    <img src={this.state.articles2.urlToImage || defaultImg} alt={this.state.articles2.urlToImage}/>
                    <div className="text-content">
                    <h3>{this.state.articles2.title}</h3>
                    <p>{this.state.articles2.description}</p>
                    </div>
                  </div>
                  <div className="wide">
                      <img src={this.state.articles3.urlToImage || defaultImg} alt={this.state.articles3.urlToImage}/>
                      <div className="text-content">
                      <h3>{this.state.articles3.title}</h3>
                      <p>{this.state.articles3.description}</p>
                      </div>
                  </div>
                  <div className="square">
                      <img src={this.state.articles4.urlToImage || defaultImg} alt={this.state.articles4.urlToImage}/>
                      <div className="text-content">
                      <h3>{this.state.articles4.title}</h3>
                      <p>{this.state.articles4.description}</p>
                      </div>
                  </div>
                  <div className="square">
                      <img src={this.state.articles5.urlToImage || defaultImg} alt={this.state.articles5.urlToImage}/>
                      <div className="text-content">
                      <h3>{this.state.articles5.title}</h3>
                      <p>{this.state.articles5.description}</p>
                      </div>  
                  </div>
            </div>

            <h1>Trending</h1>
            <div className="orizontal_line"></div>
            <div id="trending_news">
                        <div className="square">
                        <img src={this.state.articles6.urlToImage || defaultImg} alt={this.state.articles6.urlToImage}/>
                          <div className="text-content">
                          <h3>{this.state.articles6.title}</h3>
                          <p>{this.state.articles6.description}</p>
                          </div>
                        </div>
                        <div className="square">
                        <img src={this.state.articles7.urlToImage || defaultImg} alt={this.state.articles7.urlToImage}/>
                          <div className="text-content">
                          <h3>{this.state.articles7.title}</h3>
                          <p>{this.state.articles7.description}</p>
                          </div>
                        </div>
                        <div className="big">
                            <div className="text-content">
                            <h3>{this.state.articles8.title}</h3>
                            <p>{this.state.articles8.description}</p>
                              </div>
                              <img src={this.state.articles8.urlToImage || defaultImg} alt={this.state.articles8.urlToImage}/>
                            </div>
                        <div className="square">
                          <img src={this.state.articles9.urlToImage || defaultImg} alt={this.state.articles9.urlToImage}/>  
                          <div className="text-content">
                            <h3>{this.state.articles9.title}</h3>
                            <p>{this.state.articles9.description}</p>
                          </div>
                            </div>
                        <div className="square">
                            <img src={this.state.articles10.urlToImage || defaultImg} alt={this.state.articles10.urlToImage}/> 
                            <div className="text-content">
                            <h3>{this.state.articles10.title}</h3>
                            <p>{this.state.articles10.description}</p>
                              </div>
                          </div>
                        <div className="wide">
                            <img src={this.state.articles11.urlToImage || defaultImg} alt={this.state.articles11.urlToImage}/> 
                            <div className="text-content">
                            <h3>{this.state.articles11.title}</h3>
                            <p>{this.state.articles11.description}</p>
                              </div>
                        </div>
            </div>   
        </main>
        </React.Fragment>
    );
  };
};
export default Content;
