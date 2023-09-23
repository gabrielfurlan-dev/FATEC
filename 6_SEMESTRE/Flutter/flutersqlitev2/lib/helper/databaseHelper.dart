import 'dart:io';

import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path_provider/path_provider.dart';
import 'dart:async';
import '../model/medicamento.dart';

class DatabaseHelper {
  static final _databaseName = "FarmaciaDatabase.db";
  static final _databaseVersion = 1;

  static final table = 'medicamento';

  static final columnId = 'id';
  static final columnNome = 'nome';
  static final columnDescricao = 'descricao';
  static final columnImagemUrl = 'imagemUrl';

  DatabaseHelper._privateConstructor();
  static final DatabaseHelper instance = DatabaseHelper._privateConstructor();

  static Database? _database;
  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDatabase();
    return _database!;
  }

  _initDatabase() async {
    Directory documentsDirectory = await getApplicationDocumentsDirectory();
    String path = join(documentsDirectory.path, _databaseName);
    return await openDatabase(path,
        version: _databaseVersion,
        onCreate: _onCreate);
  }

  Future _onCreate(Database db, int version) async {
    await db.execute('''
          CREATE TABLE $table (
            $columnId INTEGER PRIMARY KEY AUTOINCREMENT,
            $columnNome TEXT NOT NULL,
            $columnDescricao TEXT NOT NULL,
            $columnImagemUrl TEXT
          )
          ''');
  }

Future<int> insert(Medicamento medicamento) async {
    Database db = await instance.database;
    return await db.insert(
      'medicamento',
      medicamento.toMap(),
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
  }

  Future<Medicamento?> queryMedicamento(int id) async {
    Database db = await database;
    List<Map> maps = await db.query(table,
        columns: [columnId, columnNome, columnDescricao, columnImagemUrl],
        where: '$columnId = ?',
        whereArgs: [id]);
    if (maps.length > 0) {
      return Medicamento.fromMap(maps.first as Map<String, dynamic>);
    }
    return null;
  }

  Future<int> update(Medicamento medicamento) async {
    Database db = await database;
    return await db.update(table, medicamento.toMap(),
        where: '$columnId = ?', whereArgs: [medicamento.id]);
  }

  Future<int> delete(int id) async {
    Database db = await database;
    return await db.delete(table, where: '$columnId = ?', whereArgs: [id]);
  }

  Future<List<Medicamento>> getAllMedicamentos() async {
    Database db = await database;
    var res = await db.query(table);
    List<Medicamento> list =
        res.isNotEmpty ? res.map((c) => Medicamento.fromMap(c as Map<String, dynamic>)).toList() : [];
    return list;
  }
}
