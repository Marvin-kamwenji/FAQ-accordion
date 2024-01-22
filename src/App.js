import './App.css';
import headerIcon from './assets/images/icon-star.svg';
import plusIcon from './assets/images/icon-plus.svg';
import minusIcon from './assets/images/icon-minus.svg';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={headerIcon} alt="header icon" className="header__icon"/>
        <h1 className="header__title">FAQS</h1>
      </div>
      <div className="questions">
        <div className="question__one">
          <div className="question__header">
            <h1 className="question__title">
             What is Frontend Mentor, and how will it help me?
           </h1>
           <button className="plus__button">
             <img src={plusIcon} alt="plus icon" className="plus__icon"/>
           </button>
          </div>
          <p className="question__desc">
            Frontend Mentor offers realistic coding  challenges to help developers improve their frontend coding
            skills with projects in HTML, CSS and javascript. It's suitable for all levels and ideal for portfolio
            building.
          </p>
        </div>
        <div className="question__two">
          <div className="question__header">
            <h1 className="question__title">Is Frontend Mentor free?</h1>
            <button className="plus__button">
              <img src={plusIcon} alt="plus icon" className="plus__icon"/>
            </button>
          </div>
          <p className="question__desc">
            The majority of our challenges are free, yes. We do have some that are premium and require
             a Pro subscription to access. It will say on each challenge whether they are free or 
             premium, so it's easy to tell the difference.
          </p>
        </div>
        <div className="question__three">
          <div className="question__header">
            <h1 className="question__title">Can I use Frontend Mentor projects in my portfolio?</h1>
            <button className="plus__button">
              <img src={plusIcon} alt="plus icon" className="plus__icon"/>
            </button>
          </div>
          <p className="question__desc">
           Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers
           add professional-looking projects to their portfolio was one of the reasons we created this 
           platform!
          </p>
        </div>
        <div className="question__four">
          <div className="question__header">
            <h1 className="question__title">How can I get help if I'm stuck on a challenge?</h1>
            <button className="plus__button">
              <img src={plusIcon} alt="plus icon" className="plus__icon"/>
            </button>
          </div>
          <p className="question__desc">
            The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands
            of other developers in there, so it's a great place to ask questions. We even have a dedicated 
           "help" channel! If you haven't joined yet, you can get an invite to our Discord server here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
