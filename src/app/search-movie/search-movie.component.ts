import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent {
  searchForm = this.formBuilder.group({
    titleAndIdentifiantControl: this.formBuilder.group({
      title: [''],
      identifiant: [''],
    }, 
    {
      validators: this.isRequiredValidator("title", "identifiant")
    }),
    releaseDate: ['', this.rangeDateValidator(1900, new Date().getFullYear())],
    type: ['serie'],
    fiche: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm.patchValue({
      fiche: "courte",
    })
  }

  isRequiredValidator(title: string, identifiant: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
      const titleValue = control.get(title)?.value;
      const idValue = control.get(identifiant)?.value;

      if (titleValue.length === 0 && idValue.length === 0) {
       
        return {
          isRequired: 'error' ,
        };
      } else {
        return null;
      }
    };
  }

  rangeDateValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
      const yearValue = control.value;
     
      if (yearValue < min || yearValue > max) {
        
        return {
          min: {minYear: min, maxYear: max} ,
        };
      } else {
        return null;
      }
    };
  }

  onSubmit() {
    console.log(this.searchForm.value);
  }
}