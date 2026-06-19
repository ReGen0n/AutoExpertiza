package com.example.websiteautoex.service;

import com.example.websiteautoex.dto.ContactRequest;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    public void sendContactMessage(ContactRequest request) {
        System.out.println("========== NEW REQUEST ==========");
        System.out.println("Name: " + request.getName());
        System.out.println("Phone: " + request.getPhone());
        System.out.println("Email: " + request.getEmail());
        System.out.println("Service: " + request.getServiceType());
        System.out.println("Message: " + request.getMessage());
        System.out.println("================================");
    }
}