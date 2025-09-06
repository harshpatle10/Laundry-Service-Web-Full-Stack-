package in.laundry.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import in.laundry.dao.Contactdao;
import in.laundry.email.EmailsendServlet;
import in.laundry.pojo.Contactpojo;
import jakarta.mail.MessagingException;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Contactservlet extends HttpServlet {
   @Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	   resp.setContentType("text/html");
	    PrintWriter pw = resp.getWriter();
	    
	    String name = req.getParameter("name");
	    String email = req.getParameter("email");
	    String message = req.getParameter("message");
        String number = req.getParameter("number");
	    Contactpojo rp = new Contactpojo();
	    
    
	    rp.setNumber(number);
	    rp.setName(name);
	    rp.setEmail(email);
	    rp.setMessage(message);
	   
//	RequestDispatcher rd = req.getRequestDispatcher("html/homeform/responce_register.html");
	    try {
	        boolean check = Contactdao.addContact(rp);
	        
//	        pw.println("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'>");
//	        pw.println("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
//	        pw.println("<title>Contact Form Submission</title>");
//	        pw.println("<script src='https://cdn.tailwindcss.com'></script></head>");

	        if (check) {
	            resp.sendRedirect("http://localhost:5173/?constatus=sendcon");

//	            pw.println("<body class='bg-green-50 flex items-center justify-center min-h-screen'>");
//	            pw.println("<div class='bg-white p-10 rounded-2xl shadow-xl text-center max-w-md'>");
//	            pw.println("<h1 class='text-3xl font-bold text-green-600 mb-4'>✅ Message Sent!</h1>");
//	            pw.println("<p class='text-gray-700 mb-2'>Thank you for contacting us.</p>");
//	            pw.println("<p class='text-gray-600 mb-4'>We'll get back to you shortly.</p>");
//	            pw.println("<a href='html/index.html' class='inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition'>Go to Home</a>");
	        } else {
	            resp.sendRedirect("http://localhost:5173/?constatus=notsendcon");

//	            pw.println("<body class='bg-red-50 flex items-center justify-center min-h-screen'>");
//	            pw.println("<div class='bg-white p-10 rounded-2xl shadow-xl text-center max-w-md'>");
//	            pw.println("<h1 class='text-3xl font-bold text-red-600 mb-4'>❌ Submission Failed!</h1>");
//	            pw.println("<p class='text-gray-700 mb-2'>There was a problem sending your message.</p>");
//	            pw.println("<p class='text-gray-600 mb-4'>Please try again later.</p>");
//	            pw.println("<a href='html/contact.html' class='inline-block mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition'>Back to Contact Form</a>");
	        }
	         
	        
//	        pw.println("</div></body></html>");	  
	        }catch(SQLException  ex ) {
	        	
	            resp.sendRedirect("http://localhost:5173/?constatus=errorsendcon");

//	            ex.printStackTrace(); 
//
//	            pw.println("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'>");
//	            pw.println("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
//	            pw.println("<title>Submission Error</title>");
//	            pw.println("<script src='https://cdn.tailwindcss.com'></script></head>");
//
//	            pw.println("<body class='bg-red-50 flex items-center justify-center min-h-screen'>");
//	            pw.println("<div class='bg-white p-10 rounded-2xl shadow-xl text-center max-w-md'>");
//
//	            pw.println("<h1 class='text-3xl font-bold text-red-600 mb-4'>❌ Submission Failed!</h1>");
//	            pw.println("<p class='text-gray-700 mb-2'>Oops! Something went wrong while saving your message.</p>");
//	            pw.println("<p class='text-gray-600 mb-4'>Error: " + ex.getMessage() + "</p>");
//
//	            pw.println("<a href='html/index.html' class='inline-block mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition'>Back to Contact Form</a>");
//
//	            pw.println("</div></body></html>");

	        }
	    	    
	    finally {
//	    	pw.flush();
//	        rd.include(req, resp);
	    }
}
}
