import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'dart:io';

class MedicamentoPage extends StatefulWidget {
  @override
  _MedicamentoPageState createState() => _MedicamentoPageState();
}

class _MedicamentoPageState extends State<MedicamentoPage> {
  final _nomeController = TextEditingController();
  final _descricaoController = TextEditingController();
  String? _imagemUrl;

  Future<void> _selecionarImagem() async {
    final pickedFile = await ImagePicker().getImage(source: ImageSource.gallery);
    if (pickedFile != null) {
      setState(() {
        _imagemUrl = pickedFile.path;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Medicamento'),
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
            _imagemUrl == null
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
