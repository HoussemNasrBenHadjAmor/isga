import { defineQuery } from "next-sanity";

export const homeQuery = defineQuery(
  `
    *[_type == 'home'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },

       content -> {
          _id,
          title[],
          subtitle[],
          description[]
        },

        home_isga -> {
          _id,
          image {
            asset -> { url } 
          },
          title,
          description,
          cards []-> {
            _id,
            title,
            subtitle,
            description,
            image {
              asset -> { url } 
            },
            svg_path,
          } 
        },
    
       card_primary []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
         card_secondary []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        }, 

    }   
  `
);

export const aboutQuery = defineQuery(
  `
    *[_type == 'about'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },

       content -> {
          _id,
          title[],
          subtitle[],
          description[]
        },
    
       card_primary []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
         card_secondary []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        }, 

    }   
  `
);

export const consultingQuery = defineQuery(
  `
    *[_type == 'consultingServices'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
              
       title_section_primary -> {
          _id,
          title[],
          subtitle[],
          description[],
        },

        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        },

        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        },
        
        title_section_secondary -> {
          _id,
          title[],
          subtitle[],
          description[],
        },
    
       card_primary []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
         card []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        }, 

    }   
  `
);

export const applicationQuery = defineQuery(
  `
    *[_type == 'applicationServices'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
       
       content -> {
         _id,
         title[],
         subtitle[],
         description[],
        },

       title_section -> {
          _id,
          title[],
          subtitle[],
          description[],
        },       
    
       card_primary []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },    
        
        card_secondary []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },
    }   
  `
);

export const technologiesQuery = defineQuery(
  `
    *[_type == 'technologiesServices'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
              
       title_section -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
        
        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        },
    
       card []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },    

    }   
  `
);

export const managedQuery = defineQuery(
  `
    *[_type == 'managedServices'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
              
       title_section -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
        
        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        },
    
        card []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },        
    }   
  `
);

export const projectQuery = defineQuery(
  `
    *[_type == 'projectServices'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
              
       title_section -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
        
        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        },
    
        card []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },        
    }   
  `
);

export const artificialQuery = defineQuery(
  `
    *[_type == 'artificialServices'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
              
       title_section -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
        
        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        },
    
        card []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },        
    }   
  `
);

export const cyberQuery = defineQuery(
  `
    *[_type == 'cyberServices'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
              
       title_section -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
        
        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        },
    
        card []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },        
    }   
  `
);

export const governmentQuery = defineQuery(
  `
    *[_type == 'governmentIndustries'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
              
       title_section -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
        
        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        },
    
        card []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },        
    }   
  `
);

export const insuranceQuery = defineQuery(
  `
    *[_type == 'insuranceIndustries'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
              
       title_section -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
        
        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
    
        card []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },        
    }   
  `
);

export const financialQuery = defineQuery(
  `
    *[_type == 'financialIndustries'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
              
       title_section -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
        
        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
    
        card []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },        
    }   
  `
);

export const telecommunicationQuery = defineQuery(
  `
    *[_type == 'telecommunicationsIndustries'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
              
       title_section -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
        
        content -> {
          _id,
          title[],
          subtitle[],
          description[],
        }, 
    
        card []-> {
          _id,
          title,
          subtitle,
          description,
          image {
            asset -> { url } 
          },
          svg_path,       
        },        
    }   
  `
);

export const carrersQuery = defineQuery(
  `
    *[_type == 'carrers'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },
           
    }   
  `
);

export const contactQuery = defineQuery(
  `
    *[_type == 'contact'] {
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      },

      content -> {
        _id,
        title[],
        subtitle[],
        description[],
      },

      card []-> {
        _id,
        title,
        subtitle,
        description,
        image {
          asset -> { url } 
        },
        svg_path,       
      }, 
           
    }   
  `
);

export const jobQuery = defineQuery(
  `
    *[_type == 'job' && display == true] {
      _updatedAt,
      title,
      job_domain -> {
        _id,
        title
      },
      job_type -> {
        _id,
        title
      },
      description,
      qualifications,
      display

    }
  `
);

