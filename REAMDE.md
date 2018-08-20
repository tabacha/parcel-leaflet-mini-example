
npm install -g parcel-bundler
git clone git@github.com:tabacha/parcel-leaflet-mini-example.git

cd parcel-leaflet-mini-example

npm install


== Development Server ==

```
parcel index.html  -
```

Open  http://localhost:1234/

== Without Server ==

```
parcel watch index.html --public-url ./
```

open dist/index.html with help of your webserver

== Make Dist ==

```
parcel watch index.html --public-url ./
```