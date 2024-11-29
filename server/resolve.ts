import {defineLocations, PresentationPluginOptions} from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    // Add locations for documents of type 'post'
    home: defineLocations({
      // Select one or more fields
      select: {
        title: 'home.title',
      },
      // Those fields are available in the resolve callback function
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Home',
            href: `${process.env.SANITY_STUDIO_FRONTEND_BASE_URL}/` || '/',
          },
        ],
      }),
    }),
  },
}
