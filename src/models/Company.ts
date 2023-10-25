import { JobOpening } from "./JobOpening";

export class Company {
    constructor(
        public Id: string,
        public Name: string,
        public Address: string,
        public JobOpenings: JobOpening[]
    ) {
        this.expanded = false; // Initialize the expanded state as false
    }

    expanded: boolean;
}