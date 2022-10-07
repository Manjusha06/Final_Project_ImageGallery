package com.example.FinalProject;

import javax.persistence.*;

@Entity(name = "payment")
@Table
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int payment;
    private String emailid;
    public Payment(){

    }

    public Payment(Long id, int payment, String emailid) {
        this.id = id;
        this.payment = payment;
        this.emailid = emailid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPayment() {
        return payment;
    }

    public void setPayment(int payment) {
        this.payment = payment;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }
}
