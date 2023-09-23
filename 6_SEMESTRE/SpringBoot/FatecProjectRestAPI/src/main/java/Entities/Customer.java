@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Customer{
    @id
    @GenerateValue(strategy = GenerationType.INDENTITY)
    @Colum(name="id_customer")
    private long idCustomer;

    @Colum(name="first_name_customer", nullable=false, length=300)
    private String firtNameCustomer;
    @colum(name="last_name_customer",nullable=false, length=300)
    private String lastNameCustomer;
    @colum(name="cpf_customer", nullable=false, length=11)
    private String cpfCustomer;
    @Colum(name="birthdate_customer", nullable=false)
    private LocalData birthDateCustomer;
    @Colum(name="date_created_customer", nullable =false, updatable=false)
    private LocalData dateCreatedCustomer;
    @Colum(name="monthtly_income_customer" nullable=false, precision=10, scale=2)
    private BigDecimal monthtlyIncomeCustomer;
    @Colum(name="status_customer", nullable=false)
    private Boolean statusCustomer;
    @Colum(name="email_customer", nullable=false, unique=true, length=300)
    private String emailCustomer;
    @colum(name="password_customer", nullable=falses )
    private String passwordCustomer;

    @PrePersist
    private void prePersist(){
        this.setDateCreatedCustomer(LocalDate.now());
        this.setStatusCustomer(true);
    }
}