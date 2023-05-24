function Obrazac({imePrezime, godinaRodenja, spol, programObrazovanja, ocjena, onFormSubmit, onDataChange}){

    return (
        <div>
            <h1>Anketa</h1>
            <form onSubmit={onFormSubmit}>
                <label>Ime i prezime: <strong>{imePrezime}</strong></label><br />
                <input type="text" name="imePrezime" onChange={onDataChange} />
                <br /><br />
                <label>Godina rođenja: <strong>{godinaRodenja}</strong></label><br />
                <input type="number" name="godinaRodenja" onChange={onDataChange} />
                <br /><br />
                <label>Spol: <strong>{spol}</strong></label><br />
                <label htmlFor="m">Muško</label>
                <input type="radio" id="m" name="spol" value="M" onChange={onDataChange} />
                <label htmlFor="z">Žensko</label>
                <input type="radio" id="z" name="spol" value="Ž" onChange={onDataChange} />
                <br /><br />
                <label>Program obrazovanja: <strong>{programObrazovanja}</strong></label><br />
                <select name="programObrazovanja" onChange={onDataChange}>
                    <option value="">Odaberite program obrazovanja</option>
                    <option value="Web dizajn">Web dizajn</option>
                    <option value="PHP">PHP</option>
                    <option value="Front-End">Front-End</option>
                    <option value="ASP.NET">ASP.NET</option>
                </select>
                <br /><br />
                <label>Ocjena: <strong>{ocjena}</strong></label><br />
                <label htmlFor="ocjena5">5</label>
                <input type="radio" id="ocjena5" name="ocjena" value="5" onChange={onDataChange} />
                <label htmlFor="ocjena4">4</label>
                <input type="radio" id="ocjena4" name="ocjena" value="4" onChange={onDataChange} />
                <label htmlFor="ocjena3">3</label>
                <input type="radio" id="ocjena3" name="ocjena" value="3" onChange={onDataChange} />
                <label htmlFor="ocjena2">2</label>
                <input type="radio" id="ocjena2" name="ocjena" value="2" onChange={onDataChange} />
                <label htmlFor="ocjena1">1</label>
                <input type="radio" id="ocjena1" name="ocjena" value="1" onChange={onDataChange} />
                <br /><br />
                <input type="submit" value="Predaj" />
            </form>
        </div>
    );

}

export default Obrazac;