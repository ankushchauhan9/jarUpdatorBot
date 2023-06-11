import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jarUpdatorBot';
  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

ngOnInit(): void {
  
}

onFileSelected(event:any):void{
  this.selectedFile = event.target.files[0];
}

start() {
  // Logic for start button
  console.log('Start button clicked');
  if (this.selectedFile) {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    console.log('formData 1:', formData);
    console.log('formData 2:', this.selectedFile.name);
    this.http.get('http://localhost:3000/api/process-id/'+ this.selectedFile.name).subscribe(
      (response: any) => {
        // Handle the response after starting the application
        console.log('Application started successfully:', response);
      },
      (error) => {
        console.error('Error starting the application:', error);
      }
    );
  } else {
    console.error('No file selected');
  }
}

stop() {
  // Logic for stop button
  console.log('Stop button clicked');
}

preview() {
  // Logic for preview button
  console.log('Preview button clicked');
}

help() {
  // Logic for help button
  console.log('Help button clicked');
}

status() {
  // Logic for help button
  console.log('status button clicked');
}

}
