from scapy.all import *

def scan(ip):
    arp_request = ARP(pdst = "ip")
    broadcast =  Ether(dst = "ff:ff:ff:ff:ff:ff")
    arp_request_broadcast = broadcast / arp_request
    answered_list = srp(arp_request_broadcast, timeout = 1, verbose = False)[0]

    clients_list = []
    for element in answered_list:
        client_dictionary = {"ip": element[1].psrc, "mac": element[1].hwsrc}
        clients_list.append(client_dictionary)

    return clients_list

def print_results(scan_list):
    print("IP \t\t\tMAC addresses\n-----------------------------------------------")

    for client in scan_list:
        print(client["ip"] + "\t\t" + client["mac"])

scan("GATEWAY/24")