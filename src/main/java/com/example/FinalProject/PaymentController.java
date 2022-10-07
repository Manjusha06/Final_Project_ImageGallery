package com.example.FinalProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentController {
    @Autowired
    private PaymentService payment_service;

    public PaymentController(PaymentService payment_service) {
        this.payment_service = payment_service;
    }

    @CrossOrigin()
    @PostMapping("/addpayment")
    public Payment addPayment(@RequestBody Payment payment) {
        return payment_service.addPayment(payment);
    }
}

