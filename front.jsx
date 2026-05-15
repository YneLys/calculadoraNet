import React, { useState } from "react";
import { Calculator, RotateCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CalculadoraReact() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operador, setOperador] = useState("+");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  function calcular() {
    setErro("");
    setResultado(null);

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    if (numero1 === "" || isNaN(n1)) {
      setErro("Digite um primeiro número válido.");
      return;
    }

    const operacoesComDoisNumeros = ["+", "-", "*", "/", "^"];

    if (operacoesComDoisNumeros.includes(operador)) {
      if (numero2 === "" || isNaN(n2)) {
        setErro("Digite um segundo número válido.");
        return;
      }
    }

    let valorCalculado;

    switch (operador) {
      case "+":
        valorCalculado = n1 + n2;
        break;

      case "-":
        valorCalculado = n1 - n2;
        break;

      case "*":
        valorCalculado = n1 * n2;
        break;

      case "/":
        if (n2 === 0) {
          setErro("Erro: divisão por zero não é permitida.");
          return;
        }
        valorCalculado = n1 / n2;
        break;

      case "^":
        valorCalculado = Math.pow(n1, n2);
        break;

      case "raiz":
        if (n1 < 0) {
          setErro("Erro: não existe raiz quadrada real de número negativo.");
          return;
        }
        valorCalculado = Math.sqrt(n1);
        break;

      case "log":
        if (n1 <= 0) {
          setErro("Erro: logaritmo só existe para números positivos.");
          return;
        }
        valorCalculado = Math.log10(n1);
        break;

      default:
        setErro("Operação inválida.");
        return;
    }

    setResultado(valorCalculado);
  }

  function limpar() {
    setNumero1("");
    setNumero2("");
    setOperador("+");
    setResultado(null);
    setErro("");
  }

  const precisaSegundoNumero = ["+", "-", "*", "/", "^"].includes(operador);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-md rounded-2xl shadow-xl">
        <CardContent className="p-6 space-y-5">
          <div className="text-center space-y-2">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Calculator size={28} />
            </div>
            <h1 className="text-2xl font-bold">Calculadora</h1>
            <p className="text-sm text-slate-500">
              Soma, subtração, multiplicação, divisão, potência, raiz e logaritmo.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Primeiro número</label>
            <input
              type="number"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
              placeholder="Ex: 10"
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Operação</label>
            <select
              value={operador}
              onChange={(e) => setOperador(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-slate-400"
            >
              <option value="+">Soma (+)</option>
              <option value="-">Subtração (-)</option>
              <option value="*">Multiplicação (*)</option>
              <option value="/">Divisão (/)</option>
              <option value="^">Potência (^)</option>
              <option value="raiz">Raiz quadrada</option>
              <option value="log">Logaritmo base 10</option>
            </select>
          </div>

          {precisaSegundoNumero && (
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {operador === "^" ? "Expoente" : "Segundo número"}
              </label>
              <input
                type="number"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
                placeholder={operador === "^" ? "Ex: 3" : "Ex: 5"}
                className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <Button onClick={calcular} className="rounded-xl p-6 text-base">
              Calcular
            </Button>
            <Button onClick={limpar} variant="outline" className="rounded-xl p-6 text-base gap-2">
              <RotateCcw size={18} />
              Limpar
            </Button>
          </div>

          {erro && (
            <div className="rounded-xl bg-red-100 border border-red-300 p-4 text-red-700 text-sm">
              {erro}
            </div>
          )}

          {resultado !== null && !erro && (
            <div className="rounded-xl bg-green-100 border border-green-300 p-4 text-center">
              <p className="text-sm text-green-700">Resultado</p>
              <p className="text-3xl font-bold text-green-900">{resultado}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
