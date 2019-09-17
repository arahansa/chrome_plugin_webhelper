chrome.storage.sync.get(['on', 'selector', 'time'], function (items) {
    if (items.on) {
        setInterval(()=>$(items.selector).click(), items.time);
    }else{
        console.log('items :', items)
    }
});
