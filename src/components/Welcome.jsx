import '../stylesheets/Welcome.css';
import Owl from './Owl';
const Welcome = ({ storyMode, toggleStoryMode, toggleShowWelcome }) => {
  const handleStory = (event) => {
    const answer = event.target.id === 'yes' ? true : false;
    toggleStoryMode(answer);
  };

  const handleStart = () => {
    toggleShowWelcome();
  }

  const showStart = storyMode === true || storyMode === false ? true : false;

  return (
    <section className='welcome'>
      <article className='welcome-message'>
        <p>Welcome to Owl Array, a game where you help the Owl Family with daily tasks.</p>
        <p>To pass each level, you'll need to modify variables and arrays by using built-in JavaScript functions.</p>

        <div className='owl-container'>
          <Owl owl='mrOwl' levelClear={storyMode} />
          <Owl owl='mrsOwl' levelClear={storyMode} />
        </div>

        <aside className='story-mode--start'>
          <p>Would you like to play on Story Mode?</p>
          <div className='yes-no-container'>
            <span 
              id='yes' 
              className={storyMode ?
                'yes-no-option yes-selected' :
                'yes-no-option'}
              onClick={handleStory}
              translate='no'
            >
              Yes
            </span>
            <span 
              id='no'
              className={storyMode === false ?
                'yes-no-option no-selected' :
                'yes-no-option'}
              onClick={handleStory}
              translate='no'
            >
              No
            </span>
          </div>
          {showStart && <>
            <p className='story-mode-comment'>If you change your mind, you can toggle this option on the menu</p>
            <button id='start-button' onClick={handleStart}>
              Start
            </button>
          </>}
        </aside>
      </article>
    </section>
  );
};

export default Welcome;