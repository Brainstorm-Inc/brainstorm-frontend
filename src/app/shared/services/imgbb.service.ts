import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImgbbService {
  ApiKey: string = "9063fd3428c5444944b29b4e896d4103";
  Url: string = "https://api.imgbb.com/1/upload";

  constructor(private http: HttpClient) {
  }

  uploadImage(image: string) {
    var formData = new FormData();
    formData.append("image", (image.replace(new RegExp(`data:image/[a-zA-Z]+;base64,`), "")));
    formData.append("key", this.ApiKey);
    return this.http.post<{ data: { url: string } }>(this.Url, formData);
  }
}
