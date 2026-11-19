function FindProxyForURL(url, host) {
    var sitesBloqueados = [
        "facebook.com",
        "web.whatsapp.com"
    ];

    for (var i = 0; i < sitesBloqueados.length; i++) {
        if (shExpMatch(host, "*" + sitesBloqueados[i] + "*")) {
            return "PROXY 127.0.0.1:80";
        }
    }
    return "DIRECT";
}
