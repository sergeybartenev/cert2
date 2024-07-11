export interface Job {
    id: number;
    title: string; 
    companyName: string; 
    companyLogo: string; 
    types: string[]; 
    industries: string[]; 
    publishDate: string; 
    location: string; 
    reference: string;
    description: string;
  }

  export interface JobUI extends Job {
    checked: boolean;
  }

  export interface JobStore {
    id:number;
    checked:boolean;
  }

  export class JobStore1 {
    id!: number;
    checked: boolean = false;
  }