package com.example.websiteautoex.controller;

import com.example.websiteautoex.dto.ContactRequest;
import com.example.websiteautoex.dto.ContactResponse;
import com.example.websiteautoex.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public ContactResponse sendMessage(@Valid @RequestBody ContactRequest request) {
        emailService.sendContactMessage(request);
        return new ContactResponse(true, "Заявка успешно отправлена");
    }

    @GetMapping("/health")
    public ContactResponse health() {
        return new ContactResponse(true, "Backend работает");
    }
}