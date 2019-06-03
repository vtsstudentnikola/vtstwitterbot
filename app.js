const CurrentTime = require('./current-time.js');
const Twit = require('twit');
const https = require('https');

const t = new Twit({
  consumer_key:         'N9Ud434bO3z2CyjJrVD0cSdLJ',
  consumer_secret:      'f8LhmD2NBNl5kjETM0RhlxPphXKr29injcCpaUz37QnC9tBPlM',
  access_token:         '1132576766919368705-jK19POk7d1BxU9mlNRMCDvaemUaNjE',
  access_token_secret:  'GtSrDx7KbKBJn9vbamOV133crfckalfQzYQx5s1v0pBq6',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

t.post('statuses/update', { status: 'Hello VTS!' }, function(err, data, response) {
  console.log(data)
});

// const options = {
//     hostname: 'worldtimeapi.org',
//     path: '/api/timezone/Europe/Belgrade',
//     method: 'GET',
//     port: 443
// }

// setInterval(() => {
//   const req = https.request(options, (res) => {
//     console.log(`statusCode: ${res.statusCode}`)

//     res.on('data', (d) => {
//       try {
//         const currentTime = new CurrentTime(JSON.parse(d));
//         console.log("Trenutno vreme:", currentTime.datetime, currentTime.timezone);
//       } catch(err) {
//         console.log(err);
//       }
//     })
//   });

//   req.on('error', (error) => {
//       console.error(error)
//   })

//   req.end()
// }, 1000*2);



// Ovo je deo za objavu tvitova.




