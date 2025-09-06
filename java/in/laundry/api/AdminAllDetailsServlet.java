package in.laundry.api;

import com.google.gson.Gson;
import in.laundry.dao.AdminDetailsDao;
import in.laundry.pojo.AdminDetailsPojo;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

public class AdminAllDetailsServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws  IOException {
    	 // Inside your doGet or doPost method
    	response.setHeader("Access-Control-Allow-Origin", "*");
    	response.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    	response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  	  
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        try {
            List<AdminDetailsPojo> adminList = AdminDetailsDao.admindetails();
            Gson gson = new Gson();
            String json = gson.toJson(adminList);
            out.print(json);
        }catch(SQLException ex) {
          	String data = "{\"status\":404,\"error\":"+ex.getMessage()+"}";
    	    out.print(data);
    	 }
    }
}
