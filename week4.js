// dar in khat package fs ro be projje ezafe kardim in package fs baraye khundan va neveshtan rooye ye file dige masalan file txt
// estefade mishe
const fs = require('fs');


//khate 6 ba estefade az method read file e fs file ostad ro khundim va mohtavash ro too file data zakhire kardim
// deghat kon ke ham mituni az readfilesync estefade koni ham az readfile (readfilesync sadetare)
const fileData = fs.readFileSync('input.txt', 'utf8');

//khate 10 mohtavaye dakhele file ostad ro rikhtim too urls ta betunim pass bedim be fetch ke roosh kar konim
//nokte chon mikhaim rooye har kodoom az url haye dakhele file tak tak kar konim ba method split va \n goftim be soorate araye beriz
//dakhele urls va har khat ham yek eleman bashe

const urls = fileData.split('\n');
// inja ye halghe foreach zadim roo ham elemane arayeii ke sakhtim ta rooshun fetch bezanim (un index ham mostaghim be indexe eleman
// eshare mikone chize khasi nist)
urls.forEach((url, index) => {

//khate 20 ta 23 then aval ro zadim goftim response ro begir az response jasonesh ro bargadun
    fetch(url)
        .then((response) => {
            return response.json();
        })

//khate 26 be bad goftim hala bia rooye data ini ke retunr karde bud in kararo anjam bede 
        .then((data) => {

            //inja ke serfan 2 ta moteghayer sakhtim ta be writefile fs ke mikhad data haro baramoon too file benevise pas bedim
            //man az index har file baraye name filesh estefade kardam
            const fileName = `${index + 1}.txt`;

            //inja dataii ke bala jason pass dade bud ro string kardam ke beshe nevesht too file txt chon data originaly jasone va
            // wirteble nist
            const dataString = JSON.stringify(data);

            // inam marhale akhare ke ba method writefile fs file txt misazim
            // esmesh ro hamun fileName khodemun mizarim
            // chizi ke gharare benevise too file datastingie ke sakhtim va elemane kharesh ham ke vase errore chizi nist
            fs.writeFile(fileName, dataString, (err) => {
                if (err) throw err;
                console.log('ba movafaghiat anjam shod');
            });
        })
});
