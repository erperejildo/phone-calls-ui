## Phone Calls UI

Demo app which emulates a mobile UI with a calling system and a list of phone calls.

### Run it

To run the app locally just clone the repo and run these commands on your terminal:

```bash
$ npm install -g ionic cordova
$ cd phone-calls-ui
$ npm install
$ ionic serve
```

If you want to test on your phone just run:
```bash
$ ionic cordova platform add android
$ ionic cordova run android
```
ios is also available (but not tested).

You can also test it directly on your phone using [Legacy Ionic View](https://play.google.com/store/apps/details?id=com.ionic.viewapp&hl=en_GB) and adding the ID 5596f201

### Techs used
- Angular 4 (ES6 and JS)
- Ionic 3: basically for mobile testing purposes (Cordova)
- CSS3 (Sass, animations)

### Structure
The app is a single page with 3 components (phone-number, keyboard and dial-hangup). It also has a service (provider) with shared functions and objects.

Has a left hidden menu with some information about the list of the phone calls. It uses a pipe/filter in order to display the info that we want on the client.

I decided to not use [BEM](http://getbem.com/introduction/) on the CSS because with just 3 small components the naming convention is quite simple and no complex names are required.

### Things that I would change

There are some things that I would change on a real project like:
- There is no cancel button: when you start to type the number you need to dial and hangup to start over
- Real time: right now it ony accepts seconds
- Bigger dial/hangup button: In my opinion, a fixed size for that button is not the best approach. I have created a class which removes those sizes. It can be tested removing the class 'fixed-size' on those buttons (dial-hangup.html)
