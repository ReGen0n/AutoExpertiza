package com.example.websiteautoex.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ContactRequest {

    @NotBlank(message = "Name is required")
    @Size(max = 80)
    private String name;

    @NotBlank(message = "Phone is required")
    @Size(max = 40)
    private String phone;

    @Email(message = "Invalid email")
    @Size(max = 120)
    private String email;

    @NotBlank(message = "Message is required")
    @Size(max = 1500)
    private String message;

    private String serviceType;

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getMessage() {
        return message;
    }

    public String getServiceType() {
        return serviceType;
    }
}