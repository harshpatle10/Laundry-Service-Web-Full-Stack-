package in.laundry.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import in.laundry.dbutil.DBConnection;
import in.laundry.pojo.Contactpojo;

public class Contactdao {
	
   public static boolean addContact(Contactpojo person)  throws SQLException {
	   Connection con = DBConnection.getConnection();
		PreparedStatement ps =  con.prepareStatement("INSERT INTO laundry_contact_person (name_contact, email_contact, message_contact,number_contact) VALUES (?,?,?,?)");
		ps.setString(1, person.getName());
		ps.setString(2, person.getEmail());
		ps.setString(3, person.getMessage());
         ps.setString(4, person.getNumber());
       int n =   ps.executeUpdate(); 
       ps.close();
       return n>0;   
   
}

public static List<Contactpojo> AllContact() throws SQLException {
	Connection con = DBConnection.getConnection();
	Statement st = con.createStatement();
	String query = "select * from laundry_contact_person";
	ResultSet rs = st.executeQuery(query);
	List<Contactpojo> allperson = new ArrayList<>();
	while(rs.next()) {
		Contactpojo person = new Contactpojo();
		person.setName(rs.getString("name_contact"));
		person.setEmail(rs.getString("email_contact"));
		person.setMessage(rs.getString("message_contact"));
		person.setMessage(rs.getString("number_contact"));

	}
	st.close();
	rs.close();
	return allperson;
}

}
