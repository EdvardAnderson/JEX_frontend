export class JobOpening {
    constructor(
        public Id: string,
        public Title: string,
        public Description: string,
        public IsActive:boolean
    ) {
        this.editMode = false

     }
     editMode:boolean;
}