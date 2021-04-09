import { LightningElement } from 'lwc';
export default class MyDataTable extends LightningElement {
 
columns = [
    { label: 'Name', fieldName: 'name', type: 'text'},
    { label: 'Photo Name', fieldName: 'photoName', type: 'text'},
    { label: 'Created Date', fieldName: 'date', type: 'text'},
    { label: 'Photo', fieldName: 'photo', type: 'customTypeA', typeAttributes: {
        photo: { fieldName: 'photoSource' } 
        }
    }
];

data = [
    { id: 1, name: 'MindFlayer 1', photoName: 'Photo 1', date: '08-05-2020', photoSource: 'https://static.wikia.nocookie.net/forgottenrealms/images/3/34/Mind_flayer.jpg/revision/latest/scale-to-width-down/346?cb=20060823145007'},
    { id: 2, name: 'MindFlayer 2', photoName: 'Photo 2', date: '01-01-2021', photoSource: 'https://static.wikia.nocookie.net/forgottenrealms/images/2/2b/Mind_flayer_-_5E.jpg/revision/latest/scale-to-width-down/350?cb=20200305201225'}
];
 
}