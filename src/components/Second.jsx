import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Second = props => {
    const [planets, setPlanets] = useState(null);
    // might have to change it from people to planets
    const [id, setId] = useState(1);
    const [resetPlanets, setResetPlanets] = useState(false);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            // ${} string interpolation
            // Changed from  "" to ``
        .then(res =>
            setPlanets(res.data))
        
        
    }, [resetPlanets]);

    // I might need onSubmitHandler variable
    const onSubmitHandler = e => {
        e.preventDefault();
        setResetPlanets(!resetPlanets);
    }

    return (
        <>
        <h3>Time to work</h3>
        <form onSubmit={onSubmitHandler}>
            <div className="d-flex flex-row justify-content-around">
                <h2>Search for:
                    <select name="people_4">
                        <option value="">people</option>
                        <option value="">planets</option>
                        <option value="">testing</option>

                    </select>
                </h2>
                <h2>ID: 
                    <input type="number" name="id" onChange={e => setId(e.target.value)}/>
                    <button className="btn btn-primary">Search</button>
                </h2>
            </div>
        </form>
        {
            planets ? <div>
                <h2>{planets.name}</h2>
                <h3>Climate: {planets.climate}</h3>
                <h3>Terrain: {planets.terrian}</h3>
                <h3>Surface Water: {planets.surface_water}</h3>
                <h3>Population: {planets.population}</h3>
            </div> : ""
        }


        </>
    );
}

export default Second;


