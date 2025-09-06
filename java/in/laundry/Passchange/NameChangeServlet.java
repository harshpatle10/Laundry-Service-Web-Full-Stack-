package in.laundry.Passchange;

import java.io.IOException;
import java.sql.SQLException;

import in.laundry.dao.ProfileChange;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class NameChangeServlet extends HttpServlet {
	  @Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		  String currpass = req.getParameter("currpass");
			String newname = req.getParameter("newname");
			
			try {
				boolean check = ProfileChange.changeName(newname, currpass);
		   	    if(check) {
		            resp.sendRedirect("http://localhost:5173/AdminSetting?status=name-updated");

//		   	     resp.sendRedirect("html/admin/setting.html?namestatus=success");
		   	    }else {
		            resp.sendRedirect("http://localhost:5173/AdminSetting?status=unexpected-error");

//		      	 resp.sendRedirect("html/admin/setting.html?namestatus=invalid");
		   	    }
			}catch(SQLException ex) {
	            resp.sendRedirect("http://localhost:5173/AdminSetting?status=unexpected-error");

//		  	  resp.sendRedirect("html/admin/setting.html?namestatus=error");
			}

		}
	}