export const jobDomains = defineQuery(
  `
    *[_type == 'jobDomain'] {
      title,
      _id,
      _createdAt,
      _rev,
      _type,
      _updatedAt
    }  
  `
);

export const jobTypes = defineQuery(
  `
    *[_type == 'jobType'] {
      title,
      _id,
      _createdAt,
      _rev,
      _type,
      _updatedAt
    }  
  `
);

export const newsCategoriesQuery = defineQuery(
  `
    *[_type == 'newsCategory'] {  
      _id,
      title,
    }
  `
);

export const relatedNewsQuery = defineQuery(
  `
    *[_type == 'news' && display == true ] [0..5] {  
        _id, 
      _updatedAt,
      _createdAt,
      title,
      subtitle,
      image {
        asset -> { url }
      },
      slug
    }
  `
);

export const locationsQuery = defineQuery(
  `
    *[_type == 'locations'] {
        landing -> {
              _id,
              title[],
              subtitle[],
              description[],
              image {
                asset -> { url }
              },
              author,
            },

        locations [] -> {
          _id,
          title,
          subtitle,
          description,
          details,
          image {
            asset -> {url}
          },
          slug,
          cards [] -> {
            title,
            svg_path,
            subtitle,
            description,
            image {
              asset -> {url}
            }
          }  
        }
}
  `
);

export const aiSoftwareQuery = defineQuery(
  `
    *[_type == 'aiSoftware'] {
        _id, 
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      }, 
          
      first_content -> {
        title[],
        subtitle[],
        description[]
      },

      first_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },  

      second_content -> {
        title[],
        subtitle[],
        description[]
      },
            
      second_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

      card -> {
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

      third_content -> {
        title[],
        subtitle[],
        description[]
      },

      third_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

      fourth_content -> {
        title[],
        subtitle[],
        description[]
      },

      faq [] -> {
        _id,
        title[],
        subtitle[],
        description[]
      },  

  }
  `
);

export const aiTrainingQuery = defineQuery(
  `
    *[_type == 'aiTarining'] {
        _id, 
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      }, 
          
      first_content -> {
        title[],
        subtitle[],
        description[]
      },

      first_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },  

      second_content -> {
        title[],
        subtitle[],
        description[]
      },
            
      second_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

      card -> {
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

      third_content -> {
        title[],
        subtitle[],
        description[]
      },

      third_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

      fourth_content -> {
        title[],
        subtitle[],
        description[]
      },

      fourth_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

       fifth_content -> {
        title[],
        subtitle[],
        description[]
      },

      fifth_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

       sixth_content -> {
        title[],
        subtitle[],
        description[]
      },

      faq [] -> {
        _id,
        title[],
        subtitle[],
        description[]
      },  

  }
  `
);

export const aiConsultingQuery = defineQuery(
  `
    *[_type == 'aiConsulting'] {
        _id, 
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      }, 
          
      first_content -> {
        title[],
        subtitle[],
        description[]
      },

      first_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },  

      second_content -> {
        title[],
        subtitle[],
        description[]
      },
            
      second_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

      card -> {
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

      third_content -> {
        title[],
        subtitle[],
        description[]
      },

      third_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

      fourth_content -> {
        title[],
        subtitle[],
        description[]
      },

      fourth_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

       fifth_content -> {
        title[],
        subtitle[],
        description[]
      },

      fifth_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

       sixth_content -> {
        title[],
        subtitle[],
        description[]
      },

      faq [] -> {
        _id,
        title[],
        subtitle[],
        description[]
      },  

  }
  `
);

export const aiRdQuery = defineQuery(
  `
    *[_type == 'aiRd'] {
        _id, 
      landing -> {
        _id,
        title[],
        subtitle[],
        description[],
        image {
          asset -> { url }
        },
        author,
      }, 
          
      first_content -> {
        title[],
        subtitle[],
        description[]
      }, 

      second_content -> {
        title[],
        subtitle[],
        description[]
      },
            
      second_card [] -> {
        _id,
        title,
        svg_path,
        subtitle,
        description,
        image {
          asset -> { url }
        }
      },

  }
  `
);

export const testQuery = defineQuery(
  `
  *[_type == 'test'] {
  'title': title[$id],
  'content': content[$id]
  }
  `
);
