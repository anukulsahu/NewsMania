package com.codewithanukul.emnews.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.codewithanukul.emnews.dto.EmployeeDto;
import com.codewithanukul.emnews.dto.LoginDto;
import com.codewithanukul.emnews.entity.EmployeeEntity;
import com.codewithanukul.emnews.response.LoginResponse;
import com.codewithanukul.emnews.service.EmployeeService;

@RestController
@RequestMapping("news")
@CrossOrigin("http://localhost:6682")
public class EmpController {
  @Autowired
  private EmployeeService employeeService;

  @PostMapping("addusers")
  public String saveEmployee(@RequestBody EmployeeDto employeeDto) {
    String name = employeeService.addEmployee(employeeDto);
    return name;
  }

  @GetMapping("getusers")
  public List<EmployeeEntity> getEmployee() {
    return employeeService.showEmployee();
  }

  @PostMapping("login")
  public ResponseEntity<?> loginEmployee(@RequestBody LoginDto loginDto) {
    LoginResponse loginResponse = employeeService.loginEmployee(loginDto);
    return ResponseEntity.ok(loginResponse);

  }

}
