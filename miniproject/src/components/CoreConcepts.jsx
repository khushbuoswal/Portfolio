import {props} from '../Data.js';
import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts() {
    return (
        <section id = "core-concepts">
                   <h2>Core Concepts</h2>
                   <ul>
                    {props.map((object) => (<CoreConcept {...object} />))}
                   </ul>
                </section>

    );

}