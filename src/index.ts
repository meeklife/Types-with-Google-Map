/// <reference types="@types/google.maps" />
import {User} from './User';
import {Company} from './Company';
import { CustomMap } from "./CustomMap";


const newCompany = new Company();
const newUser = new User();
const customMap = new CustomMap('map');


customMap.addMarker(newUser)
customMap.addMarker(newCompany)


