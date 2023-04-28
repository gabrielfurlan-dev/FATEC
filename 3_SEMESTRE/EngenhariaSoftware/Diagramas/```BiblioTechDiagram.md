```mermaid

flowchart

Home --> Livros
Home --> Favoritos
Home --> Buscar
Home --> Adicionar

Sua_Lista --> Lista_Livros_Desejo
Sua_Lista --> Livros_Lidos
Sua_Lista --> Livros_Cedidos

Livros --> Sua_Lista

Adicionar --> Sugestoes
Adicionar --> AdicionarLivroDesejado

Buscar --> Categorias

```