import React, {useState, useEffect} from 'react';
import axios from 'axios';


const First = props => {
    const [people, setPeople] = useState(null);
    // to keep track
    const [id, setId] = useState(1);
    // to keep track of people
    const [category, setCategory] = useState("people");
        // auto populate with "people"
    const [resetPeople, setResetPeople] = useState(false);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            // ${} string interpolation
            // Changed from  "" to ``
        .then(res =>
            setPeople(res.data))
        
        
    }, [resetPeople]);

    // I might need onSubmitHandler variable
    const onSubmitHandler = e => {
        e.preventDefault();
        setResetPeople(!resetPeople);
    }

    return (
        <>
        <h3>Time to work</h3>
        <form onSubmit={onSubmitHandler}>
            <div className="d-flex flex-row justify-content-around">
                <h2>Search for:
                    <select name="people_4" onChange={e => setCategory(e.target.value)}>
                        {/*  value =" " allows us to get data from the form */}
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="">testing</option>

                    </select>
                </h2>
                <h2>ID: 
                    <input type="number" name="id" onChange={e => setId(e.target.value)}/>
                    <input type="submit" className="btn btn-primary" value="Search"  />
                </h2>
            </div>
        </form>
        {
            people ? category == "people" ? <div>
                <h2>{people.name}</h2>
                <h3>Height: {people.height}</h3>
                <h3>Mass: {people.mass}</h3>
                <h3>Hair Color: {people.hair_color}</h3>
                <h3>Skin Color: {people.skin_color}</h3>

            </div> :
            <div>
                
                <h2>{people.name}</h2>
                <h3>Climate: {people.climate}</h3>
                <h3>Terrain: {people.terrian}</h3>
                <h3>Surface Water: {people.surface_water}</h3>
                <h3>Population: {people.population}</h3>
            </div> : ""

        }


        </>
    );
}

export default First;




