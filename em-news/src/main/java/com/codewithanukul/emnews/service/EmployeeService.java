package com.codewithanukul.emnews.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.codewithanukul.emnews.dto.EmployeeDto;
import com.codewithanukul.emnews.dto.LoginDto;
import com.codewithanukul.emnews.entity.EmployeeEntity;
import com.codewithanukul.emnews.response.LoginResponse;

@Service
public interface EmployeeService {
  public String addEmployee(EmployeeDto employeeDto);

  public List<EmployeeEntity> showEmployee();

  public LoginResponse loginEmployee(LoginDto loginDto);

}
