
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"); 

if (workbox) { 
    
    const strategy = new workbox.strategies.CacheFirst(); 
    const urls     = [ "offline.html" ]; 

    workbox.recipes.warmStrategyCache({ urls, strategy }); 
    workbox.recipes.offlineFallback(); 
    workbox.recipes.pageCache(); 
    workbox.recipes.staticResourceCache(); 
    workbox.recipes.imageCache(); 
    workbox.recipes.googleFontsCache(); 

} else { 

    console.log("Could not load workbox framework!"); 
}
