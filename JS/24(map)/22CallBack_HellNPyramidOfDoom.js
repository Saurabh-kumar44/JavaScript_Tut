//Callback back hell Or pyramid of Dom

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = function () { //This onload event occurs when an object has been loaded.
        console.log("Loaded Script With SRC: " + src);
        callback(null, src);
    }
    script.onerror = function () {
        console.log("Error loading sript " + src);
        callback(new Error("SRC got some error"))
    }
}
function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("SRC: " + src)
}

loadScript("httpdfaps://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src) {
    if (error) {
        console.log(error);
        sendEmergencymsgToCSE();//any callback if any error occur
        return;
    }
    loadScript("httpdfaps://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap2.bundle.min.js");
        if (error) {
            console.log(error);
            sendEmergencymsgToCSE();//any callback if any error occur
            return;
        }
            loadScript("httpdfaps://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap3.bundle.min.js");
            if (error) {
                console.log(error);
                sendEmergencymsgToCSE();//any callback if any error occur
                return;
            }
                loadScript("httpdfaps://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap4.bundle.min.js");
                    if(error){
                        console.log(error);
                        sendEmergencymsgToCSE();//any callback if any error occur
                        return;
                    } 
                loadScript("httpdfaps://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap5.bundle.min.js");
                        if(error){
                            console.log(error);
                            sendEmergencymsgToCSE();//any callback if any error occur
                            return;
                       } 
                        loadScript("httpdfaps://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap6.bundle.min.js");
                });
            });
        });
    });
});

//Here we are telling that if bootstrap src succusfully runs then bootstrap2 runs after bootstrap3 runs and so on and now our code is pretty bad looking
//and so many callbacks created and program grow horizontally instead of vertically and this problem is (Pyramid of DOM)

//As call becomes nested , the code becomes deeper and increasingly more difficult to manage ecprcially of we have real code instead of short work in the callbacks
//This sometimes called "Callback hell" or "Pyramid of DOM"