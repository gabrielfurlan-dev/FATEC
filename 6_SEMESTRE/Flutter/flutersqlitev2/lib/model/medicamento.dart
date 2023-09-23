class Medicamento {
  final int? id;
  final String nome;
  final String descricao;
  final String imagemUrl;

  Medicamento({
    required this.id,
    required this.nome,
    required this.descricao,
    required this.imagemUrl,
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'nome': nome,
      'descricao': descricao,
      'imagemUrl': imagemUrl,
    };
  }

  factory Medicamento.fromMap(Map<String, dynamic> map) {
    return Medicamento(
      id: map['id'],
      nome: map['nome'],
      descricao: map['descricao'],
      imagemUrl: map['imagemUrl'],
    );
  }
}
