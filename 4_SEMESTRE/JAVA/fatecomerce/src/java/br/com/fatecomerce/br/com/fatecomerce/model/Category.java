package br.com.fatecomerce.model;

public class Category {
      private Integer idCategoria;
      private String name;
      private String description;

      
      public Category(Integer idCategoria, String name, String description) {
        this.idCategoria = idCategoria;
        this.name = name;
        this.description = description;
      }
      
      public Integer getIdCategoria() {
        return idCategoria;
      }
      public void setIdCategoria(Integer idCategoria) {
        this.idCategoria = idCategoria;
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

  }
