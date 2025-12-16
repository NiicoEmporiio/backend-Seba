import type { Schema, Struct } from '@strapi/strapi';

export interface CommonContact extends Struct.ComponentSchema {
  collectionName: 'components_common_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    label: Schema.Attribute.String;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.contact': CommonContact;
    }
  }
}
