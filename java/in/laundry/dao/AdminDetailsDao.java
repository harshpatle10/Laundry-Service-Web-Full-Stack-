package in.laundry.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import in.laundry.dbutil.DBConnection;
import in.laundry.pojo.AdminDetailsPojo;

public class AdminDetailsDao {
   public static List<AdminDetailsPojo>  admindetails() throws SQLException {
	   Connection con = DBConnection.getConnection();
		Statement st = con.createStatement();
		String query = "select * from laundry_admin";
		ResultSet rs = st.executeQuery(query);
		
		List<AdminDetailsPojo> alladmin = new ArrayList<>();
		
		while(rs.next()) {
			
			AdminDetailsPojo admin = new AdminDetailsPojo();
			
			admin.setEmail(rs.getString("admin_email"));
			admin.setId(rs.getInt("admin_id"));
			admin.setName(rs.getString("admin_name"));
			admin.setPassword(rs.getString("admin_password"));
			admin.setUrl(rs.getString("admin_url"));
			alladmin.add(admin);
			
		}
		st.close();
		rs.close();
		return alladmin;
   }
}
