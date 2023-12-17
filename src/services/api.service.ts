// Angular
import { Injectable,  } from "@angular/core";
import { HttpClient } from "@angular/common/http"

// Libs
import { Observable } from "rxjs";

// Environments
import { environment } from "src/environments/environment";

// Enums
import { EnumEndpoints_V2 } from "src/common/enums";

// Interfaces
import { IBaseResponse } from "src/common/interfaces";

@Injectable()
export class ApiService {
    constructor(
        protected http: HttpClient
    ) {}

    /**
     * region
     *
     * Search for countries within the specified region
     *
     * @param searchParam - Region name
     *
     * @returns List with countries within the specified region
     */
    public region(searchParam: string): Observable<IBaseResponse[]> {
        return this.__get(EnumEndpoints_V2.REGION, searchParam);
    }

    /**
     * capital
     * 
     * Search for the country with the specified capital
     *
     * @param searchParam - Capital name
     *
     * @returns List containing the country corresponding to the specified capital name
     */
    public capital(searchParam: string): Observable<IBaseResponse[]> {
        return this.__get(EnumEndpoints_V2.CAPITAL, searchParam);
    }

    /**
     * language
     *
     * Search for the countries that speak the specified language
     *
     * @param searchParam - Language name
     *
     * @returns List containing the countries that speak the specified language
     */
    public language(searchParam: string): Observable<IBaseResponse[]> {
        return this.__get(EnumEndpoints_V2.LANGUAGE, searchParam);
    }

    /**
     * countryName
     *
     * Search for a country corresponding the specified name
     *
     * @param searchParam - Country name
     *
     * @returns List containing the country that matches the specified name 
     */
    public countryName(searchParam: string): Observable<IBaseResponse[]> {
        return this.__get(EnumEndpoints_V2.NAME, searchParam);
    }

    /**
     * callingCode
     *
     * Search for a country that has the specified callingCode
     *
     * @param searchParam - Calling code
     * 
     * @returns List containing the country with the specified calling code
     */
    public callingCode(searchParam: string): Observable<IBaseResponse[]> {
        return this.__get(EnumEndpoints_V2.CALLING_CODE, searchParam);
    }

    /**
     * __get
     *
     * Calls the API with the specified endpoind and search parameter
     *
     * @param endpoint - Desired endpoint
     * @param searchParam - Search parameter
     *
     * @returns List containing the results
     */
    protected __get(endpoint: EnumEndpoints_V2, searchParam: string): Observable<IBaseResponse[]> {
        return this.http.get<IBaseResponse[]>(
            `${environment.apiUrl}/${endpoint}/${searchParam}`,
            {
                observe: 'body',
            }
        );
    }
}
