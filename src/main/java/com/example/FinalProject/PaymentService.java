package com.example.FinalProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository repos;
    public PaymentService(PaymentRepository repos){
        this.repos=repos;
    }

    public Payment addPayment(Payment payment) {
        return repos.save(payment);

    }
}
