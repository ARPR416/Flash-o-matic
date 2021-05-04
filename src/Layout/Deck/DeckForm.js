import React from "react";

export default function DeckForm ({formData, handleChange}) {
//create form template for deck
return (
    <div>
        <label>
            Name:
        </label> <br />
            <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            style={{ width: "100%" }}
            />
        <br />
        <br />
        <label>
            Description:
        </label> <br />
            <textarea
            id="description"
            type="textarea"
            name="description"
            rows="3"
            onChange={handleChange}
            value={formData.description}
            style={{ width: "100%" }}
            />
        <br />
    </div>
    )
};
