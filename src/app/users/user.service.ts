import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';



@Injectable({
    providedIn: "root"
  })
  export class UsersService {

    public useLocation?: [ number , number ];

    get isUserLocationReady(): boolean {
        return !!this.useLocation;
    }



    constructor(private http: HttpClient , private cookies: CookieService) {
        this.getUserLocation();
    }
    
    public async getUserLocation():Promise<[number,number]>{

        return new Promise((resolve ,reject) => {
            navigator.geolocation.getCurrentPosition(
                ({coords}) => {
                this.useLocation = [coords.longitude , coords.latitude];
                resolve(this.useLocation);
            },
                (err) => {
                    alert('No se logro obtener la geolocalizacion')
                    console.log(err);
                    reject();
                }
            );
        });
    }
    
    
    login(user: any): Observable<any> {
        //necesito una api
        return this.http.post("https://reqres.in/api/login", user);
    }
    register(user: any):Observable<any>{
        //necesito api x2
        return this.http.post("https://reqres.in/api/register",user);
    }
    setToken(token: string){

        this.cookies.set("token", token);
    }
    getToken(){
        return this.cookies.get("token");
    }


    

}



