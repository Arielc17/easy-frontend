import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from "@angular/fire/storage";

@Component({
  selector: 'app-banco-imagenes',
  templateUrl: './banco-imagenes.component.html',
  styleUrls: ['./banco-imagenes.component.css']
})
export class BancoImagenesComponent implements OnInit {

  images: string[];

  constructor(private storage: Storage) { 
    this.images = [];
   }

  ngOnInit(): void {
    this.getImages();
  }

  uploadImage($event: any){
    const file = $event.target.files[0];
    console.log();

    const imgRef = ref(this.storage, `imagenesEmpresas/${file.name}`);

    uploadBytes(imgRef, file)
    .then(res=> {
      console.log(res)
      this.getImages();
    })
    .catch(error=> console.log(error))
  }


  getImages(){
    const imagesRef = ref(this.storage, 'imagenesEmpresas');

    listAll(imagesRef)
    .then(async res=> {
      console.log(res)
      this.images = [];

      for (let item of res.items) {
        const url = await getDownloadURL(item);
        this.images.push(url)
      }
    })
    .catch(error=> console.log(error))
  }

}
