function YourColor(props){

    const { name, favoriteColor, onColorChange } = props;

    return (
        <div>
            <h2 style={{color: favoriteColor}}>Dobrodošli {name}!</h2>
            <p>Molimo odaberite omiljenu boju:</p>
            <input type="color" onChange={onColorChange} />
        </div>
    );

}

export default YourColor;