import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jarUpdatorBot';
  selectedFile!: File;

ngOnInit(): void {
  
}

onFileSelected(event:any):void{
  this.selectedFile = event.target.file[0];
}

start() {
  // Logic for start button
  console.log('Start button clicked');
  if (this.selectedFile) {
    const fileUrl = URL.createObjectURL(this.selectedFile);
    window.open(fileUrl);
    console.log('File Opened successfully');
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
