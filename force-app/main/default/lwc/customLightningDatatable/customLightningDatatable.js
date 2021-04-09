import LightningDatatable from 'lightning/datatable';
import customTypeA from './customTypeA';
export default class CustomLightningDatatable extends LightningDatatable {
static customTypes = {
    customTypeA: {
        template: customTypeA,
        typeAttributes: ['recordId', 'photo']
    }
  }
}