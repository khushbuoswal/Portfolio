import {useState} from 'react'
import Header from './components/Header/Header.jsx'
import {props} from './data.js';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
}
  return (
    <>
      <Header />
      <main>
        <section id = "core-concepts">
           <h2>Core Concepts</h2>
           <ul>
            {props.map((object) => (<CoreConcept {...object} />))}
           </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedTopic === 'components'} onSelect = {() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected = {selectedTopic === 'jsx'} onSelect = {() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === 'props'} onSelect = {() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === 'state'} onSelect = {() => handleClick('state')}>State</TabButton>
          </menu>
          {selectedTopic ? <div id = "tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div> : "Please select a topic to view its example."
          }

        </section>
      </main>
    </>

  );
}

export default App;
