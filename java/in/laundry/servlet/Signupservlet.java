package in.laundry.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import in.laundry.dao.Signupdao;
import in.laundry.pojo.Signuppojo;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Signupservlet extends HttpServlet {
@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	resp.setContentType("text/html");
    PrintWriter pw = resp.getWriter();
    
    String name = req.getParameter("name");
    String email = req.getParameter("email");
    String password = req.getParameter("password");

    Signuppojo rp = new Signuppojo();
    rp.setName(name);
    rp.setEmail(email);
    rp.setPassword(password);
   
    try {
        boolean check = Signupdao.addSignup(rp);
        
        pw.println("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'>");
        pw.println("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        pw.println("<script src='https://cdn.tailwindcss.com'></script></head>");

        if (check) {
            resp.sendRedirect("http://localhost:5173/?signup=success");

//        	resp.sendRedirect("html/index.html?signup=success");

        } else {
            resp.sendRedirect("http://localhost:5173/LoginSignup?error=duplicate");

//        	resp.sendRedirect("html/admin/loginsignup.html?error=duplicate");
        }
        }catch(SQLException ex) {
            resp.sendRedirect("http://localhost:5173/LoginSignup?error=duplicate");
//        	resp.sendRedirect("html/admin/loginsignup.html?error=duplicate");
        }
    
}
}
