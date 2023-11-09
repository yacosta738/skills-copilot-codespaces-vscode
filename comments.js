// Create web server

var server = http.createServer(function(req, res) {
  var url = req.url;
  var method = req.method;
  var headers = req.headers;
  var body = [];

  req.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();

    // Log request

    console.log('URL: ' + url);
    console.log('Method: ' + method);
    console.log('Headers: ' + JSON.stringify(headers));
    console.log('Body: ' + body);

    // Respond

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });
});