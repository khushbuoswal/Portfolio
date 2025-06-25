import componentsImg from './assets/components.png'
import jsxImg from './assets/jsx-ui.png';
import propsImg from './assets/config.png';
import stateImg from './assets/state-mgmt.png';

export const props = [
    {
        heading: 'Components',
        img: componentsImg,
        paragraph: 'The core UI building blocks of React applications. Components are reusable pieces of code that define how a certain part of the UI should look and behave.'
    },
    {
        heading: 'JSX',
        img: jsxImg,
        paragraph: 'A syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX makes it easier to visualize the UI structure and is transformed into React elements.'
    },
    {
        heading: 'props',
        img: propsImg,
        paragraph: 'Short for "properties", props are used to pass data from parent components to child components. They allow components to be dynamic and reusable by providing them with different data.'
    },
    {
        heading: 'state',
        img: stateImg,
        paragraph: 'A built-in object that stores property values that belong to a component. State can change over time, and when it does, the component re-renders to reflect those changes.'
    }
]

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
