package com.example.qtube.utils;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Collection;
import java.util.stream.Collectors;


@Component
public class RestUtils {


    public static URI location(String slug) {
        return ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{slug}")
                .buildAndExpand(slug)
                .toUri();
    }

    public static URI resource(String slug) {
        return ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("api/resources/{slug}")
                .buildAndExpand(slug)
                .toUri();
    }

    public static Collection<String> messages(BindingResult bindingResult) {
        return bindingResult.getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.toList());
    }
}
