package com.beaute.ezchart.service;

import com.beaute.ezchart.model.User;

public interface UserServiceInterface {
	User insertUser(User user);
	
	User deleteUser(User user);
	
	User updateUser(User user);
	
	User selectUser( long userID );
	
}
