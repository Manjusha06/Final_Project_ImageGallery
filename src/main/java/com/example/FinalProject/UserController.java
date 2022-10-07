package com.example.FinalProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService user_service;
    public UserController(UserService user_service)
    {
        this.user_service=user_service;
    }
    @CrossOrigin()
    @PostMapping("/adduser")
    public User adduser(@RequestBody User user)
    {
        return user_service.addUser(user);
    }
    @CrossOrigin()
    @PostMapping("/verifyuser")
    public List<User> verify(@RequestBody User user)
    {
        return (List<User>) user_service.verifyUser(user);
}}
