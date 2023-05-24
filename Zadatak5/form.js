<form>
	<label>Ime i prezime:</label><br />
	<input type="text" name="imePrezime" />
	<br /><br />
	<label>Godina rođenja: </label><br />
	<input type="number" name="godinaRodenja"  />
	<br /><br />
	<label>Spol: </label><br />
	<label htmlFor="m">Muško</label>
	<input type="radio" id="m" name="spol" value="M"  />
	<label htmlFor="z">Žensko</label>
	<input type="radio" id="z" name="spol" value="Ž"  />
	<br /><br />
	<label>Program obrazovanja: </label><br />
	<select name="programObrazovanja" >
		<option value="">Odaberite program obrazovanja</option>
		<option value="Web dizajn">Web dizajn</option>
		<option value="PHP">PHP</option>
		<option value="Front-End">Front-End</option>
		<option value="ASP.NET">ASP.NET</option>
	</select>
	<br /><br />
	<label>Ocjena: </label><br />
	<label htmlFor="ocjena5">5</label>
	<input type="radio" id="ocjena5" name="ocjena" value="5"  />
	<label htmlFor="ocjena4">4</label>
	<input type="radio" id="ocjena4" name="ocjena" value="4"  />
	<label htmlFor="ocjena3">3</label>
	<input type="radio" id="ocjena3" name="ocjena" value="3"  />
	<label htmlFor="ocjena2">2</label>
	<input type="radio" id="ocjena2" name="ocjena" value="2"  />
	<label htmlFor="ocjena1">1</label>
	<input type="radio" id="ocjena1" name="ocjena" value="1"  />
	<br /><br />
	<input type="submit" value="Predaj" />
</form>