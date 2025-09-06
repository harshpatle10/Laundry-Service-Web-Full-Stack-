package in.laundry.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import in.laundry.dao.Registerdao;
import in.laundry.pojo.Registerpojo;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class Registerservlet extends HttpServlet{
	
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    resp.setContentType("text/html");
    PrintWriter pw = resp.getWriter();
    
    String name = req.getParameter("name");
    String number = req.getParameter("phone");
    String email = req.getParameter("email");
    String address = req.getParameter("address");
    String service = req.getParameter("service");
    
    int weight = 0;
    try {
        weight = Integer.parseInt(req.getParameter("weight"));
       
    } catch (NumberFormatException e) {
        weight = 0; 
    }

    Registerpojo rp = new Registerpojo();
    String dateStr = req.getParameter("pickup_date"); // e.g., "2025-05-08"

    if (dateStr != null && !dateStr.isEmpty()) {
        try {
            // Step 2: Convert String to LocalDate
            LocalDate localDate = LocalDate.parse(dateStr); // automatically uses "yyyy-MM-dd"

            // Step 3: Convert LocalDate to java.sql.Date
            java.sql.Date sqlDate = java.sql.Date.valueOf(localDate);

            // Step 4: Set into POJO (which has a java.sql.Date field)
            rp.setDate(sqlDate);

        } catch (DateTimeParseException e) {
            System.out.println("❌ Invalid date format: " + e.getMessage());
        }
    }
    
    rp.setName(name);
    rp.setAddress(address);
    rp.setEmail(email);
    rp.setMobilenumber(number);
    rp.setService(service);
    rp.setWeight(weight);
    rp.setPayment(weight*50);
    
//RequestDispatcher rd = req.getRequestDispatcher("html/homeform/responce_register.html");
    try {
        boolean check = Registerdao.addRegister(rp);
        
//        pw.println("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'>");
//        pw.println("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
//        pw.println("<title>Booking Status</title>");
//        pw.println("<script src='https://cdn.tailwindcss.com'></script></head>");

        if (check) {
            resp.sendRedirect("http://localhost:5173/Service?status=success");

//            pw.println("<body class='bg-green-50 flex items-center justify-center min-h-screen'>");
//            pw.println("<div class='bg-white p-10 rounded-2xl shadow-xl text-center max-w-md'>");
//            pw.println("<h1 class='text-3xl font-bold text-green-600 mb-4'>✅ Booking Confirmed!</h1>");
//            pw.println("<p class='text-gray-700 mb-2'>Thank you for booking your laundry service.</p>");
//            pw.println("<p class='text-gray-600 mb-4'>We will pick up your laundry on the scheduled date.</p>");
//            pw.println("<a href='html/index.html' class='inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition'>Go to Home</a>");
        } else {
            resp.sendRedirect("http://localhost:5173/Service?status=failed");

//            pw.println("<body class='bg-red-50 flex items-center justify-center min-h-screen'>");
//            pw.println("<div class='bg-white p-10 rounded-2xl shadow-xl text-center max-w-md'>");
//            pw.println("<h1 class='text-3xl font-bold text-red-600 mb-4'>❌ Booking Failed!</h1>");
//            pw.println("<p class='text-gray-700 mb-2'>There was a problem processing your booking.</p>");
//            pw.println("<p class='text-gray-600 mb-4'>Please try again later.</p>");
//            pw.println("<a href='html/homeform/register.html' class='inline-block mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition'>Back to Booking Form</a>");
        }
//        pw.println("</div></body></html>");
    } catch (SQLException ex) {
        resp.sendRedirect("http://localhost:5173/Service?status=error");

//        ex.printStackTrace();
//        pw.println("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'>");
//        pw.println("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
//        pw.println("<title>Booking Failed</title>");
//        pw.println("<script src='https://cdn.tailwindcss.com'></script></head>");
//        pw.println("<body class='bg-red-50 flex items-center justify-center min-h-screen'>");
//
//        pw.println("<div class='bg-white p-10 rounded-2xl shadow-xl text-center max-w-md'>");
//        pw.println("<h1 class='text-3xl font-bold text-red-600 mb-4'>❌ Booking Failed!</h1>");
//        pw.println("<p class='text-gray-700 mb-2'>There was an issue saving your booking.</p>");
//        pw.println("<p class='text-gray-600 mb-4'>Error: " + ex.getMessage() + "</p>");
//        pw.println("<a href='html/homeform/register.html' class='inline-block mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition'>Back to Booking Form</a>");
//        pw.println("</div></body></html>");
    } finally {
//    	pw.flush();
//        rd.include(req, resp);
    }
}
}
