package com.example.FinalProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repos;
    public UserService(UserRepository repos){
        this.repos=repos;
    }

    public User addUser(User user) {
        return repos.save(user);
    }

    public List<User> verifyUser(User user) {
        return repos.findByUsernameAndPassword(user.getUsername(),user.getPassword());
    }
}
