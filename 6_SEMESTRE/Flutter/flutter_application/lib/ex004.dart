import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(const CalculadoraEquacaoQuadratica());
}

class CalculadoraEquacaoQuadratica extends StatelessWidget {
  const CalculadoraEquacaoQuadratica({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Calculadora de Equações Quadráticas',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const TelaCalculadoraEquacaoQuadratica(),
    );
  }
}

class TelaCalculadoraEquacaoQuadratica extends StatefulWidget {
  const TelaCalculadoraEquacaoQuadratica({Key? key}) : super(key: key);

  @override
  _TelaCalculadoraEquacaoQuadraticaState createState() =>
      _TelaCalculadoraEquacaoQuadraticaState();
}

class _TelaCalculadoraEquacaoQuadraticaState
    extends State<TelaCalculadoraEquacaoQuadratica> {
  double coeficienteA = 0.0;
  double coeficienteB = 0.0;
  double coeficienteC = 0.0;
  String resultado = '';

  void resolverEquacaoQuadratica() {
    if (coeficienteA == 0) {
      resultado = "O coeficiente A não pode ser zero.";
    } else {
      double discriminante = pow(coeficienteB, 2) - 4 * coeficienteA * coeficienteC;

      if (discriminante > 0) {
        double raiz1 = (-coeficienteB + sqrt(discriminante)) / (2 * coeficienteA);
        double raiz2 = (-coeficienteB - sqrt(discriminante)) / (2 * coeficienteA);
        resultado = "Raízes reais e diferentes: Raiz 1 = $raiz1, Raiz 2 = $raiz2";
      } else if (discriminante == 0) {
        double raiz = -coeficienteB / (2 * coeficienteA);
        resultado = "Raízes reais e iguais: Raiz = $raiz";
      } else {
        resultado = "Não existem raízes reais para os coeficientes dados.";
      }
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Calculadora de Equações Quadráticas'),
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
                  coeficienteA = double.tryParse(valor) ?? 0.0;
                });
              },
              decoration: const InputDecoration(
                labelText: 'Coeficiente A',
              ),
            ),
            TextField(
              keyboardType: TextInputType.number,
              onChanged: (valor) {
                setState(() {
                  coeficienteB = double.tryParse(valor) ?? 0.0;
                });
              },
              decoration: const InputDecoration(
                labelText: 'Coeficiente B',
              ),
            ),
            TextField(
              keyboardType: TextInputType.number,
              onChanged: (valor) {
                setState(() {
                  coeficienteC = double.tryParse(valor) ?? 0.0;
                });
              },
              decoration: const InputDecoration(
                labelText: 'Coeficiente C',
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: resolverEquacaoQuadratica,
              child: const Text('Resolver'),
            ),
            const SizedBox(height: 20),
            Text(resultado),
          ],
        ),
      ),
    );
  }
}
