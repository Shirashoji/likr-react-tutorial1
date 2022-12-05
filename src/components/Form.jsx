import { fetchBreeds } from "./breeds.js";
import { useEffect, useState } from "react";

function BreedSelect(props) {
    const { breeds } = props;
    if (breeds == null) {
        return (
            <select name="breed" defaultValue="affenpinscher" >
                <option value="affenpinscher" >affenpinscher</option >
            </select>
        );
    }
    return (
        <select name="breed" defaultValue="affenpinscher" >
            {
                breeds.map(breed => (
                    <option key={breed} value={breed} > {breed}</option >
                ))
            }
        </select >

    );
}

function Form(props) {
    const [breeds, setBreeds] = useState(null);
    useEffect(() => {
        fetchBreeds().then((breeds) => {
            setBreeds(breeds);
        });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const { breed } = event.target.elements;
        props.onFormSubmit(breed.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="field has-addons" >
                    <div className="control is-expanded" >
                        <div className="select is-fullwidth" >
                            <BreedSelect breeds={breeds} />
                        </div >
                    </div >
                    <div className="control" >
                        <button type="submit" className="button is-dark" >
                            Reload
                        </button >
                    </div >
                </div >
            </form >
        </div >
    );
}

export default Form;