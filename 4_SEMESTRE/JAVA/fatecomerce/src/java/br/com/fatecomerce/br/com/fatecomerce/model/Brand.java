package br.com.fatecomerce.model;

public class Brand {
    
    private Integer idBrand;
    private String nameBrand;
    private String descriptionBrand;

    public Brand(Integer idBrand, String nameBrand, String descriptionBrand) {
        this.idBrand = idBrand;
        this.nameBrand = nameBrand;
        this.descriptionBrand = descriptionBrand;
    }

    public Integer getIdBrand() {
        return idBrand;
    }

    public void setIdBrand(Integer idBrand) {
        if (idBrand < 0 || idBrand > 10) {
            System.out.println("Id deve estar entre 0 e 10");
            return;
        }
        
        this.idBrand = idBrand;
    }

    public String getNameBrand() {
        return nameBrand;
    }

    public void setNameBrand(String nameBrand) {
        if (nameBrand.trim().length() < 2) return;
        this.nameBrand = nameBrand;
    }

    public String getDescriptionBrand() {
        return descriptionBrand;
    }

    public void setDescriptionBrand(String descriptionBrand) {
        this.descriptionBrand = descriptionBrand;
    }   
}
