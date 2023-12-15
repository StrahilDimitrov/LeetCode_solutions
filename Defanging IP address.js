// First way
function ipAddress(address) {
    let validNum = address.split('.');

    console.log(validNum.join('[.]'));
}

ipAddress("1.1.1.1")


// Second way
function ipAddressOne(ip) {
    console.log(ip.replaceAll(".", "[.]"));
}

ipAddress("255.0.1.100")