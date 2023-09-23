import 'package:flutter/material.dart';
import '../helper/databaseHelper.dart';
import '../main.dart';
import '../model/medicamento.dart';
import 'dart:io';

class ListaMedicamentosPage extends StatefulWidget {
  @override
  _ListaMedicamentosPageState createState() => _ListaMedicamentosPageState();
}

class _ListaMedicamentosPageState extends State<ListaMedicamentosPage> {
  final _dbHelper = DatabaseHelper.instance;

  Future<List<Medicamento>> _fetchMedicamentos() async {
    return await _dbHelper.getAllMedicamentos();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Lista de Medicamentos'),
      ),
      body: FutureBuilder<List<Medicamento>>(
        future: _fetchMedicamentos(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return CircularProgressIndicator();
          } else if (snapshot.hasError) {
            return Text('Erro: ${snapshot.error}');
          } else {
            final medicamentos = snapshot.data!;
            return ListView.builder(
              itemCount: medicamentos.length,
              itemBuilder: (context, index) {
                final medicamento = medicamentos[index];
                return ListTile(
                  leading: medicamento.imagemUrl != null && medicamento.imagemUrl!.isNotEmpty
                      ? Image.file(
                          File(medicamento.imagemUrl!),
                          width: 50,
                          height: 50,
                          fit: BoxFit.cover,
                        )
                      : Icon(Icons.image_not_supported),  // Ícone padrão se não houver imagem
                  title: Text(medicamento.nome),
                  subtitle: Text(medicamento.descricao),
                  trailing: IconButton(
                    icon: Icon(Icons.edit),
                    onPressed: () => _editarMedicamento(context, medicamento),
                  ),
                );
              },
            );
          }
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => MedicamentoPage()),
          ).then((value) {
            setState(() {});  // Atualiza a lista após adicionar/editar um medicamento
          });
        },
      ),
    );
  }

  void _editarMedicamento(BuildContext context, Medicamento medicamento) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => MedicamentoPage(medicamento: medicamento)),
    ).then((value) {
      setState(() {});  // Atualiza a lista após adicionar/editar um medicamento
    });
  }
}
