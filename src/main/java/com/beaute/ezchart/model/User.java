package com.beaute.ezchart.model;

import java.io.Serializable;

import javax.persistence.*;


@Entity
@TableGenerator(name = "user" )
public class User implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userID;
	
	@Column( name = "username")
	private String username;
	
	@Column (name = "used")
	private boolean used;
	

	public User() {
		super();
	}
	
	public User(Long userID, String username, boolean used) {
		super();
		this.userID = userID;
		this.username = username;
		this.used = used;
	}

	public Long getUserID() {
		return userID;
	}

	public void setUserID(Long userID) {
		this.userID = userID;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public boolean isUsed() {
		return used;
	}

	public void setUsed(boolean used) {
		this.used = used;
	}

	@Override
	public String toString() {
		return "User [userID=" + userID + ", username=" + username + ", used="
				+ used + "]";
	}
	
}