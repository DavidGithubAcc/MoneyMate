
import requests
import json

url = 'http://35.246.120.229:5000'
#url = 'http://127.0.0.1:5000'

data = {'message': [[23,"2023-01-23","19:26:20","Victoria's Secret",-6],[1,"2023-01-17","17:21:39","Guaranteed Rate",-872],[23,"2023-01-23","19:26:20","Victoria's Secret",-6],[23,"2023-01-23","19:26:20","Victoria's Secret",-6]]}

#data = {'message': objecthing}


response = requests.post(url, data=json.dumps(data), headers={'Content-Type': 'application/json'})

response_list = json.loads(response.text)

print(response_list[0])
print(response_list[1])



#url = 'http://35.246.120.229:5000/miscategorisation'
#data = {'message': 'This is a test string'}

#response = requests.post(url, data=data)

#print(response.text)

