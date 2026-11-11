from microdotphat import fill, write_string, set_decimal, clear, show
import json
import requests
import operator
import math
import time

url = "https://api.coindesk.com/v1/bpi/currentprice.json"
s = 1

while True:
    response = requests.get(url)
    jsonr = json.loads(response.text)
    price = jsonr['bpi']['USD']['rate']
    i = operator.indexOf(price,",")
    price = price.replace("," , "")
    price = round(float(price))
    price = str(price)
    clear()
    write_string('$' + price, kerning=False)
    show()
    time.sleep(10)
    
    print("updating",s)
    s = s + 1