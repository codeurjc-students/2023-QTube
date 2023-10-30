package com.example.qtube.validators;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;


@Target({ElementType.FIELD, ElementType.METHOD, ElementType.ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = {MultipartFileValidator.class})
public @interface ValidMultipartFile {

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    String message() default "Invalid file";

    String[] allowedMIMETypes() default {};

    long maximumFileSizeInMB() default Long.MIN_VALUE;

}
