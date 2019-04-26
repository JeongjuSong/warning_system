var express = require('express');
var router = express.Router();
var fs = require('fs');
var Client = require('./client.js');
var urlencode = require('urlencode');
var request = require('request');
var mysql = require('mysql');
var dbconfig = require('./database.js');
var connection = mysql.createConnection(dbconfig);
/* get db*/

var connection;

function handleDisconnect() {
    connection = mysql.createConnection(dbconfig); // Recreate the connection, since
    // the old one cannot be reused.

    connection.connect(function (err) { // The server is either down
        if (err) { // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        } // to avoid a hot loop, and to allow our node script to
    }); // process asynchronous requests in  meantime.
    // If you're also serving http, display a 503 error.
    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect(); // lost due to either server restart, or a
        } else { // connnection idle timeout (the wait_timeout
            throw err; // server variable configures this)
        }
    });
}

handleDisconnect();

var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

// router.get('/user_area', function (req, res, next) {

//     connection.query('SELECT area FROM users', function (err, rows) {
//         if (err) throw err;
//         req.

//         res.send(rows);
//     });
// });

router.get('/', function (req, res, next) {
    connection.query('SELECT area FROM users', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    });
});

router.get('/login', function (req, res, next) {
    connection.query('SELECT area FROM users', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    });
});

router.post('/login', function (req, res, next) {

    connection.query('SELECT area FROM users', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);
        res.send(rows);
    });
});

