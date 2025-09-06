package in.laundry.dao;

import java.io.IOException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import in.laundry.dbutil.DBConnection;
import in.laundry.pojo.Registerpojo;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Registerdao   {
	public static boolean addRegister(Registerpojo register) throws SQLException {
         
		Connection con = DBConnection.getConnection();
		PreparedStatement ps =  con.prepareStatement("INSERT INTO laundry_orders (name, mobilenumber, email, address, service, date, weight , payment) VALUES (?,?,?,?,?,?,?,?)");
		ps.setString(1, register.getName());
		ps.setString(2, register.getMobilenumber());
		ps.setString(3, register.getEmail());
		ps.setString(4, register.getAddress());
		ps.setString(5, register.getService());
        ps.setDate(6, (Date) register.getDate());
        ps.setInt(7, register.getWeight());
        ps.setDouble(8, register.getPayment());
        
        int n =   ps.executeUpdate(); 
        ps.close();
        return n>0;   
    
}

public static List<Registerpojo> AllRegister() throws SQLException {
	Connection con = DBConnection.getConnection();
	Statement st = con.createStatement();
	String query = "select * from laundry_orders";
	ResultSet rs = st.executeQuery(query);
	List<Registerpojo> alldata = new ArrayList<>();
	while(rs.next()) {
		Registerpojo data = new Registerpojo();
		
		data.setAddress(rs.getString("address"));
		data.setName(rs.getString("name"));
		data.setDate(rs.getDate("date"));
		data.setEmail(rs.getString("email"));
		data.setService(rs.getString("service"));;
		data.setWeight(rs.getInt("weight"));
		data.setId(rs.getInt("id"));
		data.setPayment(rs.getDouble("payment"));
		alldata.add(data);
	}
	st.close();
	rs.close();
	return alldata;
}
}
