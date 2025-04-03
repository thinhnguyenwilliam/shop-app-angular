import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  permissionOptions = [
    { id: 1, label: 'Permission 1' },
    { id: 2, label: 'Permission 2' },
    { id: 3, label: 'Permission 3' },
    // More permissions...
  ];

  permissionForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly http: HttpClient) {
    this.permissionForm = this.fb.group({
      permissions: this.fb.array([], Validators.required),
    });
  }

  // Getter for permissions
  get permissions() {
    return (this.permissionForm.get('permissions') as FormArray);
  }

  // Method to check if permission is selected
  isPermissionSelected(permissionId: number): boolean {
    return this.permissions.controls.some(control => control.value === permissionId);
  }

  // Handle permission change (select/deselect permission)
  onPermissionChange(event: any, permissionId: number): void {
    if (event.target.checked) {
      this.permissions.push(this.fb.control(permissionId)); // Add permission ID to FormArray
    } else {
      const index = this.permissions.controls.findIndex(control => control.value === permissionId);
      if (index >= 0) {
        this.permissions.removeAt(index); // Remove permission ID from FormArray
      }
    }
  }

  // Handle role checkbox change (select/deselect all permissions)
  onRoleChange(event: any): void {
    if (event.target.checked) {
      this.permissionOptions.forEach(permission => {
        if (!this.isPermissionSelected(permission.id)) {
          this.permissions.push(this.fb.control(permission.id)); // Add all permissions
        }
      });
    } else {
      this.permissions.clear(); // Clear all permissions
    }
  }

  // Handle form submission
  handleSubmit(): void {
    if (this.permissionForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    // Get the selected permission IDs from the form
    const selectedPermissions = this.permissionForm.value.permissions;
    console.log('Selected Permission IDs:', selectedPermissions); // Log the selected IDs

    // Post the selected permissions (you can adjust this to fit your API endpoint)
    // this.http.post('/your-api-endpoint', { permissions: selectedPermissions }).subscribe({
    //   next: (response) => {
    //     console.log('Success:', response);
    //   },
    //   error: (error) => {
    //     console.error('Error:', error);
    //   },
    //   complete: () => {
    //     console.log('Request completed');
    //   }
    // });
  }

}
