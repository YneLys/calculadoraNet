Console.WriteLine("===Calculadora===");

Console.Write("Digite o primeiro número: ");
double numero1 = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("\nOperações disponíveis: ");
Console.WriteLine("+ Soma");
Console.WriteLine("- Subtração");
Console.WriteLine("* Multiplicação"); 
Console.WriteLine("/ Divisão");
Console.WriteLine("^ Potenciação");
Console.WriteLine("r Raiz quadrada");
Console.WriteLine("log Logaritmo base 10");

Console.Write("\nDigite a operação desejada: ");
string operador = Console.ReadLine() ?? "";

double resultado = 0;

switch(operador)
{
    case "+":
        Console.Write("Digite o segundo número: ");
        double soma = Convert.ToDouble(Console.ReadLine());
       
        resultado = numero1 + soma;
        break;
        
    case "-":
        Console.Write("Digite o segundo número: ");
        double subtracao = Convert.ToDouble(Console.ReadLine());
        
        resultado = numero1 - subtracao;
        break;
        
    case "*":
        Console.Write("Digite o segundo número: ");
        double multiplicacao = Convert.ToDouble(Console.ReadLine());
        resultado = numero1 * multiplicacao;
        break;

    case "/":
        Console.Write("Digite o segundo número: ");
        double divisao = Convert.ToDouble(Console.ReadLine());
        if (divisao != 0)
            resultado = numero1 / divisao;
        else
            Console.WriteLine("Erro: Divisão por zero não é permitida.");
        break;
        
    case "^":
        Console.Write("Digite o expoente: ");
        double potencia = Convert.ToDouble(Console.ReadLine());
        resultado = Math.Pow(numero1, potencia);
        break;

    case "r":
        if (numero1 >= 0)
        {
            resultado = Math.Sqrt(numero1);
        }
            
        else
        {
            Console.WriteLine("Erro: Não é possível calcular a raiz quadrada de um número negativo.");  
        }
            
        break;

    case "log":
        if (numero1 > 0)
        {
            resultado = Math.Log10(numero1);
        }
            
        else
        {
            Console.WriteLine("Erro: Logaritmo de números não positivos não é definido.");
        }
        break;

    default:
        Console.WriteLine("Operação inválida.");
        return;
}

Console.WriteLine($"\nResultado: {resultado}");