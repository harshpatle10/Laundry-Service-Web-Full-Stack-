package in.laundry.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import in.laundry.dbutil.DBConnection;
import in.laundry.pojo.Loginpojo;

public class Logindao {
   public static boolean  checkEmail(Loginpojo details) throws SQLException {
	   Connection con = DBConnection.getConnection();
		PreparedStatement ps =  con.prepareStatement("Select count(*) from laundry_signup where email=? AND password=?");
		  String email = details.getEmail();
		  String pass = details.getPassword();
		  ps.setString(1, email);
		  ps.setString(2, pass);
         ResultSet rs = ps.executeQuery(); 
	   if(rs.next()) {
		   int count = rs.getInt(1);
		   return count>0;
	   }
	   return false;
   }
   
   public static boolean  checkName(Loginpojo details) throws SQLException {
	   Connection con = DBConnection.getConnection();
		PreparedStatement ps =  con.prepareStatement("Select count(*) from laundry_signup where name=? AND password=?");
		  String name = details.getName();
		  String pass = details.getPassword();
		  ps.setString(1, name);
		  ps.setString(2, pass);
         ResultSet rs = ps.executeQuery(); 
	   if(rs.next()) {
		   int count = rs.getInt(1);
		   return count>0;
	   }
	   return false;
   }
   
   
   public static int  getLoginId(Loginpojo details) throws SQLException {
	   Connection con = DBConnection.getConnection();
		PreparedStatement ps =  con.prepareStatement("Select id from laundry_signup where name=? AND password=?");
		  String name = details.getName();
		  String pass = details.getPassword();
		  ps.setString(1, name);
		  ps.setString(2, pass);
         ResultSet rs = ps.executeQuery(); 
	   if(rs.next()) {
		   int id = rs.getInt(1);
		   return id;
	   }
	   return 0;
   }
}
