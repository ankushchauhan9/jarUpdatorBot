import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

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
    const file: File = this.selectedFile;
    const args: string = 'hello'; // Replace with your desired arguments
    this.executeEXEWithArguments(file,args);
    //this.executeJarWithArguments(file, args);
  }
}

stop() {
  // Logic for stop button
  console.log('Stop button clicked');
  if (this.selectedFile) {
  
    this.http.get('http://localhost:3000/api/process-id/'+ this.selectedFile.name).subscribe(
      (response: any) => {
        // Handle the response after starting the application
        console.log('Application closed successfully:', response);
      },
      (error) => {
        console.error('Error clsoing the application:', error);
      }
    );
  } else {
    console.error('No file selected');
  }
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

executeJarWithArguments(jarFile: File, params: string): void {
  console.log('params' + params);
   const filepath ='C:/Users/Horizon/Desktop/';
  const formData = new FormData();
    formData.append('jarFile', jarFile, jarFile.name);
    formData.append('params', params);
    formData.append('filepath', filepath);
  this.http.post('http://localhost:3000/execute-jar',  formData).subscribe(
    () => {
      // Handle success response
      console.log('JAR execution successful');
    },
    (error) => {
      // Handle error response
      console.error('JAR execution failed', error);
    }
  );
}

executeEXEWithArguments(exeFile: File, params: string): void {
  
  console.log('params ' + params);
   const filepath ='C:/Users/Horizon/Desktop/';
  const formData = new FormData();
    formData.append('exeFile', exeFile, exeFile.name);
    formData.append('params', params);
    formData.append('filepath', filepath);
  this.http.post('http://localhost:3000/execute-exe',  formData).subscribe(
    () => {
      // Handle success response
      console.log('EXE execution successful');
    },
    (error) => {
      // Handle error response
      console.error('EXE execution failed', error);
    }
  );
}

}
