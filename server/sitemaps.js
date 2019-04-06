sitemaps.add('/sitemap.xml', function() {
    // required: page
    // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos
    return [
      { page: '/', lastmod: new Date(), changefreq: 'monthly' },
      { page: '/services', lastmod: new Date(), changefreq: 'monthly' },
      { page: '/contactus',lastmod: new Date(), changefreq: 'monthly',},
      { page: '/gallery', lastmod: new Date(), changefreq: 'monthly' },
      { page: '/services/agriculture', lastmod: new Date(), changefreq: 'monthly' },
      { page: '/services/construction', lastmod: new Date(), changefreq: 'monthly' },
      { page: '/services/infrastructure', lastmod: new Date(), changefreq: 'monthly' },
      { page: '/team', lastmod: new Date(), changefreq: 'monthly' },
    ];
  });