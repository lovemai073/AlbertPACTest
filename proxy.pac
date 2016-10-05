function FindProxyForURL(url, host) {
	if(dnsDomainIs(host, ".tw")){
		return "PROXY mscss.tw:80";
	}else{
		return "DIRECT";
	}	
}
