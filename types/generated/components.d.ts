import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAcces extends Schema.Component {
  collectionName: 'components_components_acces';
  info: {
    displayName: 'acces';
    description: '';
  };
  attributes: {
    parking: Attribute.String;
    transportInfo: Attribute.String;
    title: Attribute.String;
  };
}

export interface ComponentsAdvantagesSection extends Schema.Component {
  collectionName: 'components_components_advantages_sections';
  info: {
    displayName: 'AdvantagesSection';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface ComponentsContactDetails extends Schema.Component {
  collectionName: 'components_components_contact_details';
  info: {
    displayName: 'ContactDetails';
  };
  attributes: {
    title: Attribute.String;
    address: Attribute.String;
    email: Attribute.String;
    telephone: Attribute.String;
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
    policyText: Attribute.String;
  };
}

export interface ComponentsSocialMedia extends Schema.Component {
  collectionName: 'components_components_social_medias';
  info: {
    displayName: 'socialMedia';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ComponentsTestimonialCard extends Schema.Component {
  collectionName: 'components_components_testimonial_cards';
  info: {
    displayName: 'TestimonialCard';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    post: Attribute.String;
    avatarUrl: Attribute.String;
  };
}

export interface ComponentsTestimonialSection extends Schema.Component {
  collectionName: 'components_components_testimonial_sections';
  info: {
    displayName: 'TestimonialSection';
    icon: 'discuss';
  };
  attributes: {
    testimonialCard: Attribute.Component<'components.testimonial-card', true>;
  };
}

export interface ContactSectionContactSection extends Schema.Component {
  collectionName: 'components_contact_section_contact_sections';
  info: {
    displayName: 'contactSection';
    description: '';
  };
  attributes: {
    contactDetails: Attribute.Component<'components.contact-details'>;
    acces: Attribute.Component<'components.acces'>;
    socialMedia: Attribute.Component<'components.link', true>;
    hoursInfo: Attribute.Component<'contact-section.hours-info', true>;
  };
}

export interface ContactSectionHoursInfo extends Schema.Component {
  collectionName: 'components_contact_section_hours_infos';
  info: {
    displayName: 'hoursInfo';
    icon: 'clock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    subTitleText: Attribute.String;
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
    image1: Attribute.Media;
    image2: Attribute.Media;
    titleSection: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.acces': ComponentsAcces;
      'components.advantages-section': ComponentsAdvantagesSection;
      'components.contact-details': ComponentsContactDetails;
      'components.faites-du-sport-section': ComponentsFaitesDuSportSection;
      'components.footer-contact': ComponentsFooterContact;
      'components.hero-section': ComponentsHeroSection;
      'components.link': ComponentsLink;
      'components.navigation': ComponentsNavigation;
      'components.newsletter-card': ComponentsNewsletterCard;
      'components.social-media': ComponentsSocialMedia;
      'components.testimonial-card': ComponentsTestimonialCard;
      'components.testimonial-section': ComponentsTestimonialSection;
      'contact-section.contact-section': ContactSectionContactSection;
      'contact-section.hours-info': ContactSectionHoursInfo;
      'faites-du-sport-section.faites-du-sport-section': FaitesDuSportSectionFaitesDuSportSection;
    }
  }
}
