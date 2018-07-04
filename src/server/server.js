const express = require('express'),
      bodyParser = require('body-parser'),
      axios = require('axios'),
      app = express(),
      querystring = require('querystring')
      


PORT = 3005;

app.use(bodyParser.json());

// let bodyFormData = new FormData();
// bodyFormData.append('template_id', '61579');
// bodyFormData.append('username', 'aibarra13');
// bodyFormData.append('password', 'ibarra2016!');
// bodyFormData.append('text0', 'what');
// bodyFormData.append('text1', 'is up');

// const config = {
//       headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//       }
// }

axios.post('https://api.imgflip.com/caption_image', querystring.stringify({
      template_id: '61579',
      username: 'aibarra13',
      password: 'ibarra2016!',
      text0: 'Hello',
      text1: 'World'
}))
.then(res => console.log(res));


// axios.post('https://api.imgflip.com/caption_image', bodyFo)
//       .then(response => console.log(response))
//       .catch(err => console.log(err));


// axios({
//       method: 'POST',
//       url: 'https://api.imgflip.com/caption_image',
//       headers: {
//             'Content-Type': 'multipart/form-data'
//       },
//       formData: {
//             template_id: '61579',
//             username: 'aibarra13',
//             password: 'ibarra2016!',
//             text0: 'Hello',
//             text1: 'world'
//       }, 
// })
// .then(res => console.log(res))



// axios('https://api.imgflip.com/caption_image', formData)
// .then(res => console.log(res.data))
// .catch(err => console.log(err))



app.listen(PORT, () => console.log('Listening'));