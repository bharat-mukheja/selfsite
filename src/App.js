import React, { Fragment, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Post from './components/Post';
import Header from './components/Header';
import SideCard from './components/SideCard';

import {pages} from './Pages';

class App extends Component {
  
  constructor(){
    super();
    this.onHeaderClick = this.onHeaderClick.bind(this);
  }
  state = {page:pages.home}

  onHeaderClick(pagename){
    this.setState({page:pages[pagename]});
  }

  componentDidMount(){
    document.title = "About Me"
  }

  render() {
    return (
      <Fragment>

        <Header onHeaderClick={this.onHeaderClick}/>

        <main className="my-5 py-5">
          <Container className="px-0">
            <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">

              <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                <SideCard />
              </Col>

              <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                <Post content={this.state.page} />
              </Col>

            </Row>
          </Container>
        </main>

      </Fragment>
    );
  }
}
export default App;