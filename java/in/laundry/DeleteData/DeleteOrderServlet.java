package in.laundry.DeleteData;


import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.SQLException;

import in.laundry.dao.DeleteOrderDao;

public class DeleteOrderServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    
    @Override
    protected void doOptions(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setStatus(HttpServletResponse.SC_OK);
    }
 
    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    	response.setHeader("Access-Control-Allow-Origin", "*");
    	response.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    	response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    	
        String idParam = request.getParameter("id");

        if (idParam == null || idParam.isEmpty()) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("Missing order ID");
            return;
        }
         try {
        int id = Integer.parseInt(idParam);
        boolean deleted = DeleteOrderDao.orderDelByID(id);

        if (deleted) {
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write("Order deleted successfully.");
        } else {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            response.getWriter().write("Order not found.");
        }
        }catch(SQLException ex) {
        	 response.setStatus(HttpServletResponse.SC_NOT_FOUND);
             response.getWriter().write("Order not found.");
        }
    }
}
