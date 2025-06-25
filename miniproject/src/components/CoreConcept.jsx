export default function CoreConcept({img, heading, paragraph}) { // destructuring the props object
  return(
      <li>
        <img src = {img} alt = {heading} />
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </li>
  );
}