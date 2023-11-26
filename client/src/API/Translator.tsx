import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

const Translator = () => {
    const translate = () => {
        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    
        const options = {
	        method: 'POST',
	        headers: {
                'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'fe97b732d5msh277a29916ba192ep178ad2jsn071fc23278db',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: new URLSearchParams({
                q: 'Hello, world!',
                target: 'fr',
                source: 'en'
            })
};

        fetch(url, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    return(
        <section className="translator">
            <div className="row-wrapper">
                <div className="translator-container input-lang">
                    <div className="top-row">
                        <button className="btn btn-primary btn-translate" onClick={translate}>
                            Translate
                        </button>
                    </div>
                    <form className="input-form">
                        <textarea className="text-box" placeholder="Enter text (any language)">
                        </textarea>
                    </form>
                </div>
                <div className="translator-container output-lang">
                    <div className="top-row">
                        <select name="languages" id="languages" className="form-select form-select-sm">
                            <option value="ar">Arabic</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="es">Spanish</option>
                        </select>
                        <p className="text-box output-box">
                            Output text
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

   


export default Translator;