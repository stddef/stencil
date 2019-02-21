import * as d from '@declarations';
import { URL } from 'url';


export function normalizeHydrateOptions(inputOpts: d.HydrateOptions) {
  const outputOpts: d.HydrateOptions = Object.assign({}, inputOpts);

  return outputOpts;
}


export function generateHydrateResults(opts: d.HydrateOptions) {
  if (typeof opts.url !== 'string') {
    opts.url = `https://hydrate.stenciljs.com/`;
  }

  let urlParse: URL;
  try {
    urlParse = new URL(opts.url);
  } catch (e) {
    urlParse = {} as any;
  }

  const hydrateResults: d.HydrateResults = {
    diagnostics: [],
    url: opts.url,
    host: urlParse.host,
    hostname: urlParse.hostname,
    port: urlParse.port,
    pathname: urlParse.pathname,
    search: urlParse.search,
    hash: urlParse.hash,
    html: null,
    anchors: opts.collectAnchors ? [] : null,
    components: opts.collectComponents ? [] : null,
    styles: opts.collectScripts ? [] : null,
    scripts: opts.collectStylesheets ? [] : null,
    imgs: opts.collectImgs ? [] : null
  };

  return hydrateResults;
}
