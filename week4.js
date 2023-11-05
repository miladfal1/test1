const fs = require('fs');

fs.readFile('input.txt', 'utf8', async (err, fileData) => {
  if (err) {
    console.error(err);
    return;
  }
  const urls = fileData.split('\n');
  for (let index = 0; index < urls.length; index++) {
    const url = urls[index];
    const response = await fetch(url);
    const data = await response.json();
    const fileName = `${index + 1}.txt`;
    const dataString = JSON.stringify(data,null,2);
    fs.writeFile(fileName, dataString, (err) => {
      if (err) throw err;
      console.log('well done');
    });
  }
});
