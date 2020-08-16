import { environment } from '../../environments/environment';

import { IProject } from './IProject';
import { testUniqueness } from './utils';

import { DistractedDriverMOdule } from './data/distracted-driver-module';
import { ExhibitionEnquiryBank } from './data/exhibition-enquiry-bank';
import { PanelTestRecord } from './data/panel-test-record';
import { DNDMS } from './data/dndms';
import { VMS } from './data/vms';

const getAllProject = () => {
  const projects = [
    DistractedDriverMOdule,
    ExhibitionEnquiryBank,
    PanelTestRecord,
    DNDMS,
    VMS
  ];

  if (!environment.production) {
    const result = testUniqueness(projects, project => project.id);

    if (result.error) {
      const errorLog = [];
      result.duplicates.forEach((project: IProject) => {
        errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
      });
      throw new Error(JSON.stringify(errorLog));
    }
  }

  return projects;
};

export const ALL_PROJECT_DATA = getAllProject();
