package com.example.qtube.validators;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.web.multipart.MultipartFile;


public class MultipartFileValidator implements ConstraintValidator<ValidMultipartFile, MultipartFile> {
    private static final Integer BYTES = 1_048_576;

    private String[] allowedMIMETypes;

    private long maximumFileSizeInBytes;

    @Override
    public void initialize(ValidMultipartFile constraintAnnotation) {
        this.allowedMIMETypes = constraintAnnotation.allowedMIMETypes();
        this.maximumFileSizeInBytes = constraintAnnotation.maximumFileSizeInMB() * BYTES;
    }

    @Override
    public boolean isValid(MultipartFile multipartFile, ConstraintValidatorContext constraintValidatorContext) {
        return multipartFile != null
                && !multipartFile.isEmpty()
                && !exceedsMaximumSize(multipartFile.getSize())
                && isAllowedMIMEType(multipartFile.getContentType());
    }

    private boolean exceedsMaximumSize(long size) {
        return size > this.maximumFileSizeInBytes;
    }

    private boolean isAllowedMIMEType(String MIME) {
        for (String allowedMIME : this.allowedMIMETypes) {
            if (MIME.equals(allowedMIME)) {
                return true;
            }
        }
        return false;
    }
}
