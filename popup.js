chrome.storage.sync.get(['on', 'selector', 'time'], function (items) {
    $("#selector").val(items.selector)
    $("#time").val(items.time)
    if(items.on){
        $("#on").prop('checked', true)
    }
})

document.getElementById('submit')
    .addEventListener('click', () => {
        const data = {
            selector: $("#selector").val(),
            on: $("#on").is(":checked"),
            time : $("#time").val()
        }
        if(data.on && data.className.length === 0){
            chrome.tabs.executeScript({file: 'validationfail.js'})
        }else{
            chrome.storage.sync.set(data, () => chrome.tabs.executeScript({file: 'alert.js'}))
        }

    });



