package com.example.FinalProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@CrossOrigin()
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartService cart_service;

    @GetMapping("/cartdata")
    public List<Cart> List()
    {
        return cart_service.getGalleryList();
    }

}
