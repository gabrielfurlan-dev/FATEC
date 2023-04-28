package test;

import br.com.fatecomerce.model.Brand;
import br.com.fatecomerce.model.Category;
import br.com.fatecomerce.model.Product;

public class Teste {
    public static void main(String[] args) {

        var category = new Category(1, "Nome Categoria", "Descrição Categoria");

        var brand = new Brand(1, "Nome Marca", "Marca Descrição");

        Product product = new Product(1, "Nome Produto", "Produto Descrição", 1.1, 1.1, category);

        System.out.println( "Nome: " + product.getName() + "\n" +
                            "Descricao: " + product.getDescription() + "\n" +
                            "Custo: " + product.getClass() + "\n" +
                            "Preco: " + product.getPrice() + "\n\n" +

                            "Marca: " + product.getCategory().getName() + "\n" +
                            "Nome: " + product.getCategory().getName() + "\n" +
                            "Descricao: " + product.getCategory().getDescription() + "\n");
    }
}
