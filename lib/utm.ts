export const getUtmParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
  let foundInUrl = false;
  keys.forEach(key => {
    const val = params.get(key);
    if (val) {
      utms[key] = val;
      sessionStorage.setItem(key, val);
      foundInUrl = true;
    }
  });
  
  if (!foundInUrl) {
    keys.forEach(key => {
      const val = sessionStorage.getItem(key);
      if (val) {
        utms[key] = val;
      }
    });
  }
  
  return utms;
};
