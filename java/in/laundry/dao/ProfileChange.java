package in.laundry.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import in.laundry.dbutil.DBConnection;

public class ProfileChange {
	
   public static boolean changeEmail(String newemail , String pass) throws SQLException {
	   Connection con = DBConnection.getConnection();
	   PreparedStatement ps =  con.prepareStatement("UPDATE laundry_admin SET admin_email = ? WHERE admin_password = ?");
	     ps.setString(1, newemail);
		  ps.setString(2, pass);
		  int count = ps.executeUpdate();
		  return count>0;
   }
   public static boolean changePass(String currpass,String newpass) throws SQLException {
	   Connection con = DBConnection.getConnection();
	   PreparedStatement ps =  con.prepareStatement("UPDATE laundry_admin SET admin_password = ? WHERE admin_password = ?");
	     ps.setString(1, newpass);
		  ps.setString(2, currpass);
		  int count = ps.executeUpdate();
		  return count>0;
   }
   
   
   
   public static boolean changeName(String newname,String currpass) throws SQLException {
	   Connection con = DBConnection.getConnection();
	   PreparedStatement ps =  con.prepareStatement("UPDATE laundry_admin SET admin_name = ? WHERE admin_password = ?");
	     ps.setString(1, newname);
		  ps.setString(2, currpass);
		  int count = ps.executeUpdate();
		  return count>0;
   }
   
   
   public static boolean changeUrl(String newurl,String currpass) throws SQLException {
	   Connection con = DBConnection.getConnection();
	   PreparedStatement ps =  con.prepareStatement("UPDATE laundry_admin SET admin_url = ? WHERE admin_password = ?");
	     ps.setString(1, newurl);
		  ps.setString(2, currpass);
		  int count = ps.executeUpdate();
		  return count>0;
   }
}
