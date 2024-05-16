package com.codewithanukul.emnews.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.codewithanukul.emnews.dto.EmployeeDto;
import com.codewithanukul.emnews.dto.LoginDto;
import com.codewithanukul.emnews.entity.EmployeeEntity;
import com.codewithanukul.emnews.repository.EmployeeRepo;
import com.codewithanukul.emnews.response.LoginResponse;

@Service
public class EmployeeServiceImpl implements EmployeeService {

  @Autowired
  private EmployeeRepo employeeRepo;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Override
  public String addEmployee(EmployeeDto employeeDto) {
    if (employeeDto.getName() == "" || employeeDto.getEmail() == "" || employeeDto.getPassword() == "") {
      return "Not Found";
    }
    EmployeeEntity employee = new EmployeeEntity(
        employeeDto.getId(),
        employeeDto.getName(),
        employeeDto.getEmail(),
        passwordEncoder.encode(employeeDto.getPassword())

    );

    employeeRepo.save(employee);
    return employee.getName();
  }

  @Override
  public List<EmployeeEntity> showEmployee() {
    return employeeRepo.findAll();
  }

  @Override
  public LoginResponse loginEmployee(LoginDto loginDto) {
    EmployeeEntity employee1 = employeeRepo.findByEmail(loginDto.getEmail());
    if (employee1 != null) {
      String password = loginDto.getPassword();
      String encodedPassword = employee1.getPassword();
      Boolean isPwdCorrect = passwordEncoder.matches(password, encodedPassword);
      if (isPwdCorrect) {
        Optional<EmployeeEntity> e = employeeRepo.findOneByEmailAndPassword(loginDto.getEmail(), encodedPassword);
        if (e.isPresent()) {
          return new LoginResponse("Login Success", true);
        } else {
          return new LoginResponse("Login Failed", false);
        }
      } else {
        return new LoginResponse("Password not matched", false);
      }
    } else {
      return new LoginResponse("Email not exists", false);
    }

  }

}
