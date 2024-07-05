import Items from "./Items";

export default function TripList(props) {
    return (
        <>
            <h1>{props.title}</h1>

            <h2>
                <Items url="https://www.valthorens.com/">
                    {props.destinations[0]}
                </Items>
            </h2>
            <h3>
                <Items url="https://www.lesorres.com/">
                    {props.destinations[3]}
                </Items>
            </h3>
            <h4>
                <Items url="https://www.vars.com/">
                    {props.destinations[2]}
                </Items>
            </h4>
            <h5>
                <Items url="https://en.tignes.net/">
                    {props.destinations[1]}
                </Items>
            </h5>
        </>
    );
}