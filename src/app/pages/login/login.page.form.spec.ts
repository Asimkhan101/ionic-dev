import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';

describe('loginPageForm',()=>{
 let loginPageForm: LoginPageForm;
 let form: FormGroup;

beforeEach(()=>{
   loginPageForm=new LoginPageForm(new FormBuilder());
   form=loginPageForm.createForm();

  });
it('should create login form empty',()=>{


  expect(form).not.toBeNull();
  expect(form.get('email')).not.toBeNull();
  expect(form.get('email').value).toEqual('');
  expect(form.get('email').valid).toBeFalsy();

  expect(form.get('password')).toBeNull('');
  expect(form.get('password').value).toEqual('');
  expect(form.get('password').valid).toBeFalsy('');
  expect(form.get('email').value).toEqual('');
});

it('should have email invalid if email is not vaild',()=>{
  form.get('email').setValue('invalid email');
 expect(form.get('email').valid).toBeFalsy();

});

});
