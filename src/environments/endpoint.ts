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
    installation_details: environment.apiUrl+"/installazione/${id}/details/",//GET
    installation_create: environment.apiUrl+"/installazione/create",//POST
    installation_update: environment.apiUrl+"/installazione/update",//PUT
    installation_remove: environment.apiUrl+"/installazione/remove",//DELETE
    location: environment.apiUrl+"/location/",//GET params {offset,page_size}
    location_datails: environment.apiUrl+"/location/details/",//GET
    location_resources: environment.apiUrl+"/location/resuorces",//GET params {offset,page_size}
    location_resource_details: environment.apiUrl+"/location/resuorces/",//GET {id}
    location_resource_create: environment.apiUrl+"/location/resuorces/",//POST
    location_ssc: environment.apiUrl+"/location/ssc"
};
