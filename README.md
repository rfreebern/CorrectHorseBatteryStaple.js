# Correct Horse Battery Staple

Yet another simple passphrase generator. See [this XKCD](https://xkcd.com/936/) for an explanation.

## Installation

`$ npm install correcthorsebatterystaple`

## Usage

### Module

```
var chbs = require('correcthorsebatterystaple');
new chbs();
```

#### Options

You can configure the behavior by passing an options object:

```
new chbs({
    min: 15, // Mininum number of characters in returned passphrase. Default 20.
    max: 25, // Maximum number of characters in returned passphrase. Default 30.
    words: "wordlist/enable.txt" // Use a different word list. Default "up-goer-five.txt".
});
```

#### Callback

By default, the generated passphrase is sent to `console.log`. You can change this by passing a callback:

```
new chbs(function (pwd) {
    doSomethingWith(pwd);
});

new chbs({
    min: 16,
    max: 24
}, function (pwd) {
    doSomethingElseWith(pwd);
});
```

### Command-line script

```
$ ./chbs
pick flip mad forget
```

## Included word lists

* `up-goer-five.txt`: The 1000 most common words in the English language.
* `enable.txt`: The ENABLE word list (Enhanced North American Benchmark Lexicon).
* `top1000fr.txt`: The 1000 most common words in the French language.
* `top1000de.txt`: The 1000 most common words in the German language.
* `top1000nl.txt`: The 1000 most common words in the Dutch language.

## Thanks

* [Randall Munroe](http://xkcd.com/) for the inspiration and package name.
* [Theo Sanderson](http://splasho.com/upgoer5/) for the [Up Goer Five Word List](http://splasho.com/upgoer5/phpspellcheck/dictionaries/1000.dicin).
* [Peter Norvig](http://norvig.com/ngrams/) for the ENABLE word list.
* [University of Leipzig](http://wortschatz.uni-leipzig.de/html/wliste.html) for the French, Dutch, and German word lists.
