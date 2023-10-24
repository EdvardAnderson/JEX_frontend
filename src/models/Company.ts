import { JobOpening } from "./JobOpening";

export class Company {
    constructor(
        public id: string,
        public name: string,
        public address: string,
        public jobOpenings: JobOpening[]
    ) { }
}