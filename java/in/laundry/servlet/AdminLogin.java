package in.laundry.servlet;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import in.laundry.dao.AdminDetailsDao;
import in.laundry.pojo.AdminDetailsPojo;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class AdminLogin extends HttpServlet {
@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	String email  = req.getParameter("email");
	String password = req.getParameter("password");
	try {
	List<AdminDetailsPojo> list = AdminDetailsDao.admindetails();
	boolean check = false;
	for(AdminDetailsPojo data : list) {
		if(data.getEmail().equals(email) && data.getPassword().equals(password)) {
			check= true;
//			resp.sendRedirect("html/admin/deshboard.html");
            resp.sendRedirect("http://localhost:5173/AdminDashboard");

		}
	}
	if(check==false) {
//    resp.sendRedirect("html/admin/adminlogin.html?admindata=failed");
        resp.sendRedirect("http://localhost:5173/LoginAdmin?admindata=failed");

	}
	

	
	}catch(SQLException ex) {
//	  resp.sendRedirect("html/admin/adminlogin.html?admindata=failed");
        resp.sendRedirect("http://localhost:5173/LoginAdmin?admindata=failed");

	}
	}
}
