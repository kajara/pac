function FindProxyForURL(url, host) {
    if (shExpMatch(host, '*.adjarabet.com') || host == 'adjarabet.com') {
        return 'PROXY 5.10.35.190:3128';
    }
    return 'DIRECT';
}
