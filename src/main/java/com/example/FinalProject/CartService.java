package com.example.FinalProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository repos;
    public CartService(CartRepository repos){
        this.repos=repos;
    }
    public List<Cart> getGalleryList() {
        return repos.findAll();
    }
}