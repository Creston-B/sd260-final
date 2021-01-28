import React, { Component, Fragment } from 'react';
import * as MovieAPI from './lib/MovieAPI';
import Header from './components/Header.jsx';
import TitleList from './components/TitleList';

//MovieAPI.getAll()

let partAlist = <Fragment>
  <div className="movie">
    <img src="https://image.tmdb.org/t/p/w500/fddtVEUozxvLmehR5yGZjem44pD.jpg" />
    <div className="overlay">
      <div className="title">Ant-Man</div>
      <div className="rating">7.1/10</div>
      <div className="plot">
        Armed with the astonishing ability to shrink in scale but
        increase in strength, master thief Scott Lang must embrace
        his inner-hero and help his mentor, Doctor Hank Pym, protect
        the secret behind his spectacular Ant-Man suit from a new
        generation of towering threats. Against seemingly
        insurmountable obstacles, Pym and Lang must plan and pull
        off a heist that will save the world.
        </div>
      <div data-toggled="true" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="movie">
    <img src="https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" />
    <div className="overlay">
      <div className="title">Star Wars</div>
      <div className="rating">8.2/10</div>
      <div className="plot">
        Princess Leia is captured and held hostage by the evil
        Imperial forces in their effort to take over the galactic
        Empire. Venturesome Luke Skywalker and dashing captain Han
        Solo team together with the loveable robot duo R2-D2 and
        C-3PO to rescue the beautiful princess and restore peace and
        justice in the Empire.
        </div>
      <div data-toggled="false" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="movie">
    <img src="https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" />
    <div className="overlay">
      <div className="title">Guardians of the Galaxy</div>
      <div className="rating">7.9/10</div>
      <div className="plot">
        Light years from Earth, 26 years after being abducted, Peter
        Quill finds himself the prime target of a manhunt after
        discovering an orb wanted by Ronan the Accuser.
        </div>
      <div data-toggled="false" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="movie">
    <img src="https://image.tmdb.org/t/p/w500/9rd002JS49RwDW944fF1wjU8iTV.jpg" />
    <div className="overlay">
      <div className="title">Star Wars: The Force Awakens</div>
      <div className="rating">7.4/10</div>
      <div className="plot">
        Thirty years after defeating the Galactic Empire, Han Solo
        and his allies face a new threat from the evil Kylo Ren and
        his army of Stormtroopers.
        </div>
      <div data-toggled="true" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="movie">
    <img src="https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg" />
    <div className="overlay">
      <div className="title">Justice League</div>
      <div className="rating">6.2/10</div>
      <div className="plot">
        Fuelled by his restored faith in humanity and inspired by
        Superman's selfless act, Bruce Wayne and Diana Prince
        assemble a team of metahumans consisting of Barry Allen,
        Arthur Curry and Victor Stone to face the catastrophic
        threat of Steppenwolf and the Parademons who are on the hunt
        for three Mother Boxes on Earth.
        </div>
      <div data-toggled="true" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  </div>
</Fragment>
let partBlist = <Fragment>
  <div className="movie">
    <img src="https://image.tmdb.org/t/p/w500/fddtVEUozxvLmehR5yGZjem44pD.jpg" />
    <div className="overlay">
      <div className="title">Ant-Man</div>
      <div className="rating">7.1/10</div>
      <div className="plot">
        Armed with the astonishing ability to shrink in scale but
        increase in strength, master thief Scott Lang must embrace
        his inner-hero and help his mentor, Doctor Hank Pym, protect
        the secret behind his spectacular Ant-Man suit from a new
        generation of towering threats. Against seemingly
        insurmountable obstacles, Pym and Lang must plan and pull
        off a heist that will save the world.
        </div>
      <div data-toggled="true" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="movie">
    <img src="https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" />
    <div className="overlay">
      <div className="title">Star Wars</div>
      <div className="rating">8.2/10</div>
      <div className="plot">
        Princess Leia is captured and held hostage by the evil
        Imperial forces in their effort to take over the galactic
        Empire. Venturesome Luke Skywalker and dashing captain Han
        Solo team together with the loveable robot duo R2-D2 and
        C-3PO to rescue the beautiful princess and restore peace and
        justice in the Empire.
        </div>
      <div data-toggled="false" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="movie">
    <img src="https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" />
    <div className="overlay">
      <div className="title">Guardians of the Galaxy</div>
      <div className="rating">7.9/10</div>
      <div className="plot">
        Light years from Earth, 26 years after being abducted, Peter
        Quill finds himself the prime target of a manhunt after
        discovering an orb wanted by Ronan the Accuser.
        </div>
      <div data-toggled="false" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  </div>
</Fragment>
let partClist = [{key: 1, title: "Frozen II", rating: "7.3/10", plot: "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.", toggled: false, img: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg" }, { key: 2, title: "Scoob!", rating: "8/10", plot: "In Scooby-Doo’s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global “dogpocalypse,” the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.", toggled: false, img: "https://image.tmdb.org/t/p/w500/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg" }, {
  key: 3, title: "Spies in Disguise", rating: "7.7/10", plot: "Super spy Lance Sterling and scientist Walter Beckett are almost exact opposites.Lance is smooth, suave and debonair. Walter is… not.But what Walter lacks in social skills he makes up for in smarts and invention, creating the awesome gadgets Lance uses on his epic missions.But when events take an unexpected turn, Walter and Lance suddenly have to rely on each other in a whole new way.", toggled: false, img:"https://image.tmdb.org/t/p/w500/30YacPAcxpNemhhwX0PVUl9pVA3.jpg"}]

  class App extends Component {
    state = {
      search: false,
      listA: new TitleList({ genre: `Action`, list: partAlist }),
      listB: new TitleList({ genre: `Adventure`, list: partBlist }),
      listC: new TitleList({ genre: `Animation`, list: partClist })
    };

    render = () => {
      return (
        <Fragment>
          {Header()}
          {/* {this.state.listA.render()} */}
          {/* {this.state.listB.render()} */}
          {this.state.listC.render()}
        </Fragment>

      );
    };
  }

export default App;
