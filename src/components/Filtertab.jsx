import React from "react";

export default function Filtertab(props) {
    return (
        <section className="filter-container">
            <form onSubmit={props.handleSubmit}>
                <input type="text" name='queryItem' value={props.queryItemName} onChange={props.handleItemNameChange}/>
                <input type="submit" value="Find"/>
            </form>
        </section>
    )
} 