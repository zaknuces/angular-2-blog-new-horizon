/**
 * A sample model class that represents a product in a inventory catalog system.
 *
 * Created by owais zahid <owais.zahid@autodesk.com> on 10/30/2015.
 */
export class Product {
    entryDate: Date;
    name: string;
    description: string;
    additionalComments: string;
    serialNumber: number;

    constructor(entryDate, name, description, additionalComments, serialNumber) {
        this.entryDate = entryDate;
        this.name = name;
        this.description = description;
        this.additionalComments = additionalComments;
        this.serialNumber = serialNumber;
    }
}