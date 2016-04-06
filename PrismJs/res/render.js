var render_prism=function(){
    Prism.highlightAll();
    var titleEl = document.getElementsByTagName("title")[0];
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if(MutationObserver){
        var MutationObserverConfig={
            childList: true,
            subtree: true,
            characterData: true
        };
        var observer=new MutationObserver(function(mutations){
            Prism.highlightAll();
        });
        observer.observe(titleEl,MutationObserverConfig);
    }
    else if(titleEl.addEventListener){
        titleEl.addEventListener("DOMSubtreeModified", function(evt) {
            Prism.highlightAll();
        }, false);
    }
    else{
        console.log('unsupported browser');
    }
};
render_prism();
