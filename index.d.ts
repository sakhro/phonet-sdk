interface IInitArgs {
  domain: string;
  apiKey: string;
}

interface IContactFieldValue {
  id: number;
  enumValueCode: string;
  lastModified: number;
  value: string;
}

interface IContactField {
  id: number;
  enumCode: string;
  values: IContactFieldValue[];
}

interface IContact {
  id: number;
  firstName: string | null;
  lastName: string | null;
  companyTitle: string | null;
  lastModified: number;
  responsibleUserId: number;
  dateCreate: number;
  createUserId: number;
  fields: IContactField[];
}

interface IBatchData {
  merge: 1 | 0;
  contacts: IContact[];
}

interface IBatchResponce {
  succeeded: number;
  failed: number;
}
