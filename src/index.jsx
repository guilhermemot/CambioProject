import { render } from 'preact';
import 'milligram/dist/milligram.min.css';
import { useState } from 'preact/hooks';

export function App() {
	const [valorEntrada, setValorEntrada] = useState(0);
	const [moedaEntrada, setMoedaEntrada] = useState('USD');

	const [valorSaida, setValorSaida] = useState(0);
	const [moedaSaida, setMoedaSaida] = useState('USD');

	const inverter = () =>{
		
		setValorEntrada(valorSaida);
		setValorSaida(valorEntrada);

		setMoedaEntrada(moedaSaida);
		setMoedaSaida(moedaEntrada);
	}

	return (<div>
		<h1>Cambio Project</h1>
		<h4>Choose your currency</h4>
		<input type="number"
			   value={valorEntrada}
			   onChange={(e) => setValorEntrada(e.target.value)}/>
		<select
			value={moedaEntrada}
			onChange={(e) => setMoedaEntrada(e.target.value)}>
			<option>USD</option>
			<option>EUR</option>
			<option>GBP</option>
		</select>
		<button onClick={inverter}>Inverter</button>
		<input type="number" disabled value={valorSaida}/>
		<select>
			<option>USD</option>
			<option>EUR</option>
			<option>GBP</option>
		</select>

	</div>)
}

render(<App />, document.getElementById('app-cambio'));
