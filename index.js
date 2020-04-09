const request = require("request");
var onl = 'https://www.shazam.com/shazam/v2/ru/UA/web/-/tracks/world-chart-world?pageSize=200&startFrom=0'
request(onl, (err, response, ndc ) => {
    if (!err) {
        var ans = JSON.parse(ndc);
        for (var a = 0; a < 100; a++) {
            console.log((ans['name'][a]['surname']['subject'])+" "+(ans['name'][a]['sername']['hi']))
        }
    }
})