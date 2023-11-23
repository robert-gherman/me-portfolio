// dataService.ts

import { mockCompanyDetails, mockPersonalDetails, mockProjectDetails } from './mockData';
import { Company, PersonalDetails, Project } from './types';

export async function getPersonalDetails(): Promise<PersonalDetails> {
    return mockPersonalDetails;
}

export async function getProjectDetails(): Promise<Project[]> {
    return mockProjectDetails;
}

export async function getCompanyDetails(): Promise<Company[]> {
    return mockCompanyDetails;
}
