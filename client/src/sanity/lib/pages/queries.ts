import { defineQuery } from "next-sanity";

export const homeQuery = defineQuery(
  `
    *[_type == 'home'] {
      landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url },
        },
        'author': author[$id],
      },

       content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },

        home_isga -> {
          _id,
          image {
            asset -> { url },
          },
          'title': title[$id],
          'description': description[][$id],
          cards [] -> {
            _type, _createdAt, _updatedAt, _rev,
            _id,
            'title' : title[$id],
            'subtitle' : subtitle[][$id],
            'description' : description[][$id],
            image {
              asset -> { url },
            },
            svg_path,
          } 
        },
    
       card_primary [] -> {
         _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url },
          },
          svg_path,       
        },
        
         card_secondary []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url },
          },
          svg_path,       
        },

         partnerContent -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },

        partners [] -> {
          _id,
          image {
            asset -> { url },
          },
        },
        
         metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
    }   
  `
);

export const aboutQuery = defineQuery(
  `
    *[_type == 'about'] {
      landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },

       content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },
    
       card_primary [] -> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
         card_secondary []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },

        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        } 

    }   
  `
);

export const consultingQuery = defineQuery(
  `
    *[_type == 'consultingServices'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
              
       title_section_primary -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },

        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },

        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },
        
        title_section_secondary -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },
    
       card_primary []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
         card []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }

    }   
  `
);

export const applicationQuery = defineQuery(
  `
    *[_type == 'applicationServices'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
       
       content -> {
         _id,
         'title': title[][$id],
         'subtitle': subtitle[][$id],
         'description': description[][$id],
        },

       title_section -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },       
    
       card_primary []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },    
        
        card_secondary []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },

        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
    }   
  `
);

export const technologiesQuery = defineQuery(
  `
    *[_type == 'technologiesServices'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
              
       title_section -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
        
        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },
    
       card []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }

    }   
  `
);

export const managedQuery = defineQuery(
  `
    *[_type == 'managedServices'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
              
       title_section -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
        
        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },
    
        card []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
    }   
  `
);

export const projectQuery = defineQuery(
  `
    *[_type == 'projectServices'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
              
       title_section -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
        
        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },
    
        card []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
    }   
  `
);

export const artificialQuery = defineQuery(
  `
    *[_type == 'artificialServices'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
              
       title_section -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
        
        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },
    
        card []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
    }   
  `
);

export const cyberQuery = defineQuery(
  `
    *[_type == 'cyberServices'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
              
       title_section -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
        
        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },
    
        card []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
    }   
  `
);

export const governmentQuery = defineQuery(
  `
    *[_type == 'governmentIndustries'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
              
       title_section -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
        
        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        },
    
        card []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
    }   
  `
);

export const insuranceQuery = defineQuery(
  `
    *[_type == 'insuranceIndustries'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
              
       title_section -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
        
        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
    
        card []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
    }   
  `
);

export const financialQuery = defineQuery(
  `
    *[_type == 'financialIndustries'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
              
       title_section -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
        
        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
    
        card []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
    }   
  `
);

export const telecommunicationQuery = defineQuery(
  `
    *[_type == 'telecommunicationsIndustries'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },
              
       title_section -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
        
        content -> {
          _id,
          'title': title[][$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id]
        }, 
    
        card []-> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title' : title[$id],
          'subtitle' : subtitle[][$id],
          'description' : description[][$id],
          image {
            asset -> { url } 
          },
          svg_path,       
        },
        
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
    }   
  `
);

export const carrersQuery = defineQuery(
  `
    *[_type == 'carrers'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },

      metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
           
    }   
  `
);

export const contactQuery = defineQuery(
  `
    *[_type == 'contact'] {
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },

      content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      card []-> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        image {
          asset -> { url } 
        },
        svg_path,       
      },
      
      metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
           
    }   
  `
);

export const jobsQuery = defineQuery(
  `
    *[_type == 'job' && display == true 
        && (!defined($domains) || count($domains) == 0 || job_domain->title.en in $domains)
        && (!defined($types) || count($types) == 0 || job_type->title.en in $types)
        && (!defined($keyword) || length($keyword) == 0 || (
            title[$id] match "*$keyword*" || 
            defined(description[$id]->description[][@ match "*$keyword*"]) || 
            job_type->title[$id] match "*$keyword*" || 
            job_domain->title[$id] match "*$keyword*"
          )
        )
      ] {
        _updatedAt,
        'title': title[$id],
        job_domain -> {
          _id,
          'title': title[$id],
          'title_en': title.en
        },
        job_type -> {
          _id,
          'title': title[$id],
          'title_en': title.en
        },
        'description': description[$id] -> description,
        display
    }
  `
);

export const jobDomains = defineQuery(
  `
    *[_type == 'jobDomain'] {
      'title': title[$id],
      'title_en': title['en'],
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
      'title': title[$id],
      'title_en': title['en'],
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
      'title': title[$id],
      'title_en': title['en']
    }
  `
);

