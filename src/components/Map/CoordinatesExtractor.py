#!pip install geopy
import json
import pandas as pd
import numpy as np
from geopy.geocoders import Nominatim

def getHospitals():
    url = 'https://en.wikipedia.org/wiki/List_of_hospitals_in_Ukraine'
    dfs = pd.read_html(url)

    my_table = pd.read_html(url, match='Hospitals')
    listHospitals = my_table[0]
    listHospitals = listHospitals.to_numpy()
    return(listHospitals)

listHospitals = getHospitals()
'''
for hospital, city, year, comment in listHospitals:
    print(hospital, city)
'''

def get(h, c):
    geolocator = Nominatim(user_agent='my_application', timeout=10)
    try:
        location = geolocator.geocode('City Clinical Hospital No.2 Kyiv')
        lat = location.latitude
        lon = location.longitude
        return(h, c, lat, lon)
    except:
        return(None)

places = []
for hospital, city, year, comment in listHospitals:
    data = get(hospital, city)
    if data == None:
        continue
    #print(data)
    h, c, la, lo = data
    d = {"lat": la, "lon": lo, "text": h}
    #print(d)
    #print()
    places.append(d)

#print(places)

with open('places.json', 'w') as outfile:
    json.dump(places, outfile)
