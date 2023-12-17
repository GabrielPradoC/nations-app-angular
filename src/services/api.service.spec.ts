// Angular
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Libs
import { of } from 'rxjs';

// Services
import { ApiService } from './api.service';

// Enums
import { EnumEndpoints_V2 } from 'src/common/enums';

describe('ApiService', () => {
    let http: HttpClient;
    let sut: ApiService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [],
            providers: [HttpClient, ApiService]
        });
        sut = TestBed.inject(ApiService);
        http = TestBed.inject(HttpClient);
    });

    describe('#region', () => {
        it('should call __get with correct params', () => {
            // Arrange
            spyOn<any>(sut, '__get');

            // Act
            sut.region('test');

            // Assert
            expect(sut['__get']).toHaveBeenCalledOnceWith(
                EnumEndpoints_V2.REGION,
                jasmine.any(String)
            );
        });
    });

    describe('#capital', () => {
        it('should call __get with correct params', () => {
            // Arrange
            spyOn<any>(sut, '__get');

            // Act
            sut.capital('test');

            // Assert
            expect(sut['__get']).toHaveBeenCalledOnceWith(
                EnumEndpoints_V2.CAPITAL,
                jasmine.any(String)
            );
        });
    });
    
    describe('#language', () => {
        it('should call __get with correct params', () => {
            // Arrange
            spyOn<any>(sut, '__get');

            // Act
            sut.language('test');

            // Assert
            expect(sut['__get']).toHaveBeenCalledOnceWith(
                EnumEndpoints_V2.LANGUAGE,
                jasmine.any(String)
            );
        });
    });

    describe('#countryName', () => {
        it('should call __get with correct params', () => {
            // Arrange
            spyOn<any>(sut, '__get');

            // Act
            sut.countryName('test');

            // Assert
            expect(sut['__get']).toHaveBeenCalledOnceWith(
                EnumEndpoints_V2.NAME,
                jasmine.any(String)
            );
        });
    });

    describe('#callingCode', () => {
        it('should call __get with correct params', () => {
            // Arrange
            spyOn<any>(sut, '__get');

            // Act
            sut.callingCode('test');

            // Assert
            expect(sut['__get']).toHaveBeenCalledOnceWith(
                EnumEndpoints_V2.CALLING_CODE,
                jasmine.any(String)
            );
        });
    });

    describe('#__get', () => {
        it('should call http.get with correct params', () => {
            // Arrange
            spyOn(http, 'get').and.returnValue(of());

            // Act
            sut['__get'](EnumEndpoints_V2.CAPITAL, 'test');

            // Assert
            expect(http.get).toHaveBeenCalledOnceWith(
                jasmine.any(String),
                {
                    observe: 'body'
                }
            );
        });
    });
});
