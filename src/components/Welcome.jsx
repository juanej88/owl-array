import '../stylesheets/Welcome.css';
import Owl from './Owl';
const Welcome = ({ storyMode, toggleStoryMode }) => {
  const handleClick = (event) => {
    const answer = event.target.id === 'yes' ? true : false;
    toggleStoryMode(answer);
  };

  return (
    <section className='welcome'>
      <article className='welcome-message'>
        <p>Welcome to Owl Array, a game where you help the Owl Family with daily tasks.</p>
        <p>To clear each level, you'll need to modify variables and arrays by using built-in JavaScript functions.</p>

        <div className='owl-container'>
          <Owl owl='mrOwl' levelClear={false} />
          <Owl owl='mrsOwl' levelClear={false} />
        </div>

        <aside className='story-mode--start'>
          <p>Would you like to play on Story Mode?</p>
          <div className='yes-no-container'>
            <span 
              id='yes' 
              className={storyMode ?
                'yes-no-option option-selected' :
                'yes-no-option'}
              onClick={handleClick}
            >
              Yes
            </span>
            <span 
              id='no'
              className={!storyMode ?
                'yes-no-option option-selected' :
                'yes-no-option'}
              onClick={handleClick}
            >
              No
            </span>
          </div>
          <p className='story-mode-comment'>If you change your mind, you can toggle this option on the menu</p>
          <button id='start-button'>Start</button>
        </aside>
      </article>
      
      
      
      
    </section>
  );
};

export default Welcome;