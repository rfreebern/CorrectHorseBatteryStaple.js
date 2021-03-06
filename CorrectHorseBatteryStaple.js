var CorrectHorseBatteryStaple = function (options, callback) {
    var fs = require('fs');
    var path = require('path');
    var that = this;

    // Support passing callback as only argument.
    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    // Merge passed options with defaults.
    this.options = options || {};
    this.options = {
        min: this.options.min || 20,
        max: this.options.max || 30,
        words: this.options.words || "up-goer-five.txt"
    };

    // If no callback is provided, log to the console.
    this.callback = callback || console.log;

    // Resolve wordlist.
    fs.exists(this.options.words, function (exists) {
        if (!exists) {
            builtIn = path.join(__dirname, "./wordlist") + "/" + that.options.words;
            fs.exists(builtIn, function (exists) {
                if (!exists) throw "Can't read " + that.options.words;
                that.options.words = builtIn;
                create();
            });
        } else {
            create();
        }
    });

    function create () {
        fs.readFile(that.options.words, 'utf8', function (err, data) {
            if (err) throw err;
            var words = data.split("\n");
            shuffleArray(words);

            var password = [];
            while (password.join(" ").length < that.options.min && words.length) {
                password.push(words.shift().trim());
                if (password.join(" ").length > that.options.max) {
                    password.pop();
                }
            }

            if (password.join(" ").length < that.options.min) {
                throw "Dictionary " + that.options.words + " exhausted!";
            }

            that.callback(password.join(" "));
        });
    }

    // Durstenfeld's optimized Fisher-Yates shuffle.
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
};
if (typeof module !== "undefined" && module.exports) {
    module.exports = CorrectHorseBatteryStaple;
}
