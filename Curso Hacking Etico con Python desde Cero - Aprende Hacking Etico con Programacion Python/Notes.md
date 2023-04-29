# Preview steps (2:17)

1. Download [Virtualbox](https://www.virtualbox.org/wiki/Downloads)

2. Download [Kali Linux virtual machine](https://www.kali.org/get-kali/#kali-virtual-machines) (for Virtualbox)

3. Open the `OVA` file from the 2 step
    1. Import with default settings
    2. In network setting select **Bridge adapter** or **NAT network**

# Scripts clarifications

- 3 (man in the middle attack): activate forwarding (with root permissions write `echo 1 > /proc/sys/net/ipv4/ip_forward" in your terminal`)
- 4 (packets sniffer): first run the arp spoofer (`3.py`)