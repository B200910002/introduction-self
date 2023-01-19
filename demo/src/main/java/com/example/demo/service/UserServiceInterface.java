package com.example.demo.service;

import java.util.List;

import com.example.demo.model.User;

public interface UserServiceInterface {
    public User saveUser(User user);

    public User getUserById(Long id);

    public List<User> getAllUser();

    public User updateUser(Long id, User user);

    public String deleteUser(Long id);
}
