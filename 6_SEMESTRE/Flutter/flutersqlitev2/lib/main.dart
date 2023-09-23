import 'package:flutersqlitev2/pages/lista_medicamentos_page.dart';
import 'package:flutter/material.dart';
import 'helper/databaseHelper.dart';
import 'dart:io';
import 'package:image_picker/image_picker.dart';
import 'model/medicamento.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ListaMedicamentosPage(),
    );
  }
}

class MedicamentoPage extends StatefulWidget {
  final Medicamento? medicamento;

  MedicamentoPage({this.medicamento});

  @override
  _MedicamentoPageState createState() => _MedicamentoPageState();
}

class _MedicamentoPageState extends State<MedicamentoPage> {
  final _nomeController = TextEditingController();
  final _descricaoController = TextEditingController();
  String? _imagemUrl;
  final _dbHelper = DatabaseHelper.instance;

  @override
  void initState() {
    super.initState();
    if (widget.medicamento != null) {
      _nomeController.text = widget.medicamento!.nome;
      _descricaoController.text = widget.medicamento!.descricao;
      _imagemUrl = widget.medicamento!.imagemUrl;
    }
  }

  Future<void> _selecionarImagem() async {
    final pickedFile = await ImagePicker().getImage(source: ImageSource.gallery);
    if (pickedFile != null) {
      setState(() {
        _imagemUrl = pickedFile.path;
      });
    }
  }

Future<void> _salvarMedicamento() async {
    final nome = _nomeController.text;
    final descricao = _descricaoController.text;

    if (nome.isNotEmpty && descricao.isNotEmpty) {
      final medicamento = Medicamento(
        id: widget.medicamento?.id ?? null,
        nome: nome,
        descricao: descricao,
        imagemUrl: _imagemUrl ?? '',
      );

      if (widget.medicamento == null) {
        await _dbHelper.insert(medicamento);
      } else {
        await _dbHelper.update(medicamento);
      }

      Navigator.pop(context);
    }
}

 Future<void> _deletarMedicamento() async {
    if (widget.medicamento != null) {
      final confirm = await showDialog<bool>(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text('Confirmar Exclusão'),
            content: Text('Deseja realmente excluir ${widget.medicamento!.nome}?'),
            actions: [
              TextButton(
                child: Text('Cancelar'),
                onPressed: () => Navigator.of(context).pop(false),
              ),
              TextButton(
                child: Text('Excluir'),
                onPressed: () => Navigator.of(context).pop(true),
              ),
            ],
          );
        },
      );

      if (confirm == true) {
        if (widget.medicamento!.id != null) {  // Verifique se o id não é null aqui
          await _dbHelper.delete(widget.medicamento!.id!);  // Use o operador ! para garantir que o id não seja null
          Navigator.pop(context);
        } else {
          // Opcional: mostrar uma mensagem de erro se o id for null
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Erro: O medicamento não tem um ID válido.')),
          );
        }
      }
    }
}


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.medicamento == null ? 'Adicionar Medicamento' : 'Editar Medicamento'),
        actions: [
          if (widget.medicamento != null)
            IconButton(
              icon: Icon(Icons.delete),
              onPressed: _deletarMedicamento,
            ),
          IconButton(
            icon: Icon(Icons.save),
            onPressed: _salvarMedicamento,
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _nomeController,
              decoration: InputDecoration(labelText: 'Nome'),
            ),
            TextField(
              controller: _descricaoController,
              decoration: InputDecoration(labelText: 'Descrição'),
            ),
            SizedBox(height: 20),
            _imagemUrl == null || _imagemUrl!.isEmpty
                ? Text('Nenhuma imagem selecionada.')
                : Image.file(File(_imagemUrl!)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _selecionarImagem,
              child: Text('Selecionar Imagem'),
            ),
          ],
        ),
      ),
    );
  }
}
