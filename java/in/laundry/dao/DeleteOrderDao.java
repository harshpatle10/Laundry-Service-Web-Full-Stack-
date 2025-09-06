package in.laundry.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import in.laundry.dbutil.DBConnection;

public class DeleteOrderDao {

    public static boolean orderDelByID(int id) throws SQLException{
        boolean isDeleted = false;

            String sql = "DELETE FROM laundry_orders WHERE id = ?";
           Connection con =  DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, id);

            int rows = ps.executeUpdate();
            return rows > 0;
    }
}
