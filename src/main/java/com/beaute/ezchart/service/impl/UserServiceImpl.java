package com.beaute.ezchart.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beaute.ezchart.databaseDAO.UserRepository;
import com.beaute.ezchart.model.User;
import com.beaute.ezchart.service.UserServiceInterface;

@Service
public class UserServiceImpl implements UserServiceInterface {
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User insertUser(User user) {
		userRepo.save(user);
		return user;
	}

	@Override
	public User deleteUser(User user) {
		userRepo.delete(user);
		return null;
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		userRepo.save(user);
		return user;
	}

	@Override
	public User selectUser(long userID) {
		// TODO Auto-generated method stub
		User user = userRepo.findOne(userID);
		return user;
	}
	
}
