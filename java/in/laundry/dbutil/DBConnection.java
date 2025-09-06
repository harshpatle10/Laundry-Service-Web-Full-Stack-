package in.laundry.dbutil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
	
	private static Connection conn;
	
	public static void openConnection(String url, String username, String password) {
		try {
			conn = DriverManager.getConnection(url, username,password);
			System.out.println("Connection open successfully");
		}catch(SQLException ex) {
			ex.printStackTrace();
		}
	}
	
	public static Connection getConnection() throws SQLException{
		if(conn!=null) {
			return conn;
		}
		throw new SQLException("Connectino is null");
	}
	
	public static void closeConnection() {
		if(conn!=null) {
			try {
				conn.close();
				System.out.println("Connection closed successfully");
			}catch(SQLException ex) {
				ex.printStackTrace();
			}
		}
	}
	

}
