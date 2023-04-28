package br.com.fatecomerce.model;

public class Product {
    private Integer id;
    private String name;
    private String description;
    private Double cost;
    private Double price;
    public Category category;

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Product(Integer id, String name, String description, Double cost, Double price, Category category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.price = price;
        this.category = category;
    }
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Double getCost() {
        return cost;
    }
    public void setCost(Double cost) {
        this.cost = cost;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }


}
