import { useState } from "react";
import "./App.css";

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operador, setOperador] = useState("+");
  const [resultado, setResultado] = useState("");

  function calcular() {
    const n1 = Number(numero1);
    const n2 = Number(numero2);

    let conta;

    switch (operador) {
      case "+":
        conta = n1 + n2;
        break;
      case "-":
        conta = n1 - n2;
        break;
      case "*":
        conta = n1 * n2;
        break;
      case "/":
        if (n2 === 0) {
          setResultado("Erro: divisão por zero");
          return;
        }
        conta = n1 / n2;
        break;
      case "^":
        conta = Math.pow(n1, n2);
        break;
      case "raiz":
        conta = Math.sqrt(n1);
        break;
      case "log":
        conta = Math.log10(n1);
        break;
      default:
        conta = "Operador inválido";
    }

    setResultado(conta);
  }

  return (
    <div className="container">
      <h1>Calculadora</h1>

      <input
        type="number"
        placeholder="Primeiro número"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <select value={operador} onChange={(e) => setOperador(e.target.value)}>
        <option value="+">Soma</option>
        <option value="-">Subtração</option>
        <option value="*">Multiplicação</option>
        <option value="/">Divisão</option>
        <option value="^">Potência</option>
        <option value="raiz">Raiz quadrada</option>
        <option value="log">Logaritmo</option>
      </select>

      <input
        type="number"
        placeholder="Segundo número"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />

      <button onClick={calcular}>Calcular</button>

      <h2>Resultado: {resultado}</h2>
    </div>
  );
}

export default App;