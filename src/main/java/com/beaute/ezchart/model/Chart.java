package com.beaute.ezchart.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.TableGenerator;

@Entity
@TableGenerator(name = "chart" )
public class Chart implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long chartID;
	
	private byte[] imgBin;
	
	private String imgLink;
	
	@Column 
	private String chartData; 
	
	//@Temporal(TemporalType.TIMESTAMP)	
	private Date dateCreated;
	
	@ManyToOne
	private User user;
	
	public Chart() {
		super();
	}

	public Chart(Long chart_ID, byte[] img_bin, String img_link,
			String chartData, Date date_create) {
		super();
		this.chartID = chart_ID;
		this.imgBin = img_bin;
		this.imgLink = img_link;
		this.chartData = chartData;
		this.dateCreated = date_create;
		
	}

	public byte[] getImg_bin() {
		return imgBin;
	}

	public void setImg_bin(byte[] img_bin) {
		this.imgBin = img_bin;
	}

	public String getImg_link() {
		return imgLink;
	}

	public void setImg_link(String img_link) {
		this.imgLink = img_link;
	}
	
	public Date getDate_create() {
		return dateCreated;
	}

	public void setDate_create(Date date_create) {
		this.dateCreated = date_create;
	}

	public Long getChart_ID() {
		return chartID;
	}

	public void setChart_ID(Long chart_ID) {
		this.chartID = chart_ID;
	}

	public String getChartData() {
		return chartData;
	}

	public void setChartData(String chartData) {
		this.chartData = chartData;
	}
	
	@Override
	public String toString() {
		return "Chart [chart_ID=" + chartID + ", img_bin="
				+ Arrays.toString(imgBin) + ", img_link=" + imgLink
				+ ", char_tdata=" + chartData + ", date_create=" + dateCreated
				+ ", user=" + user + "]";
	}

}
