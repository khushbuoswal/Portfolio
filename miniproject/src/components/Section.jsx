export default function Section({title, children, ...props}){ //...props is equal to id style and className- forwarding props to wrap element
    return (
        <section {...props}>
            <h2> 
                {title}
            </h2>
            {children}
        </section>

    );

}