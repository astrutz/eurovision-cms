import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCountryName extends Struct.ComponentSchema {
  collectionName: 'components_shared_country_names';
  info: {
    displayName: 'CountryName';
    icon: 'bold';
  };
  attributes: {
    Bengal: Schema.Attribute.String;
    Chinese: Schema.Attribute.String;
    English: Schema.Attribute.String;
    Farsi: Schema.Attribute.String;
    French: Schema.Attribute.String;
    German: Schema.Attribute.String;
    Hindi: Schema.Attribute.String;
    Italian: Schema.Attribute.String;
    Japanese: Schema.Attribute.String;
    Javanese: Schema.Attribute.String;
    Polish: Schema.Attribute.String;
    Portugese: Schema.Attribute.String;
    Romanian: Schema.Attribute.String;
    Russian: Schema.Attribute.String;
    Spanish: Schema.Attribute.String;
    Turkish: Schema.Attribute.String;
    Ukrainian: Schema.Attribute.String;
    Vietnamese: Schema.Attribute.String;
  };
}

export interface SharedRating extends Struct.ComponentSchema {
  collectionName: 'components_shared_ratings';
  info: {
    displayName: 'Rating';
    icon: 'chartCircle';
  };
  attributes: {
    energy: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    fun: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    staging: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    studio: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    vocals: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.country-name': SharedCountryName;
      'shared.rating': SharedRating;
    }
  }
}
