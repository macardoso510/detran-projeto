import React from "react";
import './Form.css'

export default function Form() {
    return (
        <div className="form-container">

            <div className="col-sm-8 col-lg-3">
                <div className="br-input">
                    <label for="input-default">Nome</label>
                    <input id="input-default" type="text" placeholder="Placeholder" />
                    <p>Texto auxiliar. Função de previnir erros.</p>
                </div>
                
            </div>
            

        </div>
    )
}