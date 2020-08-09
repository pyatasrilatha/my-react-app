var ibmdb = require('ibm_db');

ibmdb.open("DRIVER={DB2};DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-lon02-02.services.eu-gb.bluemix.net;UID=zdn78001;PWD=1zpm84^zw4xknqdc;PORT=50001;PROTOCOL=TCPIP", function (err,conn) {
  if (err) return console.log(err);

  conn.query('select * from testdb where id = ?', [10], function (err, data) {
    if (err) console.log(err);

    console.log(data);

    conn.close(function () {
      console.log('done');
    });
  });
});