import 'package:flutter/material.dart';

void main() {
  runApp(const CalculadoraSalarioApp());
}

class CalculadoraSalarioApp extends StatelessWidget {
  const CalculadoraSalarioApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Calculadora de Salário',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const TelaCalculadoraSalario(),
    );
  }
}

class TelaCalculadoraSalario extends StatefulWidget {
  const TelaCalculadoraSalario({Key? key}) : super(key: key);

  @override
  _TelaCalculadoraSalarioState createState() => _TelaCalculadoraSalarioState();
}

class _TelaCalculadoraSalarioState extends State<TelaCalculadoraSalario> {
  double salarioBruto = 0.0;
  double salarioLiquido = 0.0;

  void calcularSalarioLiquido() {
    double previdencia = salarioBruto * 0.10;
    double imposto = (salarioBruto - previdencia) * 0.05;
    salarioLiquido = salarioBruto - previdencia - imposto;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Calculadora de Salário'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              keyboardType: TextInputType.number,
              onChanged: (valor) {
                setState(() {
                  salarioBruto = double.tryParse(valor) ?? 0.0;
                });
              },
              decoration: const InputDecoration(
                labelText: 'Salário Bruto',
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: calcularSalarioLiquido,
              child: const Text('Calcular'),
            ),
            const SizedBox(height: 20),
            Text('Salário líquido: $salarioLiquido'),
          ],
        ),
      ),
    );
  }
}
