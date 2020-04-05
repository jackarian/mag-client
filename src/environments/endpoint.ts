// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {environment} from './environment'
export const endpoints = {
    login: environment.apiUrl+"/auth/login",//POST
    logout: environment.apiUrl+"/auth/logout",//GET
    register: environment.apiUrl+"/auth/register",//POST
    user:   environment.apiUrl+"/user",//GET
    user_upadate:environment.apiUrl+"/user/update",//POST
    user_group: environment.apiUrl+"/user/group",//GET
    installation: environment.apiUrl+"/installation",//GET
    installation_details: environment.apiUrl+"/installation/details",//GET
    installation_create: environment.apiUrl+"/installation/create",//POST
    installation_update: environment.apiUrl+"/installation/update",//POST
    location: environment.apiUrl+"/location",//GET params {offset,page_size}
    location_datails: environment.apiUrl+"/location/{id}",//GET
    location_resources: environment.apiUrl+"/location/resuorces",//GET params {offset,page_size}
    location_resource_details: environment.apiUrl+"/location/resuorces/",//GET {id}
    location_resource_create: environment.apiUrl+"/location/resuorces/{id}",//GET
    location_ssc: environment.apiUrl+"/location/ssc"
};
