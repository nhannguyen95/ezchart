package com.beaute.ezchart.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.*;

@Entity
public class Chart implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	
	@Id	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long chart_ID;
	private byte[] img_bin;
	private String img_link;
	private String char_tdata; 
	//@Temporal(TemporalType.TIMESTAMP)	
	private Date date_create;

	
	@ManyToOne
	private User user;
	
	public Chart() {
		super();
	}

	public Chart(Long chart_ID, byte[] img_bin, String img_link,
			String char_tdata, Date date_create) {
		super();
		this.chart_ID = chart_ID;
		this.img_bin = img_bin;
		this.img_link = img_link;
		this.char_tdata = char_tdata;
		this.date_create = date_create;
		
	}

	public byte[] getImg_bin() {
		return img_bin;
	}

	public void setImg_bin(byte[] img_bin) {
		this.img_bin = img_bin;
	}

	public String getImg_link() {
		return img_link;
	}

	public void setImg_link(String img_link) {
		this.img_link = img_link;
	}

	public String getChar_tdata() {
		return char_tdata;
	}

	public void setChar_tdata(String char_tdata) {
		this.char_tdata = char_tdata;
	}

	public Date getDate_create() {
		return date_create;
	}

	public void setDate_create(Date date_create) {
		this.date_create = date_create;
	}

	public Long getChart_ID() {
		return chart_ID;
	}

	public void setChart_ID(Long chart_ID) {
		this.chart_ID = chart_ID;
	}

	
	
	

}
