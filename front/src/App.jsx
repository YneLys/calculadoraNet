import { useState } from "react";
import "./App.css";

function App() {
  const [valor, setValor] = useState("0");
  const [numeroAnterior, setNumeroAnterior] = useState(null);
  const [operador, setOperador] = useState(null);
  const [limparTela, setLimparTela] = useState(false);

  function digitar(numero) {
    if (valor === "0" || limparTela) {
      setValor(numero);
      setLimparTela(false);
    } else {
      setValor(valor + numero);
    }
  }

  function escolherOperador(op) {
    setNumeroAnterior(Number(valor));
    setOperador(op);
    setLimparTela(true);
  }

  function calcular() {
    const numeroAtual = Number(valor);
    let resultado = 0;

    switch (operador) {
      case "+":
        resultado = numeroAnterior + numeroAtual;
        break;
      case "-":
        resultado = numeroAnterior - numeroAtual;
        break;
      case "*":
        resultado = numeroAnterior * numeroAtual;
        break;
      case "/":
        if (numeroAtual === 0) {
          setValor("Erro");
          return;
        }
        resultado = numeroAnterior / numeroAtual;
        break;
      default:
        return;
    }

    setValor(String(resultado));
    setNumeroAnterior(null);
    setOperador(null);
  }

  function limpar() {
    setValor("0");
    setNumeroAnterior(null);
    setOperador(null);
    setLimparTela(false);
  }

  function raiz() {
    setValor(String(Math.sqrt(Number(valor))));
  }

  function potencia2() {
    setValor(String(Math.pow(Number(valor), 2)));
  }

  return (
    <div className="calculadora">
      <div className="topo">
        <span>☰</span>
        <h2>Padrão</h2>
      </div>

      <div className="display">{valor}</div>

      <div className="botoes">
        <button onClick={() => setValor(String(Number(valor) / 100))}>%</button>
        <button onClick={limpar}>CE</button>
        <button onClick={limpar}>C</button>
        <button onClick={() => setValor(valor.slice(0, -1) || "0")}>⌫</button>

        <button onClick={() => setValor(String(1 / Number(valor)))}>1/x</button>
        <button onClick={potencia2}>x²</button>
        <button onClick={raiz}>²√x</button>
        <button onClick={() => escolherOperador("/")}>÷</button>

        <button onClick={() => digitar("7")}>7</button>
        <button onClick={() => digitar("8")}>8</button>
        <button onClick={() => digitar("9")}>9</button>
        <button onClick={() => escolherOperador("*")}>×</button>

        <button onClick={() => digitar("4")}>4</button>
        <button onClick={() => digitar("5")}>5</button>
        <button onClick={() => digitar("6")}>6</button>
        <button onClick={() => escolherOperador("-")}>−</button>

        <button onClick={() => digitar("1")}>1</button>
        <button onClick={() => digitar("2")}>2</button>
        <button onClick={() => digitar("3")}>3</button>
        <button onClick={() => escolherOperador("+")}>+</button>

        <button onClick={() => setValor(String(Number(valor) * -1))}>+/-</button>
        <button onClick={() => digitar("0")}>0</button>
        <button onClick={() => digitar(".")}>,</button>
        <button className="igual" onClick={calcular}>=</button>
      </div>
    </div>
  );
}

export default App;