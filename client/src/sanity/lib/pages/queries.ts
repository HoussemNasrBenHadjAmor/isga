import { defineQuery } from "next-sanity";

export const homeQuery = defineQuery(
  `
    *[_type == 'home'][0] {
          landingHome -> {
            _id,
            landingTitle[],
            landingSubtitle[],
            landingDescription[],
            landingImage {
              asset -> { url }
            }
          },
          
          titleSection[] -> {
            _id,
            title[],
            subtitle[],
            description[]
          },

          homeISGA[] -> {
            _id,
            Image {
              asset -> { url } 
            },
            title,
            description,
            cardChoose[]-> {
              _id,
              title,
              subtitle,
              description,
              landingImage {
                asset -> { url } 
              },
            } 
          }
        }   
     `
);

export const aboutQuery = defineQuery(
  `
        *[_type == 'about'][0] {
            landingAbout -> {
              _id,
              landingTitle,
              landingSubtitle,
              landingDescription,
              landingImage {
                asset -> { url }
              }
            },
            
            titleSection[]->{
              _id,
              title,
              subtitle,
              description
            },

            content[]-> {
              _id,
              title[],
              subtitle[],
              description[],
            },
  
            cardAboutText[]-> {
              _id,
              title,
              subtitle,
              description,
              landingImage {
                asset -> { url } 
              },
            },
  
            cardAbout[]-> {
              _id,
              title,
              subtitle,
              description,
              landingImage {
                asset -> { url } 
              },
            }
          }   
       `
);

export const consultingQuery = defineQuery(
  `
    *[_type == 'consultingServices'][0] {
              landingServices -> {
                _id,
                landingTitle,
                landingSubtitle,
                landingDescription,
                landingImage {
                  asset -> { url }
                }
              },
              
              titleSectionSecondary[]-> {
                _id,
                title[],
                subtitle[],
                description[],
              },
  
              titleSectionSecondary[]-> {
                _id,
                title[],
                subtitle[],
                description[],
              },
    
              cardConsultingServicesPrimary[]-> {
                _id,
                title,
                subtitle,
                description,
                landingImage {
                  asset -> { url } 
                },
              },

              cardConsultingServicesSecondary[]-> {
                _id,
                title,
                subtitle,
                description,
                landingImage {
                  asset -> { url } 
                },
              },
            }   
         `
);

export const technologiesQuery = defineQuery(
  `
      *[_type == 'technologiesServices'][0] {
                landingServices -> {
                  _id,
                  landingTitle,
                  landingSubtitle,
                  landingDescription,
                  landingImage {
                    asset -> { url }
                  }
                },
                
                titleSection[]-> {
                  _id,
                  title[],
                  subtitle[],
                  description[],
                },
      
                cardTechnologiesServices[]-> {
                  _id,
                  title,
                  subtitle,
                  description,
                  landingImage {
                    asset -> { url } 
                  },
                },
              }   
           `
);

export const applicationQuery = defineQuery(
  `
      *[_type == 'applicationServices'][0] {
                landingServices -> {
                  _id,
                  landingTitle,
                  landingSubtitle,
                  landingDescription,
                  landingImage {
                    asset -> { url }
                  }
                },
                
                titleSection[]-> {
                  _id,
                  title[],
                  subtitle[],
                  description[],
                },
      
                cardApplicationServicesPrimary[]-> {
                  _id,
                  title,
                  subtitle,
                  description,
                  landingImage {
                    asset -> { url } 
                  },
                },
  
                cardApplicationServicesSecondary[]-> {
                  _id,
                  title,
                  subtitle,
                  description,
                  landingImage {
                    asset -> { url } 
                  },
                },
              }   
           `
);

export const managedQuery = defineQuery(
  `
        *[_type == 'managedServices'][0] {
                  landingServices -> {
                    _id,
                    landingTitle,
                    landingSubtitle,
                    landingDescription,
                    landingImage {
                      asset -> { url }
                    }
                  },
                  
                  titleSection[]-> {
                    _id,
                    title[],
                    subtitle[],
                    description[],
                  },
        
                  cardManagedServices[]-> {
                    _id,
                    title,
                    subtitle,
                    description,
                    landingImage {
                      asset -> { url } 
                    },
                  },
                }   
             `
);