router.get('/regionseoul', function (req, res, next) {
    connection.query('SELECT * FROM region WHERE location="seoul";', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})

router.get('/regionincheon', function (req, res, next) {
    connection.query('SELECT * FROM region WHERE location="incheon";', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})

router.get('/regiongangwon', function (req, res, next) {
    connection.query('SELECT * FROM region WHERE location="gangwon";', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})

router.get('/regiongyeongbuk', function (req, res, next) {
    connection.query('SELECT * FROM region WHERE location="gyeongbuk";', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})

router.get('/regionjeju', function (req, res, next) {
    connection.query('SELECT * FROM region WHERE location="jeju";', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})

router.get('/facilityseoul', function (req, res, next) {
    connection.query('SELECT * FROM facility WHERE location="seoul";', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})

router.get('/facilityincheon', function (req, res, next) {
    connection.query('SELECT * FROM facility WHERE location="incheon";', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})

router.get('/facilitygangwon', function (req, res, next) {
    connection.query('SELECT * FROM facility WHERE location="gangwon";', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})

router.get('/facilitygyeongbuk', function (req, res, next) {
    connection.query('SELECT * FROM facility WHERE location="gyeongbuk";', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})

router.get('/facilityjeju', function (req, res, next) {
    connection.query('SELECT * FROM facility WHERE location="jeju";', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})


router.get('/group', function (req, res, next) {
    connection.query('SELECT * from groupdata', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});


router.post('/groupinsert', function (req, res, next) {
    console.log('group data insert 됨')
    var id = req.body.id;
    var pId = req.body.pId;
    var name = req.body.name;

    var datas = [id, pId, name];

    connection.query('INSERT INTO groupdata(id, pId, name) ' + 'values("' + req.body.id + '","' + req.body.pId + '","' + req.body.name + '")',
        function (err, results, fiels) {
            // console.log(arguments);
        });

    res.send("okay");
});

router.post('/groupdelete', function (req, res, next) {
    console.log('group data delete 됨')
    var name = req.body.name;

    var sql = 'DELETE FROM groupdata WHERE name=' + req.body.name;
    connection.query(sql, ['name'], function (err, results, fiels) {
        // console.log(arguments);
    });

    res.send("okay");
});

// 재난 종류 db
router.get('/weather_special', function (req, res, next) {
    connection.query('SELECT situation from type WHERE category=1;', function (err, rows) {
        if (err) throw err;

        res.send(rows);
    })
})

// edit_message db
router.get('/subject', function (req, res, next) {
    connection.query('SELECT * from subject', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});

router.get('/subject/all', function (req, res, next) {

    connection.query('SELECT * from subject', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);
        res.send(rows);
    });
});

router.all('/subjectinsert', function (req, res, next) {


    /* insert 쿼리문수정 */
    connection.query('INSERT INTO subject(no, headline, description, instruction) ' + 'values("' + req.body.no + '","' + req.body.headline + '","' + req.body.description+ '","' + req.body.instruction + '")',
        function (err, results, fiels) {
            // console.log(arguments);
        });

    res.send("okay");
});

router.all('/subjectupdate', function (req, res, next) {

    /* update 쿼리문수정 */
    connection.query(
            "UPDATE subject SET headline='" + req.body.headline + "'" +
            ", description='" + req.body.description + "'" +
            ", instruction='" + req.body.instruction + "' where no=" + req.body.no),
        function (err, results, fiels) {
            // console.log(arguments);
        };

    res.send("okay");
});

router.all('/sbjectdelete', function (req, res, next) {

    // console.log("req"+req.body.No);
    // console.log("req"+req.body);


    var sql = 'DELETE FROM subject WHERE no=' + req.body.no;
    connection.query(sql, ['no'], function (err, results) {
        // console.log(arguments);
    });

    res.send("okay");
});

// edit_tts db insert
router.get('/tts', function (req, res, next) {

    connection.query('SELECT * from tts', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});

router.get('/tts/all', function (req, res, next) {

    connection.query('SELECT * from tts', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);
        res.send(rows);
    });
});

router.all('/ttsinsert', function (req, res, next) {


    /* insert 쿼리문수정 */
    connection.query('INSERT INTO tts(no, title, text) ' + 'values("' + req.body.no + '","' + req.body.title + '","' + req.body.text + '")',
        function (err, results, fiels) {
            // console.log(arguments);
        });

    res.send("okay");
});

router.all('/ttsupdate', function (req, res, next) {

    /* update 쿼리문수정 */
    connection.query(
            "UPDATE tts SET title='" + req.body.title + "'" +
            ", text='" + req.body.text + "' where no=" + req.body.no),
        function (err, results, fiels) {
            // console.log(arguments);
        };

    res.send("okay");
});

router.all('/ttsdelete', function (req, res, next) {

    // console.log("req"+req.body.No);
    // console.log("req"+req.body);


    var sql = 'DELETE FROM tts WHERE no=' + req.body.no;
    connection.query(sql, ['no'], function (err, results) {
        // console.log(arguments);
    });

    res.send("okay");
});

// siren db
router.get('/siren', function (req, res, next) {

    connection.query('SELECT * from siren', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});


// check_terminal db insert
router.get('/terminal', function (req, res, next) {

    connection.query('SELECT * from terminal', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});

router.get('/terminal/all', function (req, res, next) {

    connection.query('SELECT * from terminal', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);
        res.send(rows);
    });
});

router.all('/terminalinsert', function (req, res, next) {


    /* insert 쿼리문수정 */
    connection.query('INSERT INTO terminal(no, location, detail_location, ip_address, status) ' + 'values("' + req.body.no + '","' + req.body.location + '","' + req.body.detail_location + '","' + req.body.ip_address + '","' + req.body.status + '")',
        function (err, results, fiels) {
            // console.log(arguments);
        });

    res.send("okay");
});

router.all('/terminalupdate', function (req, res, next) {

    /* update 쿼리문수정 */
    connection.query(
            "UPDATE terminal SET location='" + req.body.location + "'" +
            ", detail_location='" + req.body.detail_location + "'" +
            ", ip_address='" + req.body.ip_address + "'" +
            ", status='" + req.body.status + "' where no=" + req.body.no),
        function (err, results, fiels) {
            // console.log(arguments);
        };

    res.send("okay");
});

router.all('/terminaldelete', function (req, res, next) {

    // console.log("req"+req.body.No);
    // console.log("req"+req.body);


    var sql = 'DELETE FROM terminal WHERE no=' + req.body.no;
    connection.query(sql, ['no'], function (err, results) {
        // console.log(arguments);
    });

    res.send("okay");
});

router.post('/warninginsert', function (req, res, next) {
    console.log('insert 됨')
    var time = req.body.time;
    var location = req.body.location;
    var alarm_type = req.body.alarm_type;
    var communication = req.body.communication;
    var tts = req.body.tts;
    var tts_text = req.body.tts_text;
    var headline = req.body.headline;
    var siren = req.body.siren;
    var area = req.body.area;

    var datas = [time, location, alarm_type, communication, tts, tts_text, message, message_text, siren, area];

    connection.query('INSERT INTO history(time, location, alarm_type, communication, tts, tts_text, headline, siren, area) ' + 'values("' + req.body.time + '","' + req.body.location + '","' + req.body.alarm_type + '","' + req.body.communication + '","' + req.body.tts + '","' + req.body.tts_text + '","' + req.body.headline + '","' + req.body.siren + '","' + req.body.area + '")',
        function (err, results, fiels) {
            // console.log(arguments);
        });

    res.send("okay");
});

router.get('/historyincheon', function (req, res, next) {

    connection.query('SELECT * from history WHERE area="23";', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});

router.get('/historyincheon/all', function (req, res, next) {

    connection.query('SELECT * from history', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);
        res.send(rows);
    });
});

router.get('/historygangwon', function (req, res, next) {

    connection.query('SELECT * from history WHERE area="32";', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});

router.get('/historygangwon/all', function (req, res, next) {

    connection.query('SELECT * from history', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);
        res.send(rows);
    });
});

router.get('/historyjeju', function (req, res, next) {

    connection.query('SELECT * from history WHERE area="39";', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});

router.get('/historyjeju/all', function (req, res, next) {

    connection.query('SELECT * from history', function (err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);
        res.send(rows);
    });
});

////////////////////////////////////수정
// 실제 발령 시 ras에 전송 
router.post('/rasData', function (req, res, next) {

    console.log("++++++++++++++++++++rasData++++++++++++++++++++");

    var postData = { //postData 타입 정의
        "time": "",
        "location": "",
        "alarm_type": "",
        "communication": "",
        "message_text": "",
        "siren": ""
    };

    //set Val     
    postData.time = time;
    postData.location = location;
    postData.alarm_type = alarm_type;
    postData.communication = communication;
    postData.message_text = message_text;
    postData.siren = siren;

    //TODO 데이터 받아와서 재정의
    // console.log("send_data: " + postData.time);
    var url = 'http://192.168.12.29:8000/'+ postData.time;

    // console.log("url >>"+url)
    request({
        uri: url,
        method: "GET"
    }).pipe(res);
});

module.exports = router;