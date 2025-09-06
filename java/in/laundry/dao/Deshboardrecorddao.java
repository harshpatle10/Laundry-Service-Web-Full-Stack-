package in.laundry.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

import in.laundry.dbutil.DBConnection;

public class Deshboardrecorddao {
    public static Map<String, Integer> TotalRecord() throws SQLException {
        Connection con = DBConnection.getConnection();
        Statement st = con.createStatement();
        Map<String, Integer> map = new HashMap<>();

        ResultSet rs1 = st.executeQuery("SELECT COUNT(*) FROM laundry_signup");
        if (rs1.next()) {
            map.put("users", rs1.getInt(1));
        }

       ResultSet rs2 = st.executeQuery("SELECT COUNT(*) FROM laundry_orders");
        if (rs2.next()) {
            map.put("orders", rs2.getInt(1));
        }

        ResultSet rs3 = st.executeQuery("SELECT SUM(payment) FROM laundry_orders");
        if (rs3.next()) {
            int rev = (int) rs3.getDouble(1);
            map.put("revenue", rev);
        }
        
       ResultSet rs4 = st.executeQuery("SELECT SUM(weight) FROM laundry_orders");
        if (rs4.next()) {
            map.put("weight", rs4.getInt(1));
        }
        
        return map;
    }
}
