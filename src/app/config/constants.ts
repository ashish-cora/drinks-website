import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Constants {
  public readonly BASE_API_ENDPOINT: string =
    'https://api.openbrewerydb.org/v1/breweries';
}