export const newsPageMetadataQuery = defineQuery(
  `
  *[_type == 'newsPage'] {
    'title' : title[$id],
    'subtitle' : subtitle[$id],
      image {
        asset -> { url }
      },
    metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
    }  
  }`
);

export const newsPageQuery = defineQuery(
  `
   *[_type == 'news' && display == true && (!defined($category) || length($category) == 0 || count(category[@->title.en == $category]) > 0 ) ] | order(_createdAt {order} ) {
      _id, 
      _updatedAt,
      _createdAt,
      'title': title[$id],
      'subtitle': subtitle[$id],
      image {
        asset -> { url }
      },
      slug,

      metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
      }
    }
  `
);

export const newsSinglePageQuery = defineQuery(
  `
    *[_type == 'news' && display == true && slug.current == $slug]{
      _id, 
      _updatedAt,
      _createdAt,
      'title': title[$id],
      'subtitle': subtitle[$id],
      'details': details[$id] -> description,
      image {
        asset -> { url }
      },
      slug,
      "file": file.asset -> url,
      metadata -> {
        title,
        description,
        image {
          asset -> { url }
        }
      },
    }
  `
);

export const relatedNewsQuery = defineQuery(
  `
    *[_type == 'news' && display == true ] [0..5] {  
        _id, 
      _updatedAt,
      _createdAt,
      'title': title[$id],
      'subtitle': subtitle[][$id],
      image {
        asset -> { url }
      },
      slug
    }
  `
);

export const getNewsSlugsQuery = defineQuery(
  `
     *[_type == 'news'] {
        'slug' : slug.current
      }
  `
);

export const locationsQuery = defineQuery(
  `
    *[_type == 'locations'] {
         landing -> {
         _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },

        'title' : title[$id],

        locations [] -> {
          _id,
          'title': title[$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id],
          'details': details[$id],
          image {
            asset -> {url}
            },
            'slug': slug[$id],
            'slug_en': slug['en'],
          cards [] -> {
            _type, _createdAt, _updatedAt, _rev,
            _id,
            'title': title[$id],
            svg_path,
            'subtitle': subtitle[][$id],
            'description': description[][$id] ,
            image {
              asset -> {url}
            }
          }  
        },

        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
}
  `
);

export const getLocationsSlugsQuery = defineQuery(
  `
    *[_type == 'locations']{
      'slugs': locations [] -> {
        'slug': slug['en']
      }
    }
  `
);

export const locationQuery = defineQuery(
  `
    *[_type == 'location' && slug['en'] == $slug] {
        _id, 
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        'details': details[$id] -> description,
        image {
          asset -> { url }
        },
        'slug': slug[$id],
        cards [] -> {
          _type, _createdAt, _updatedAt, _rev,
          _id,
          'title': title[$id],
          'subtitle': subtitle[][$id],
          'description': description[][$id],
          svg_path,
          image {
            asset -> { url }
          }
        },
        metadata -> {
          title,
          description,
          image {
            asset -> { url }
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
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      }, 
          
      first_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      first_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        svg_path,
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        image {
          asset -> { url }
        }
      },  

      second_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },
            
      second_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        svg_path,
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        image {
          asset -> { url }
        }
      },

      card -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

      third_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      third_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        svg_path,
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        image {
          asset -> { url }
        }
      },

      fourth_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      faq [] -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },
      
      metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
      },

  }
  `
);

export const aiTrainingQuery = defineQuery(
  `
    *[_type == 'aiTarining'] {
        _id, 
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      }, 
          
      first_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      first_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },  

      second_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },
            
      second_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

      card -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

      third_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      third_card [] -> {
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

      fourth_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      fourth_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

       fifth_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      fifth_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

       sixth_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      faq [] -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },
      
      metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
      },

  }
  `
);

export const aiConsultingQuery = defineQuery(
  `
    *[_type == 'aiConsulting'] {
        _id, 
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      }, 
          
      first_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      first_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },  

      second_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },
            
      second_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

      card -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id] ,
        svg_path,
        image {
          asset -> { url }
        }
      },

      third_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      third_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

      fourth_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      fourth_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

       fifth_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      fifth_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

       sixth_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },

      faq [] -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },
      
      metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
      },

  }
  `
);

export const aiRdQuery = defineQuery(
  `
    *[_type == 'aiRd'] {
        _id, 
       landing -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      }, 
          
      first_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      }, 

      second_content -> {
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id]
      },
            
      second_card [] -> {
        _type, _createdAt, _updatedAt, _rev,
        _id,
        'title' : title[$id],
        'subtitle' : subtitle[][$id],
        'description' : description[][$id],
        svg_path,
        image {
          asset -> { url }
        }
      },

      metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
      },

  }
  `
);

export const linkTalentQuery = defineQuery(
  `
    *[_type == 'linkTalent'] {
         landing -> {
         _type, _createdAt, _updatedAt, _rev,
        _id,
        'title': title[][$id],
        'subtitle': subtitle[][$id],
        'description': description[][$id],
        image {
          asset -> { url }
        },
        'author': author[$id],
      },

      'details': details[$id] -> description,

        metadata -> {
          title,
          description,
          image {
            asset -> { url }
          }
        }
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
