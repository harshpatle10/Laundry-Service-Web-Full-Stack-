package in.laundry.pojo;

import java.sql.Date;

public class Registerpojo {
   private String name ;
   private  String mobilenumber;
   private String email;
   private String address;
   private String service;
   private Date date;
   private int weight;
   private int id;
   private double payment;
   
public Registerpojo() {
	
}

public double getPayment() {
	return payment;
}

public void setPayment(double payment) {
	this.payment = payment;
}

public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getMobilenumber() {
	return mobilenumber;
}
public void setMobilenumber(String mobilenumber) {
	this.mobilenumber = mobilenumber;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getService() {
	return service;
}
public void setService(String service) {
	this.service = service;
}
public Date getDate() {
	return date;
}
public void setDate(Date date) {
	this.date = date;
}

public int getWeight() {
	return weight;
}

public void setWeight(int weight) {
	this.weight = weight;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}
   
   
}
