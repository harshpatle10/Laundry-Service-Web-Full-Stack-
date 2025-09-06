package in.laundry.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import in.laundry.dbutil.DBConnection;
import in.laundry.pojo.Signuppojo;

public class Signupdao {
	 public static boolean addSignup(Signuppojo person)  throws SQLException {
		   Connection con = DBConnection.getConnection();
			PreparedStatement ps =  con.prepareStatement("INSERT INTO laundry_signup (name, email, password) VALUES (?,?,?)");
			ps.setString(1, person.getName());
			ps.setString(2, person.getEmail());
			ps.setString(3, person.getPassword());
	       
	       int n =   ps.executeUpdate(); 
	       ps.close();
	       return n>0;   
	   
	}

	public static List<Signuppojo> AllSignup() throws SQLException {
		Connection con = DBConnection.getConnection();
		Statement st = con.createStatement();
		String query = "select * from laundry_signup";
		ResultSet rs = st.executeQuery(query);
		List<Signuppojo> allsignup = new ArrayList<>();
		while(rs.next()) {
			Signuppojo signup = new Signuppojo();
			signup.setName(rs.getString("name"));
			signup.setEmail(rs.getString("email"));
			signup.setPassword(rs.getString("password"));
			signup.setId(rs.getInt("id"));
			signup.setDate(rs.getTimestamp("created_at")+"");
			
			allsignup.add(signup);
		}
		st.close();
		rs.close();
		return allsignup;
		
	}
}
