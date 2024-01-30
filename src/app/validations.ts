import { FormGroup } from "@angular/forms";
export const phonenumber=  "^((\\+91-?)|0)?[6-9]{1}[0-9]{9}$";
export const isEmailValidate ="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
export const IsValidPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z0-9@$!%*?&#]{8,14}$";
export const validpassword="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,14}$";

export function MustMatch(controlName : string, matchingControlName : string){
    return (formGroup : FormGroup)  =>{
      //  debugger
         const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
    
        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
            return;
          }
          // set error on matchingControl if validation fails
          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
          } else {
            matchingControl.setErrors(null);
          }
          return null;
    };
}