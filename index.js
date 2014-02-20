
window.WifiQR = {};

$(function() {

    WifiQR.app = new DevExpress.framework.html.HtmlApplication({
		navigationType: "empty",
        viewPort: {
            allowPan: true
		},
		namespace: WifiQR
    });
    WifiQR.app.router.register(":view/:id", { view: "home", id: undefined });
    WifiQR.app.navigate();   
});