import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

interface TranslatorProps {
    text: string;
}

const Translator: React.FC<TranslatorProps> = ({ text }) => {
    const translate = () => {
        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    
        const options = {
	        method: 'POST',
	        headers: {
                'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'a3d420427cmsha3e3c6fccc8b3e3p185632jsn70f7cf7b69e1',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: new URLSearchParams({
                q: text,
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
        <section className="translator text-black">
            <div className="row-wrapper">
                <div className="translator-container input-lang">
                    <div className="top-row">
                        <button className="btn btn-primary btn-translate text-black" onClick={translate}>
                        </button>
                    </div>
                    <form className="input-form">
                        <textarea className="text-box text-black align-center" placeholder="Enter text (any language)">
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
                        {/* <p className="text-black text-box output-box">
                            Output text
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Translator;