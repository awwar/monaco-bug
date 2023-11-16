How to reproduce:

1) `npm i`
2) `npm run build`
3) `python3 -m http.server 8000 -d "./build"`
4) Open `http://user:password@127.0.0.1:8000`

Accurately reproduced in the browsers Google Chrome and Microsoft Edge
My versions: 
- Google Chrome 119.0.6045.159
- Microsoft Edge 119.0.2151.58

Looks like this: 

![img.png](doc%2Fimg.png)