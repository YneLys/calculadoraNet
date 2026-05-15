Console.WriteLine("===Calculadora===");

Console.Write("Digite o primeiro número: ");
double numero1 = Convert.ToDouble(Console.ReadLine());

Console.Write("Digite o operador (+, -, *, /): ");
string operador = Console.ReadLine();

Console.Write("Digite o segundo númeroo: ");
double numero2 = Convert.ToDouble(Console.ReadLine());

double resultado = 0;

switch (operador)
{
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 != 0)
        {
            resultado = numero1 / numero2;
        }
        else
        {
            Console.WriteLine("Erro: Divisão por zero não é permitida.");
            return;
        }
        break;
    default:
        Console.WriteLine("Operador inválido.");
        return;
}

Console.WriteLine($"Resultado: {resultado}");