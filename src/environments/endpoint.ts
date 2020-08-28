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
    installation: environment.apiUrl+"/installazione",//GET page
    installation_details: environment.apiUrl+"/installazione/",//GET
    installation_create: environment.apiUrl+"/installazione/",//POST
    installation_update: environment.apiUrl+"/installazione/update",//PUT
    installation_remove: environment.apiUrl+"/installazione/remove",//DELETE
    location: environment.apiUrl+"/location",//GET params {offset,page_size}
    location_create: environment.apiUrl+"/location",//POST
    location_datails: environment.apiUrl+"/location/${id}",//GET
    location_update: environment.apiUrl+"/location/update",//PUT
    location_resources: environment.apiUrl+"/location/resuorces",//GET params {offset,page_size}
    location_resource_details: environment.apiUrl+"/location/resources/",//GET {id}
    location_resource_create: environment.apiUrl+"/location/resources/",//POST
    location_ssc: environment.apiUrl+"/location/ssc"
};
