const fs = require('fs');

fs.readFile('input.txt', 'utf8', async (err, fileData) => {
  if (err) {
    console.error(err);
    return;
  }
  const urls = fileData.split('\n');
  for (const [index, url] of urls.entries()) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const fileName = `${index + 1}.txt`;
      const dataString = JSON.stringify(data,null,2);
      fs.writeFile(fileName, dataString, (err) => {
        if (err) throw err;
        console.log('well done');
      });
    } catch (error) {
      console.error(error);
    }
  }
});
