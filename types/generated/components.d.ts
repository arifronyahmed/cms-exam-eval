import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsFaitesDuSportImages extends Schema.Component {
  collectionName: 'components_components_faites_du_sport_images';
  info: {
    displayName: 'FaitesDuSportImages';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentsFaitesDuSportSection extends Schema.Component {
  collectionName: 'components_components_faites_du_sport_sections';
  info: {
    displayName: 'FaitesDuSportText';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    listNumber: Attribute.String;
  };
}

export interface ComponentsFooterContact extends Schema.Component {
  collectionName: 'components_components_footer_contacts';
  info: {
    displayName: 'FooterContact';
  };
  attributes: {
    telephone: Attribute.String;
    email: Attribute.String;
  };
}

export interface ComponentsHeroSection extends Schema.Component {
  collectionName: 'components_components_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'link';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ComponentsNavigation extends Schema.Component {
  collectionName: 'components_components_navigations';
  info: {
    displayName: 'navigation';
    icon: 'bulletList';
  };
  attributes: {
    link: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsNewsletterCard extends Schema.Component {
  collectionName: 'components_components_newsletter_cards';
  info: {
    displayName: 'NewsletterCard';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    newsletterTitle: Attribute.String;
    newsletterText: Attribute.String;
    placeholderText: Attribute.String;
    buttonText: Attribute.String;
    policyText: Attribute.String;
  };
}

export interface ComponentsTestimonialCard extends Schema.Component {
  collectionName: 'components_components_testimonial_cards';
  info: {
    displayName: 'TestimonialCard';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    avatar: Attribute.Media;
  };
}

export interface FaitesDuSportSectionFaitesDuSportSection
  extends Schema.Component {
  collectionName: 'components_faites_du_sport_section_faites_du_sport_sections';
  info: {
    displayName: 'FaitesDuSportSection';
    description: '';
  };
  attributes: {
    faitesDuSportText: Attribute.Component<
      'components.faites-du-sport-section',
      true
    >;
    FaitesDuSportImages: Attribute.Component<'components.faites-du-sport-images'>;
    titleSection: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.faites-du-sport-images': ComponentsFaitesDuSportImages;
      'components.faites-du-sport-section': ComponentsFaitesDuSportSection;
      'components.footer-contact': ComponentsFooterContact;
      'components.hero-section': ComponentsHeroSection;
      'components.link': ComponentsLink;
      'components.navigation': ComponentsNavigation;
      'components.newsletter-card': ComponentsNewsletterCard;
      'components.testimonial-card': ComponentsTestimonialCard;
      'faites-du-sport-section.faites-du-sport-section': FaitesDuSportSectionFaitesDuSportSection;
    }
  }
}
