function MapArray() {
    const days = ["Mon", "Tues", "Wed"];
    // const daysElements = [<h1>Mon</h1>, <h1>Tues</h1>, <h1>Wed</h1>];

    //using map method
    const daysElements = days.map(item => <h1>{item}</h1>);

    return <h1>{daysElements}</h1>
}
export default MapArray;