export const projectQuery = defineQuery(
  `
          *[_type == 'projectServices'][0] {
                    landingServices -> {
                      _id,
                      landingTitle,
                      landingSubtitle,
                      landingDescription,
                      landingImage {
                        asset -> { url }
                      }
                    },
                    
                    titleSection[]-> {
                      _id,
                      title[],
                      subtitle[],
                      description[],
                    },
          
                    cardProjectServices[]-> {
                      _id,
                      title,
                      subtitle,
                      description,
                      landingImage {
                        asset -> { url } 
                      },
                    },
                  }   
               `
);

export const artificialQuery = defineQuery(
  `
            *[_type == 'artificialServices'][0] {
                      landingServices -> {
                        _id,
                        landingTitle,
                        landingSubtitle,
                        landingDescription,
                        landingImage {
                          asset -> { url }
                        }
                      },
                      
                      titleSection[]-> {
                        _id,
                        title[],
                        subtitle[],
                        description[],
                      },
            
                      cardArtificalServices[]-> {
                        _id,
                        title,
                        subtitle,
                        description,
                        landingImage {
                          asset -> { url } 
                        },
                      },
                    }   
                 `
);

export const cyberQuery = defineQuery(
  `
    *[_type == 'cyberServices'][0] {
        landingServices -> {
            _id,
            landingTitle,
            landingSubtitle,
            landingDescription,
            landingImage {
                asset -> { url }
            }
        },
                        
        titleSection[]-> {
            _id,
            title[],
            subtitle[],
            description[],
        },
              
        cardCyberServices[]-> {
            _id,
            title,
            subtitle,
            description,
            landingImage {
                asset -> { url } 
            },
        },
    }   
    `
);

export const governmentQuery = defineQuery(
  `
    *[_type == 'governmentIndustries'][0] {
        landingIndustries -> {
            _id,
            landingTitle,
            landingSubtitle,
            landingDescription,
            landingImage {
                asset -> { url }
            }
        },
                        
        titleSection[]-> {
            _id,
            title[],
            subtitle[],
            description[],
        },
              
        cardGovernmentIndustries[]-> {
            _id,
            title,
            subtitle,
            description,
            landingImage {
                asset -> { url } 
            },
        },
    }   
    `
);

export const insuranceQuery = defineQuery(
  `
    *[_type == 'insuranceIndustries'][0] {
        landingIndustries -> {
            _id,
            landingTitle,
            landingSubtitle,
            landingDescription,
            landingImage {
                asset -> { url }
            }
        },
                        
        titleSection[]-> {
            _id,
            title[],
            subtitle[],
            description[],
        },
              
        cardInsuranceIndustries[]-> {
            _id,
            title,
            subtitle,
            description,
            landingImage {
                asset -> { url } 
            },
        },
    }   
    `
);

export const financialQuery = defineQuery(
  `
    *[_type == 'financialIndustries'][0] {
        landingIndustries -> {
            _id,
            landingTitle,
            landingSubtitle,
            landingDescription,
            landingImage {
                asset -> { url }
            }
        },
                        
        titleSection[]-> {
            _id,
            title[],
            subtitle[],
            description[],
        },
              
        cardFinancialIndustries[]-> {
            _id,
            title,
            subtitle,
            description,
            landingImage {
                asset -> { url } 
            },
        },
    }   
    `
);

export const telecommunicationQuery = defineQuery(
  `
    *[_type == 'telecommunicationsIndustries'][0] {
        landingIndustries -> {
            _id,
            landingTitle,
            landingSubtitle,
            landingDescription,
            landingImage {
                asset -> { url }
            }
        },
                        
        titleSection[]-> {
            _id,
            title[],
            subtitle[],
            description[],
        },
              
        cardTelecommunicationsIndustries[]-> {
            _id,
            title,
            subtitle,
            description,
            landingImage {
                asset -> { url } 
            },
        },
    }   
    `
);

export const carrersQuery = defineQuery(
  `
    *[_type == 'carrers'][0] {
        landingCarrers -> {
            _id,
            landingTitle,
            landingSubtitle,
            landingDescription,
            landingImage {
                asset -> { url }
            }
        },
    }   
    `
);

export const contactQuery = defineQuery(
  `
    *[_type == 'contact'][0] {
        landingContact -> {
            _id,
            landingTitle,
            landingSubtitle,
            landingDescription,
            landingImage {
                asset -> { url }
            }
        },
                        
        titleSection[]-> {
            _id,
            title[],
            subtitle[],
            description[],
        },
              
        cardContact[]-> {
            _id,
            title,
            subtitle,
            description,
            landingImage {
                asset -> { url } 
            },
        },
    }   
    `
);
