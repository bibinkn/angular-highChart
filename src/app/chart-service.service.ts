import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {

  constructor(private http: Http) { }

  // function to get the api response and convert to json
  private getResponseData(res: Response) {
    return res.json();
  }

  //function to handle the error from api call
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  //function to get the response data using promise
   public getData(): Promise<any> {
    return this.http.get('assets/mockData.json').toPromise()
      .then(this.getResponseData)
      .catch(this.handleError);
  }
}
