const base = 'https://odysee.com/$/playlist/';

function claimSearch(...claims){
  return fetch("https://api.na-backend.odysee.com/api/v1/proxy?m=claim_search", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.8",
    "content-type": "application/json-rpc",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1",
    "Referer": "https://odysee.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"jsonrpc\":\"2.0\",\"method\":\"claim_search\",\"params\":{\"claim_ids\":" + JSON.stringify(claims) + ",\"page\":1,\"page_size\":50,\"no_totals\":true},\"id\":1666845412961}",
  "method": "POST"
});
}


function videoURLS(canonical_url){
  return fetch("https://api.na-backend.odysee.com/api/v1/proxy?m=get", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.8",
    "content-type": "application/json-rpc",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1",
    "Referer": "https://odysee.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"jsonrpc\":\"2.0\",\"method\":\"get\",\"params\":{\"uri\":\"" + canonical_url + "\",\"environment\":\"live\"},\"id\":1666847704746}",
  "method": "POST"
}).then(r=>r.json())
  .then(d=>d.result.streaming_url);
}

export async function playlistVideos(playlistId){
    const searchResult = await claimSearch(playlistId).then(r=>r.json());
    const videoClaims= searchResult.result.items[0].value.claims;
    let  data = await claimSearch(...videoClaims).then(r=>r.json()).then(d=>d.result.items.map(({canonical_url,value:{title,thumbnail,description}})=>({canonical_url,title,thumbnail:thumbnail.url,description})));
    const urlPromises = data.map(d=>videoURLS(d.canonical_url));
    const stream_urls = await Promise.all(urlPromises);
    data = data.map((d,i)=>Object.assign({},d,{stream_url:stream_urls[i]}));
    return data;
}