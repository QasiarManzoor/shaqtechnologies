import { useEffect } from 'react';

const SITE_URL = 'https://shaqtechnologies.com';

function Seo({ title, description, path = '/', schema }) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${path}`;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.routeSchema = 'true';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => script.remove();
  }, [description, path, schema, title]);
  return null;
}

export default Seo;
