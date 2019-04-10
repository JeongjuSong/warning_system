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





// //수정부분 
var connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbconfig); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();
// //수정완료 부분


var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

router.get('/user_area', function(req, res, next) {

    connection.query('SELECT area FROM users', function(err, rows) {
        if (err) throw err;
        req.

        res.send(rows);
    });
});

router.get('/', function(req, res, next) {
    connection.query('SELECT area FROM users', function(err, rows) {
        if (err) throw err;

        res.send(rows);
    });
});

router.get('/login', function(req, res, next) {
    connection.query('SELECT area FROM users', function(err, rows) {
        if (err) throw err;

        res.send(rows);
    });
});

router.post('/login', function(req, res, next) {
        
    connection.query('SELECT area FROM users', function(err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);
        res.send(rows);
    });
});


router.get('/message', function(req, res, next) {
    connection.query('SELECT * from message', function(err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});


// edit_tts db insert
router.get('/tts', function(req, res, next) {

    connection.query('SELECT * from tts', function(err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});

router.get('/tts/all', function(req, res, next) {

    connection.query('SELECT * from tts', function(err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);
        res.send(rows);
    });
});

router.all('/ttsinsert', function(req, res, next) {


    /* insert 쿼리문수정 */
    connection.query('INSERT INTO tts(no, title, text) ' + 'values("' + req.body.no + '","' + req.body.title + '","' + req.body.text + '")',
        function(err, results, fiels) {
            // console.log(arguments);
        });

    res.send("okay");
});

router.all('/ttsupdate', function(req, res, next) {

    /* update 쿼리문수정 */
    connection.query(
            "UPDATE tts SET title='" + req.body.title + "'" +
            ", text='" + req.body.text+ "' where no=" + req.body.no),
        function(err, results, fiels) {
            // console.log(arguments);
        };

    res.send("okay");
});

router.all('/ttsdelete', function(req, res, next) {

    // console.log("req"+req.body.No);
    // console.log("req"+req.body);


    var sql = 'DELETE FROM tts WHERE no=' + req.body.no;
    connection.query(sql, ['no'], function(err, results) {
        // console.log(arguments);
    });

    res.send("okay");
});

// check_terminal db insert
router.get('/terminal', function(req, res, next) {

    connection.query('SELECT * from terminal', function(err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);

        res.send(rows);
    });
});

router.get('/terminal/all', function(req, res, next) {

    connection.query('SELECT * from terminal', function(err, rows) {
        if (err) throw err;

        // console.log('The solution is: ', rows);
        res.send(rows);
    });
});

router.all('/terminalinsert', function(req, res, next) {


    /* insert 쿼리문수정 */
    connection.query('INSERT INTO terminal(no, location, detail_location, ip_address, status) ' + 'values("' + req.body.no + '","' + req.body.location + '","' + req.body.detail_location + '","' + req.body.ip_address + '","' + req.body.status  + '")',
        function(err, results, fiels) {
            // console.log(arguments);
        });

    res.send("okay");
});

router.all('/terminalupdate', function(req, res, next) {

    /* update 쿼리문수정 */
    connection.query(
            "UPDATE terminal SET location='" + req.body.location + "'" +
            ", detail_location='" + req.body.detail_location + "'" +
            ", ip_address='" + req.body.ip_address + "'" +
            ", status='" + req.body.status + "' where no=" + req.body.no),
        function(err, results, fiels) {
            // console.log(arguments);
        };

    res.send("okay");
});

router.all('/terminaldelete', function(req, res, next) {

    // console.log("req"+req.body.No);
    // console.log("req"+req.body);


    var sql = 'DELETE FROM terminal WHERE no=' + req.body.no;
    connection.query(sql, ['no'], function(err, results) {
        // console.log(arguments);
    });

    res.send("okay");
});

// router.post('/index', function(req, res, next) {
        
//   var time = req.body.time;
// 		var detail_location = req.body.detail_location;
// 		var facility = req.body.facility;
// 		var alarm_type = req.body.alarm_type;
// 		var communication = req.body.communication;
// 		var broadcast = req.body.broadcast;

// 		var datas = [time, detail_location, facility, alarm_type, communication, broadcast];

//     var sqlForInsert = "INSERT INTO history(time, detail_location, facility, alarm_type, communication) values (?,?,?,?,?)";
    
// });



// function genQuery(key) {
//     if (key != null)
//         return 'SELECT * from  where area_ID=' + key;

//     else {
//             router.get('/city', function(req, res, next) {

//     connection.query('SELECT * from city', function(err, rows) {
//         if (err) throw err;

//         console.log('The solution is: ', rows);

//         res.send(rows);
//     });
// });

//         return 'SELECT * from city';
//     }
// }



// //////////////////////////Library////////////////////////////
// router.get('/index', function(req, res, next) {
//     // console.log(req.query);

//     connection.query(genQuery(req.query.key), function(err, rows) {

//         if (err) throw err;

//         console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });
//////////////////////////Library////////////////////////////


//////////////////////////Library_more////////////////////////////


// //////////////////////////senval_sensor////////////////////////////
// router.get('/senval_humidity', function(req, res, next) {

//     connection.query('SELECT * from senval_humidity order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/senval_temperature', function(req, res, next) {

//     connection.query('SELECT * from senval_temperature order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/senval_distance', function(req, res, next) {

//     connection.query('SELECT * from senval_distance order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/senval_tilt', function(req, res, next) {

//     connection.query('SELECT * from senval_tilt order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/senval_motion', function(req, res, next) {

//     connection.query('SELECT * from senval_motion order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/senval_acceleration', function(req, res, next) {

//     connection.query('SELECT * from senval_acceleration order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/senval_vibration', function(req, res, next) {

//     connection.query('SELECT * from senval_vibration order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/senval_light', function(req, res, next) {

//     connection.query('SELECT * from senval_light order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/senval_sound', function(req, res, next) {

//     connection.query('SELECT * from senval_sound order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/senval_waterlevel', function(req, res, next) {

//     connection.query('SELECT * from senval_waterlevel order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/senval_heartrate', function(req, res, next) {

//     connection.query('SELECT * from senval_heartrate order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/senval_carbonmonoxide', function(req, res, next) {

//     connection.query('SELECT * from senval_carbonmonoxide order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/senval_co', function(req, res, next) {

//     connection.query('SELECT * from senval_co order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/senval_dust', function(req, res, next) {

//     connection.query('SELECT * from senval_dust order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/senval_color', function(req, res, next) {

//     connection.query('SELECT * from senval_color order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });



// router.get('/sen_val', function(req, res, next) {

//     connection.query('SELECT * from sen_val order by date desc limit 10', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });




// //////////////////////////tem&hum////////////////////////////

// //////////////////////////communication////////////////////////////
// router.get('/communication', function(req, res, next) {

//     connection.query('SELECT * from communication', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/communication/all', function(req, res, next) {

//     connection.query('SELECT * from communication', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });




// router.get('/communication/rest', function(req, res, next) {

//     var sql = "select ";

//     if (req.query.column1 != null) { // 값 확인
//         sql += " " + req.query.column1 + " "; //  sql문 추가
//     } else // 값이 없으므로
//         sql += "*"; //전체 셀렉 추가

//     if (req.query.column2 != null) {
//         sql += ", " + req.query.column2 + " ";
//     } else
//         sql += "";

//     if (req.query.column3 != null) {
//         sql += ", " + req.query.column3 + " ";
//     } else
//         sql += "";

//     if (req.query.column4 != null) {
//         sql += ", " + req.query.column4 + " ";
//     } else
//         sql += "";

//     sql += " from communication"; // 테이블 선택
//     if (req.query.searchColumn != null && req.query.searchValue != null) // 검색 조건 확인
//         sql += " where " + req.query.searchColumn + " = \'" + req.query.searchValue + "\'"; // 검색 조건 쿼리문 추가

//     // console.log("88:"+sql);

//     connection.query(sql, function(err, rows) { // 쿼리 보내기
//         if (err) throw err;

//         res.send(rows);


//     });
// });

// router.all('/communicationinsert', function(req, res, next) {


//     /* insert 쿼리문수정 */
//     connection.query('INSERT INTO communication(No, category_1, category_2, model_name, manufacturer, manufacturing_country, link, range_m, price, shape, img_url, size_x_mm, size_y_mm, size_z_mm, operating_temperature_range, core_processor, core_size, interface_, program_memory_type, program_memory_size, EEPROM_size, FRAM_size, SRAM_size, Frequency, standards, output_power, Antenna, datasheet_link) ' + 'values("' + req.body.No + '","' + req.body.category_1 + '","' + req.body.category_2 + '","' + req.body.model_name + '","' + req.body.manufacturer + '","' + req.body.manufacturing_country + '","' + req.body.link + '","' + req.body.range_m + '","' + req.body.shape + '","' + req.body.img_url + '","' + req.body.price + '","' + req.body.size_x_mm + '","' + req.body.size_y_mm + '","' + req.body.size_z_mm + '","' + req.body.operating_temperature_range + '","' + req.body.core_processor + '","' + req.body.core_size + '","' + req.body.interface_ + '","' + req.body.program_memory_type + '","' + req.body.program_memory_size + '","' + req.body.EEPROM_size + '","' + req.body.FRAM_size + '","' + req.body.SRAM_size + '","' + req.body.Frequency + '","' + req.body.standards + '","' + req.body.output_power + '","' + req.body.Antenna + '","' + req.body.datasheet_link + '")',
//         function(err, results, fiels) {
//             // console.log(arguments);
//         });

//     res.send("okay");
// });
// router.all('/communicationupdate', function(req, res, next) {

//     /* update 쿼리문수정 */
//     connection.query(
//             "UPDATE communication SET category_1='" + req.body.category_1 + "'" +
//             ", category_2='" + req.body.category_2 + "'" +
//             ", model_name='" + req.body.model_name + "'" +
//             ", manufacturer='" + req.body.manufacturer + "'" +
//             ", manufacturing_country='" + req.body.manufacturing_country + "'" +
//             ", link='" + req.body.link + "'" +
//             ", range_m='" + req.body.range_m + "'" +
//             ", price='" + req.body.price + "'" +
//             ", shape='" + req.body.shape + "'" +
//             ", img_url='" + req.body.img_url + "'" +
//             ", size_x_mm='" + req.body.size_x_mm + "'" +
//             ", size_y_mm='" + req.body.size_y_mm + "'" +
//             ", size_z_mm='" + req.body.size_z_mm + "'" +
//             ", operating_temperature_range='" + req.body.operating_temperature_range + "'" +
//             ", core_processor='" + req.body.core_processor + "'" +
//             ", core_size='" + req.body.core_size + "'" +
//             ", interface_='" + req.body.interface_ + "'" +
//             ", program_memory_type='" + req.body.program_memory_type + "'" +
//             ", program_memory_size='" + req.body.program_memory_size + "'" +
//             ", EEPROM_size='" + req.body.EEPROM_size + "'" +
//             ", FRAM_size='" + req.body.FRAM_size + "'" +
//             ", SRAM_size='" + req.body.SRAM_size + "'" +
//             ", Frequency='" + req.body.Frequency + "'" +
//             ", standards='" + req.body.standards + "'" +
//             ", output_power='" + req.body.output_power + "'" +
//             ", Antenna='" + req.body.Antenna + "'" +
//             ", datasheet_link ='" + req.body.datasheet_link + "' where No=" + req.body.No),
//         function(err, results, fiels) {
//             // console.log(arguments);
//         };

//     res.send("okay");
// });

// router.all('/communicationdelete', function(req, res, next) {

//     // console.log("req"+req.body.No);
//     // console.log("req"+req.body);


//     var sql = 'DELETE FROM communication WHERE No=' + req.body.No;
//     connection.query(sql, ['No'], function(err, results) {
//         // console.log(arguments);
//     });

//     res.send("okay");
// });

// //////////////////////////mcu////////////////////////////
// router.get('/mcu', function(req, res, next) {

//     connection.query('SELECT * from mcu', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/mcu/all', function(req, res, next) {

//     connection.query('SELECT * from mcu', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/mcu/rest', function(req, res, next) {

//     var sql = "select ";

//     if (req.query.column1 != null) { // 값 확인
//         sql += " " + req.query.column1 + " "; //  sql문 추가
//     } else // 값이 없으므로
//         sql += "*"; //전체 셀렉 추가

//     if (req.query.column2 != null) {
//         sql += ", " + req.query.column2 + " ";
//     } else
//         sql += "";

//     if (req.query.column3 != null) {
//         sql += ", " + req.query.column3 + " ";
//     } else
//         sql += "";

//     if (req.query.column4 != null) {
//         sql += ", " + req.query.column4 + " ";
//     } else
//         sql += "";

//     sql += " from mcu"; // 테이블 선택
//     if (req.query.searchColumn != null && req.query.searchValue != null) // 검색 조건 확인
//         sql += " where " + req.query.searchColumn + " = \'" + req.query.searchValue + "\'"; // 검색 조건 쿼리문 추가

//     // console.log(" 88:"+sql);

//     connection.query(sql, function(err, rows) { // 쿼리 보내기
//         if (err) throw err;

//         res.send(rows);
//     });
// });



// router.all('/mcuinsert', function(req, res, next) {


//     /* insert 쿼리문수정 */
//     connection.query('INSERT INTO mcu(No, series, model_name, manufacturer, manufacturing_country, link, core_processor, core_size, price, shape, img_url, size_x_mm, size_y_mm, size_z_mm, operating_temperature_range, usb_modules,  interface_, program_memory_type, program_memory_size, EEPROM_size, FRAM_size, SRAM_size, Frequency, package_, datasheet_link)' + 'values("' + req.body.No + '","' + req.body.series + '","' + req.body.shape + '","' + req.body.img_url + '","' + req.body.model_name + '","' + req.body.link + '","' + req.body.manufacturer + '","' + req.body.manufacturing_country + '","' + req.body.price + '","' + req.body.size_x_mm + '","' + req.body.size_y_mm + '","' + req.body.size_z_mm + '","' + req.body.operating_temperature_range + '","' + req.body.usb_modules + '","' + req.body.core_processor + '","' + req.body.core_size + '","' + req.body.interface_ + '","' + req.body.program_memory_type + '","' + req.body.program_memory_size + '","' + req.body.EEPROM_size + '","' + req.body.FRAM_size + '","' + req.body.SRAM_size + '","' + req.body.Frequency + '","' + req.body.package_ + '","' + req.body.datasheet_link + '")',
//         function(err, results, fiels) {
//             // console.log(arguments);
//         });

//     res.send("okay");
// });
// router.all('/mcuupdate', function(req, res, next) {

//     /* update 쿼리문수정 */
//     connection.query(
//             "UPDATE mcu SET series='" + req.body.series + "'" +
//             ", model_name='" + req.body.model_name + "'" +
//             ", manufacturer='" + req.body.manufacturer + "'" +
//             ", manufacturing_country='" + req.body.manufacturing_country + "'" +
//             ", link='" + req.body.link + "'" +
//             ", core_processor='" + req.body.core_processor + "'" +
//             ", core_size='" + req.body.core_size + "'" +
//             ", price='" + req.body.price + "'" +
//             ", shape='" + req.body.shape + "'" +
//             ", img_url='" + req.body.img_url + "'" +
//             ", size_x_mm='" + req.body.size_x_mm + "'" +
//             ", size_y_mm='" + req.body.size_y_mm + "'" +
//             ", size_z_mm='" + req.body.size_z_mm + "'" +
//             ", operating_temperature_range='" + req.body.operating_temperature_range + "'" +
//             ", usb_modules='" + req.body.usb_modules + "'" +
//             ", interface_='" + req.body.interface_ + "'" +
//             ", program_memory_type='" + req.body.program_memory_type + "'" +
//             ", program_memory_size='" + req.body.program_memory_size + "'" +
//             ", EEPROM_size='" + req.body.EEPROM_size + "'" +
//             ", FRAM_size='" + req.body.FRAM_size + "'" +
//             ", SRAM_size='" + req.body.SRAM_size + "'" +
//             ", Frequency='" + req.body.Frequency + "'" +
//             ", package_='" + req.body.package_ + "'" +
//             ", datasheet_link ='" + req.body.datasheet_link + "' where No=" + req.body.No),
//         function(err, results, fiels) {
//             // console.log(arguments);
//         };

//     res.send("okay");
// });

// router.all('/mcudelete', function(req, res, next) {

//     // console.log("req"+req.body.No);
//     // console.log("req"+req.body);


//     var sql = 'DELETE FROM mcu WHERE No=' + req.body.No;
//     connection.query(sql, ['No'], function(err, results) {
//         // console.log(arguments);
//     });

//     res.send("okay");
// });

// //////////////////////////mcu////////////////////////////

// //////////////////////////openhardware////////////////////////////
// router.get('/openhardware', function(req, res, next) {

//     connection.query('SELECT * from openhardware', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/openhardware/all', function(req, res, next) {

//     connection.query('SELECT * from openhardware', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/openhardware/rest', function(req, res, next) {

//     var sql = "select ";

//     if (req.query.column1 != null) { // 값 확인
//         sql += " " + req.query.column1 + " "; //  sql문 추가
//     } else // 값이 없으므로
//         sql += "*"; //전체 셀렉 추가

//     if (req.query.column2 != null) {
//         sql += ", " + req.query.column2 + " ";
//     } else
//         sql += "";

//     if (req.query.column3 != null) {
//         sql += ", " + req.query.column3 + " ";
//     } else
//         sql += "";

//     if (req.query.column4 != null) {
//         sql += ", " + req.query.column4 + " ";
//     } else
//         sql += "";

//     sql += " from openhardware"; // 테이블 선택
//     if (req.query.searchColumn != null && req.query.searchValue != null) // 검색 조건 확인
//         sql += " where " + req.query.searchColumn + " = \'" + req.query.searchValue + "\'"; // 검색 조건 쿼리문 추가

//     // console.log("88:"+sql);

//     connection.query(sql, function(err, rows) { // 쿼리 보내기
//         if (err) throw err;

//         res.send(rows);
//     });
// });



// router.all('/openhardwareinsert', function(req, res, next) {


//     /* insert 쿼리문수정 */
//     connection.query('INSERT INTO openhardware(No, open_hw, name, img_url, link, price, features, size_x_mm, size_y_mm, size_z_mm, weight_g, memory, bluetooth, wifi, NFC, usb_port, operating_system, interface_, processor) ' + 'values("' + req.body.No + '","' + req.body.open_hw + '","' + req.body.name + '","' + req.body.img_url + '","' + req.body.link + '","' + req.body.price + '","' + req.body.features + '","' + req.body.size_x_mm + '","' + req.body.size_y_mm + '","' + req.body.size_z_mm + '","' + req.body.weight_g + '","' + req.body.memory + '","' + req.body.bluetooth + '","' + req.body.wifi + '","' + req.body.NFC + '","' + req.body.usb_port + '","' + req.body.operating_system + '","' + req.body.interface_ + '","' + req.body.processor + '")',
//         function(err, results, fiels) {
//             // console.log(arguments);
//         });

//     res.send("okay");
// });
// router.all('/openhardwareupdate', function(req, res, next) {

//     /* update 쿼리문수정 */
//     connection.query(
//             "UPDATE openhardware SET open_hw='" + req.body.open_hw + "'" +
//             ", name='" + req.body.name + "'" +
//             ", img_url='" + req.body.img_url + "'" +
//             ", link='" + req.body.link + "'" +
//             ", price='" + req.body.price + "'" +
//             ", features='" + req.body.features + "'" +
//             ", size_x_mm='" + req.body.size_x_mm + "'" +
//             ", size_y_mm='" + req.body.size_y_mm + "'" +
//             ", size_z_mm='" + req.body.size_z_mm + "'" +
//             ", weight_g='" + req.body.weight_g + "'" +
//             ", memory='" + req.body.memory + "'" +
//             ", bluetooth='" + req.body.bluetooth + "'" +
//             ", wifi='" + req.body.wifi + "'" +
//             ", NFC='" + req.body.NFC + "'" +
//             ", usb_port='" + req.body.usb_port + "'" +
//             ", operating_system='" + req.body.operating_system + "'" +
//             ", interface_='" + req.body.interface_ + "'" +
//             ", processor ='" + req.body.processor + "' where No=" + req.body.No),
//         function(err, results, fiels) {
//             // console.log(arguments);
//         };

//     res.send("okay");
// });

// router.all('/openhardwaredelete', function(req, res, next) {

//     // console.log("req"+req.body.No);
//     // console.log("req"+req.body);


//     var sql = 'DELETE FROM openhardware WHERE No=' + req.body.No;
//     connection.query(sql, ['No'], function(err, results) {
//         // console.log(arguments);
//     });

//     res.send("okay");
// });
// //////////////////////////openhardware////////////////////////////

// //////////////////////////opensoftware////////////////////////////
// router.get('/opensoftware', function(req, res, next) {

//     connection.query('SELECT * from opensoftware', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);

//         res.send(rows);
//     });
// });

// router.get('/opensoftware/all', function(req, res, next) {

//     connection.query('SELECT * from opensoftware', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });




// router.get('/opensoftware/rest', function(req, res, next) {

//     var sql = "select ";

//     if (req.query.column1 != null) { // 값 확인
//         sql += " " + req.query.column1 + " "; //  sql문 추가
//     } else // 값이 없으므로
//         sql += "*"; //전체 셀렉 추가

//     if (req.query.column2 != null) {
//         sql += ", " + req.query.column2 + " ";
//     } else
//         sql += "";

//     if (req.query.column3 != null) {
//         sql += ", " + req.query.column3 + " ";
//     } else
//         sql += "";

//     if (req.query.column4 != null) {
//         sql += ", " + req.query.column4 + " ";
//     } else
//         sql += "";

//     sql += " from opensoftware"; // 테이블 선택
//     if (req.query.searchColumn != null && req.query.searchValue != null) // 검색 조건 확인
//         sql += " where " + req.query.searchColumn + " = \'" + req.query.searchValue + "\'"; // 검색 조건 쿼리문 추가

//     // console.log("88:"+sql);

//     connection.query(sql, function(err, rows) { // 쿼리 보내기
//         if (err) throw err;

//         res.send(rows);
//     });
// });



// router.all('/opensoftwareinsert', function(req, res, next) {


//     /* insert 쿼리문수정 */
//     connection.query('INSERT INTO opensoftware(No, open_sw, developer, link, features, funtion, operating_system, license, license_management_agency, license_mandatory) ' + 'values("' + req.body.No + '","' + req.body.open_sw + '","' + req.body.developer + '","' + req.body.link + '","' + req.body.features + '","' + req.body.funtion + '","' + req.body.operating_system + '","' + req.body.license + '","' + req.body.license_management_agency + '","' + req.body.license_mandatory + '")',
//         function(err, results, fiels) {
//             // console.log(arguments);
//         });

//     res.send("okay");
// });
// router.all('/opensoftwareupdate', function(req, res, next) {

//     /* update 쿼리문수정 */
//     connection.query(
//             "UPDATE opensoftware SET open_sw='" + req.body.open_sw + "'" +
//             ", developer='" + req.body.developer + "'" +
//             ", link='" + req.body.link + "'" +
//             ", features='" + req.body.features + "'" +
//             ", funtion='" + req.body.funtion + "'" +
//             ", operating_system='" + req.body.operating_system + "'" +
//             ", license='" + req.body.license + "'" +
//             ", license_management_agency='" + req.body.license_management_agency + "'" +
//             ", license_mandatory='" + req.body.license_mandatory + "'" +
//             ", license_mandatory ='" + req.body.license_mandatory + "' where No=" + req.body.No),
//         function(err, results, fiels) {
//             // console.log(arguments);
//         };

//     res.send("okay");
// });

// router.all('/opensoftwaredelete', function(req, res, next) {

//     // console.log("req"+req.body.No);
//     // console.log("req"+req.body);


//     var sql = 'DELETE FROM opensoftware WHERE No=' + req.body.No;
//     connection.query(sql, ['No'], function(err, results) {
//         // console.log(arguments);
//     });

//     res.send("okay");
// });

// //////////////////////////opensoftware////////////////////////////

// //////////////////////////product////////////////////////////
// router.get('/product', function(req, res, next) {

//     connection.query('SELECT * from product', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });


// router.get('/product/all', function(req, res, next) {

//     connection.query('SELECT * from product', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/product/rest', function(req, res, next) {

//     var sql = "select ";

//     if (req.query.column1 != null) { // 값 확인
//         sql += " " + req.query.column1 + " "; //  sql문 추가
//     } else // 값이 없으므로
//         sql += "*"; //전체 셀렉 추가

//     if (req.query.column2 != null) {
//         sql += ", " + req.query.column2 + " ";
//     } else
//         sql += "";

//     if (req.query.column3 != null) {
//         sql += ", " + req.query.column3 + " ";
//     } else
//         sql += "";

//     if (req.query.column4 != null) {
//         sql += ", " + req.query.column4 + " ";
//     } else
//         sql += "";

//     sql += " from product"; // 테이블 선택
//     if (req.query.searchColumn != null && req.query.searchValue != null) // 검색 조건 확인
//         sql += " where " + req.query.searchColumn + " = \'" + req.query.searchValue + "\'"; // 검색 조건 쿼리문 추가

//     // console.log("88:"+sql);

//     connection.query(sql, function(err, rows) { // 쿼리 보내기
//         if (err) throw err;

//         res.send(rows);
//     });
// });



// router.all('/productinsert', function(req, res, next) {


//     /* insert 쿼리문수정 */
//     connection.query('INSERT INTO product(No, category_1, category_2, category_3, img_url, img_file, product_name_En, product_name_Ko, model_name, manufacturer_En, manufacturer_Ko, country_En, country_Ko, release_date, price, color, shape, material, size_x_mm, size_y_mm, size_z_mm, weight_g, battery_life, sensor, communication, explanation, description, site, exhibition) ' + 'values("' + req.body.No + '","' + req.body.category_1 + '","' + req.body.category_2 + '","' + req.body.category_3 + '","' + req.body.img_url + '","' + req.body.img_file + '","' + req.body.product_name_En + '","' + req.body.product_name_Ko + '","' + req.body.model_name + '","' + req.body.manufacturer_En + '","' + req.body.manufacturer_Ko + '","' + req.body.country_En + '","' + req.body.country_Ko + '","' + req.body.release_date + '","' + req.body.price + '","' + req.body.color + '","' + req.body.shape + '","' + req.body.material + '","' + req.body.size_x_mm + '","' + req.body.size_y_mm + '","' + req.body.size_z_mm + '","' + req.body.weight_g + '","' + req.body.battery_life + '","' + req.body.sensor + '","' + req.body.communication + '","' + req.body.explanation + '","' + req.body.description + '","' + req.body.site + '","' + req.body.exhibition + '")',
//         function(err, results, fiels) {
//             // console.log(arguments);
//         });

//     res.send("okay");
// });
// router.all('/productupdate', function(req, res, next) {

//     /* update 쿼리문수정 */
//     connection.query(
//             "UPDATE product SET category_1='" + req.body.category_1 + "'" +
//             ", category_2='" + req.body.category_2 + "'" +
//             ", category_3='" + req.body.category_3 + "'" +
//             ", img_url='" + req.body.img_url + "'" +
//             ", img_file='" + req.body.img_file + "'" +
//             ", product_name_En='" + req.body.product_name_En + "'" +
//             ", product_name_Ko='" + req.body.product_name_Ko + "'" +
//             ", model_name='" + req.body.model_name + "'" +
//             ", manufacturer_En='" + req.body.manufacturer_En + "'" +
//             ", manufacturer_Ko='" + req.body.manufacturer_Ko + "'" +
//             ", country_En='" + req.body.country_En + "'" +
//             ", country_Ko='" + req.body.country_Ko + "'" +
//             ", release_date='" + req.body.release_date + "'" +
//             ", price='" + req.body.price + "'" +
//             ", color='" + req.body.color + "'" +
//             ", shape='" + req.body.shape + "'" +
//             ", material='" + req.body.material + "'" +
//             ", size_x_mm='" + req.body.size_x_mm + "'" +
//             ", size_y_mm='" + req.body.size_y_mm + "'" +
//             ", size_z_mm='" + req.body.size_z_mm + "'" +
//             ", weight_g='" + req.body.weight_g + "'" +
//             ", battery_life='" + req.body.battery_life + "'" +
//             ", sensor='" + req.body.sensor + "'" +
//             ", communication='" + req.body.communication + "'" +
//             ", explanation='" + req.body.explanation + "'" +
//             ", description='" + req.body.description + "'" +
//             ", site='" + req.body.site + "'" +
//             ", exhibition ='" + req.body.exhibition + "' where No=" + req.body.No),
//         function(err, results, fiels) {
//             // console.log(arguments);
//         };

//     res.send("okay");
// });

// router.all('/productdelete', function(req, res, next) {

//     // console.log("req"+req.body.No);
//     // console.log("req"+req.body);


//     var sql = 'DELETE FROM product WHERE No=' + req.body.No;
//     connection.query(sql, ['No'], function(err, results) {
//         // console.log(arguments);
//     });

//     res.send("okay");
// });

// //////////////////////////product////////////////////////////


// //////////////////////////sensor////////////////////////////
// router.get('/sensor', function(req, res, next) {

//     connection.query('SELECT * from sensor', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });

// router.get('/sensor/all', function(req, res, next) {

//     connection.query('SELECT * from sensor', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });



// router.get('/sensor/rest', function(req, res, next) {

//     var sql = "select ";

//     if (req.query.column1 != null) { // 값 확인
//         sql += " " + req.query.column1 + " "; //  sql문 추가
//     } else // 값이 없으므로
//         sql += "*"; //전체 셀렉 추가

//     if (req.query.column2 != null) {
//         sql += ", " + req.query.column2 + " ";
//     } else
//         sql += "";

//     if (req.query.column3 != null) {
//         sql += ", " + req.query.column3 + " ";
//     } else
//         sql += "";

//     if (req.query.column4 != null) {
//         sql += ", " + req.query.column4 + " ";
//     } else
//         sql += "";

//     sql += " from sensor"; // 테이블 선택
//     if (req.query.searchColumn != null && req.query.searchValue != null) // 검색 조건 확인
//         sql += " where " + req.query.searchColumn + " = \'" + req.query.searchValue + "\'"; // 검색 조건 쿼리문 추가

//     // console.log("88:"+sql);

//     connection.query(sql, function(err, rows) { // 쿼리 보내기
//         if (err) throw err;

//         res.send(rows);
//     });
// });




// router.all('/sensorinsert', function(req, res, next) {


//     /* insert 쿼리문수정 */
//     connection.query('INSERT INTO sensor(No, category_1, category_2, target, model_name, manufacturer, manufacturing_country, link, measurement_range, price, img_url, form, size_x_mm, size_y_mm, size_z_mm, operating_temperature_range, output, interface_, Frequency, note, datasheet_link) ' + 'values("' + req.body.No + '","' + req.body.category_1 + '","' + req.body.category_2 + '","' + req.body.target + '","' + req.body.model_name + '","' + req.body.manufacturer + '","' + req.body.manufacturing_country + '","' + req.body.link + '","' + req.body.measurement_range + '","' + req.body.price + '","' + req.body.img_url + '","' + req.body.form + '","' + req.body.size_x_mm + '","' + req.body.size_y_mm + '","' + req.body.size_z_mm + '","' + req.body.operating_temperature_range + '","' + req.body.output + '","' + req.body.interface_ + '","' + req.body.Frequency + '","' + req.body.note + '","' + req.body.datasheet_link + '")',
//         function(err, results, fiels) {
//             // console.log(arguments);
//         });

//     res.send("okay");
// });
// router.all('/sensorupdate', function(req, res, next) {

//     /* update 쿼리문수정 */
//     connection.query(
//             "UPDATE sensor SET category_1='" + req.body.category_1 + "'" +
//             ", category_2='" + req.body.category_2 + "'" +
//             ", target='" + req.body.target + "'" +
//             ", model_name='" + req.body.model_name + "'" +
//             ", manufacturer='" + req.body.manufacturer + "'" +
//             ", manufacturing_country='" + req.body.manufacturing_country + "'" +
//             ", link='" + req.body.link + "'" +
//             ", measurement_range='" + req.body.measurement_range + "'" +
//             ", price='" + req.body.price + "'" +
//             ", img_url='" + req.body.img_url + "'" +
//             ", form='" + req.body.form + "'" +
//             ", size_x_mm='" + req.body.size_x_mm + "'" +
//             ", size_y_mm='" + req.body.size_y_mm + "'" +
//             ", size_z_mm='" + req.body.size_z_mm + "'" +
//             ", operating_temperature_range='" + req.body.operating_temperature_range + "'" +
//             ", output='" + req.body.output + "'" +
//             ", interface_='" + req.body.interface_ + "'" +
//             ", Frequency='" + req.body.Frequency + "'" +
//             ", note='" + req.body.note + "'" +
//             ", datasheet_link ='" + req.body.datasheet_link + "' where No=" + req.body.No),
//         function(err, results, fiels) {
//             // console.log(arguments);
//         };

//     res.send("okay");
// });

// router.all('/sensordelete', function(req, res, next) {

//     // console.log("req"+req.body.No);
//     // console.log("req"+req.body);


//     var sql = 'DELETE FROM sensor WHERE No=' + req.body.No;
//     connection.query(sql, ['No'], function(err, results) {
//         // console.log(arguments);
//     });

//     res.send("okay");
// });
// //////////////////////////sensor////////////////////////////



// //////////////////////////concept_db////////////////////////////
// router.get('/concept_db', function(req, res, next) {

//     connection.query('SELECT * from concept_db', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);

//         res.send(rows);
//     });
// });

// router.get('/concept_db/all', function(req, res, next) {

//     connection.query('SELECT * from concept_db', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });



// router.all('/concept_dbinsert', function(req, res, next) {


//     /* insert 쿼리문수정 */
//     connection.query('INSERT INTO concept_db(no, class, main_href, imgsrc, name) ' + 'values("' + req.body.no + '","' + req.body.class + '","' + req.body.main_href + '","' + req.body.imgsrc + '","' + req.body.name + '")',
//         function(err, results, fiels) {
//             // console.log(arguments);
//         });

//     res.send("okay");
// });
// router.all('/concept_dbupdate', function(req, res, next) {

//     /* update 쿼리문수정 */
//     connection.query(
//             "UPDATE concept_db SET class='" + req.body.class + "'" +
//             ", main_href='" + req.body.main_href + "'" +
//             ", imgsrc='" + req.body.imgsrc + "'" +
//             ", name ='" + req.body.name + "' where no=" + req.body.no),
//         function(err, results, fiels) {
//             // console.log(arguments);
//         };

//     res.send("okay");
// });

// router.all('/concept_dbdelete', function(req, res, next) {

//     // console.log("req"+req.body.No);
//     // console.log("req"+req.body);


//     var sql = 'DELETE FROM concept_db WHERE no=' + req.body.no;
//     connection.query(sql, ['no'], function(err, results) {
//         // console.log(arguments);
//     });

//     res.send("okay");
// });

// //////////////////////////concept_db////////////////////////////








// //////////////////////////actuator////////////////////////////
// router.get('/actuator', function(req, res, next) {

//     connection.query('SELECT * from actuator', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });
// ////////////////////////////////////////


// //////////////////////////diy////////////////////////////
// router.get('/diy', function(req, res, next) {

//     connection.query('SELECT * from diy', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });
// ////////////////////////////////////////


// ///////////임시///////////////
// router.all('/tempSensor', function(req, res, next) {

//     //console.log(req.body);
//     var key = req.body.k;
//     //console.log('key='+key);
//     var sql = "";


//     if (key) {
//         sql = 'SELECT * FROM diy ';
//     }


//     switch (key) {
//         case '1':
//             sql += "where category_2=\'temperature\'";
//             break;
//         case '2':
//             sql += "where category_2=\'humidity\'";
//             break;
//         case '3':
//             sql += "where category_2=\'light\'";
//             break;
//         case '4':
//             sql += "where category_2=\'UV\'";
//             break;
//         case '5':
//             sql += "where category_2=\'gas\'";
//             break;
//         case '6':
//             sql += "where category_2=\'heart rate\'";
//             break;
//         case '7':
//             sql += "where category_2=\'acceleration\'";
//             break;
//         case '8':
//             sql += "where category_2=\'distance\'";
//             break;
//         case '9':
//             sql += "where category_2=\'pressure\'";
//             break;
//         case '10':
//             sql += "where category_2=\'infrared\'";
//             break;
//         case '11':
//             sql += "where category_2=\'motion \'";
//             break;
//         case '12':
//             sql += "where category_2=\'gyro\'";
//             break;
//         case '13':
//             sql += "where category_2=\'NFC\'";
//             break;
//         case '14':
//             sql += "where category_2=\'RFID\'";
//             break;
//         case '15':
//             sql += "where category_2=\'ZigBee\'";
//             break;
//         case '16':
//             sql += "where category_2=\'Z-WAVE\'";
//             break;
//         case '17':
//             sql += "where category_2=\'Wi-Fi\'";
//             break;
//         case '18':
//             sql += "where category_2=\'LoRa\'";
//             break;
//         case '19':
//             sql += "where category_2=\'SigFox\'";
//             break;
//         case '20':
//             sql += "where category_2=\'Narrowband\'";
//             break;
//         case '21':
//             sql += "where category_2=\'LTE\'";
//             break;
//         case '22':
//             sql += "where category_2=\'8 bit\'";
//             break;
//         case '23':
//             sql += "where category_2=\'16 bit\'";
//             break;
//         case '24':
//             sql += "where category_2=\'32 bit\'";
//             break;
//         case '25':
//             sql += "where category_2=\'motor\'";
//             break;
//         case '26':
//             sql += "where category_2=\'buzzer\'";
//             break;
//         case '27':
//             sql += "where category_2=\'LCD\'";
//             break;
//         case '28':
//             sql += "where category_2=\'sound\'";
//             break;
//         case '29':
//             sql += "where category_2=\'LED\'";
//             break;

//     }


//     connection.query(sql, function(err, rows) {
//         if (err) throw err;
//         res.send(rows);
//     });
// });



// /* get db end*/


// /* GET home page. */
// router.get('/index', function(req, res, next) {
//     res.render('index', {
//         title: 'Express'
//     });
// });

// router.get('/concept', function(req, res, next) {
//     res.render('concept');
// });



// router.get('/Library_Main3_1', function(req, res, next) {
//     // console.log("Library_Main3_1");
//     res.render('Library_Main3_1');
// });


// router.get('/product_more', function(req, res, next) {
//     // console.log("product_more");
//     res.render('product_more');
// });



// router.get('/Test_Result', function(req, res, next) {
//     //console.log("product_more");
//     res.render('Test_Result');
// });

// router.get('/IoT_Bank', function(req, res, next) {
//     //console.log("product_more");
//     res.render('IoT_Bank');
// });

// router.get('/DB_communication', function(req, res, next) {
//     //console.log("db");
//     res.render('DB_communication');
// });
// router.get('/DB_mcu', function(req, res, next) {
//     //console.log("db");
//     res.render('DB_mcu');
// });
// router.get('/DB_openhardware', function(req, res, next) {
//     //console.log("db");
//     res.render('DB_openhardware');
// });

// router.get('/DB_opensoftware', function(req, res, next) {
//     //console.log("db");
//     res.render('DB_opensoftware');
// });
// router.get('/DB_product', function(req, res, next) {
//     //console.log("db");
//     res.render('DB_product');
// });
// router.get('/DB_sensor', function(req, res, next) {
//     //console.log("db");
//     res.render('DB_sensor');
// });

// router.get('/DB_library_db_library_main', function(req, res, next) {
//     console.log("db");
//     res.render('DB_library_db_library_main');
// });

// router.get('/DB_library_db_library_more', function(req, res, next) {
//     console.log("db");
//     res.render('DB_library_db_library_more');
// });

// router.get('/result', function(req, res, next) {
//     //console.log("db");
//     res.render('result');
// });

// router.get('/Test', function(req, res, next) {
//     //console.log("db");
//     res.render('Test');
// });

// router.get('/Performance', function(req, res, next) {
//     //console.log("db");
//     res.render('Performance');
// });

// router.get('/Reliability', function(req, res, next) {
//     //console.log("db");
//     res.render('Reliability');
// });

// router.get('/Compatibility', function(req, res, next) {
//     //console.log("db");
//     res.render('Compatibility');
// });



// router.get('/profile', function(req, res, next) {
//     //console.log("db");
//     res.render('profile');
// });

// router.get('/signup', function(req, res, next) {
//     //console.log("db");
//     res.render('signup');
// });

// router.get('/monitoring', function(req, res, next) {
//     //console.log("db");
//     res.render('monitoring');
// });

// /*router.get('/category', function(req, res, next) {
//   //console.log("db");
//   res.render('category');
// });

// */



// //////////////////////////testbed////////////////////////////
// router.get('/testbed', function(req, res, next) {

//     connection.query('SELECT * from testbed', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });
// ////////////////////////////////////////


// // /rasData

// router.post('/rasData', function(req, res, next) {
//     // console.log("req.body:"+req.body.count);
//     // console.log("++++++++++++++++++++rasData++++++++++++++++++++");

//     console.log("janjune send1");
//     var postData = {
//         //TODO 데이터 정의 추가
//         "device_address": "",
//         "port_number": "",
//         "csename": "",
//         "device_file_name": "",
//         "category": "",
//         "name": "",
//         "device": "",
//         "count": 0,
//         "detail": "",
//         "test_time": 0,
//         "standard_value": "" ,
//         "sensor_value_low": "" ,
//         "sensor_value_high": "" 
//     };

//     //set Val     
//     postData.device_address = req.body.device_address;
//     postData.port_number = req.body.port_number;
//     postData.csename = req.body.csename;
//     postData.device_file_name = req.body.device_file_name;
//     postData.category = req.body.category;
//     postData.name = req.body.name;
//     postData.device = req.body.device;
//     postData.count = req.body.count;
//     postData.detail = req.body.detail;
//     postData.test_time = req.body.test_time;
//     postData.standard_value = req.body.standard_value;
//     postData.sensor_value_low = req.body.sensor_value_low;
//     postData.sensor_value_high = req.body.sensor_value_high;
//     //TODO 데이터 받아와서 재정의
//     // console.log(postData)

//     // var url = 'http://192.168.43.231:8000/'+postData.category+'/'+postData.detail+'/'+postData.device+'/'+postData.name+'/'+postData.count;
//     var url = 'http://'+postData.device_address+':'+postData.port_number+'/'+postData.category+'/'+postData.detail+'/'+postData.device+'/'+postData.name+'/'+postData.count;


//     console.log("url >>"+url)
//     request({
//         uri: url,
//         method: "GET"
//     }).pipe(res);
// });




// router.post('/rascompatibility', function(req, res, next) {
//     // console.log("req.body:"+req.body.count);
//     // console.log("++++++++++++++++++++rasData++++++++++++++++++++");
//     var postData = {
//         //TODO 데이터 정의 추가
//         "device_address": "",
//         "port_number": "",
//         "csename": "",
//         "x_m2m_origin": "",
//         "x_m2m_ri": "",
//         "resourcename": "",
//         "containername": "",
//         "old_la": "",
//         "device_file_name": "",
//         "category": "",
//         "name": "",
//         "device": "",
//         "count": 0,
//         "detail": "",
//         "test_time": 0,
//         "standard_value": "" ,
//         "sensor_value_low": "" ,
//         "sensor_value_high": "" 
//     };

//     //set Val     
//     postData.device_address = req.body.device_address;
//     postData.port_number = req.body.port_number;
//     postData.csename = req.body.csename;
//     postData.x_m2m_origin = req.body.x_m2m_origin;
//     postData.x_m2m_ri = req.body.x_m2m_ri;
//     postData.resourcename = req.body.resourcename;
//     postData.containername = req.body.containername;
//     postData.old_la = req.body.old_la;
//     postData.device_file_name = req.body.device_file_name;
//     postData.category = req.body.category;
//     postData.name = req.body.name;
//     postData.device = req.body.device;
//     postData.count = req.body.count;
//     postData.detail = req.body.detail;
//     postData.test_time = req.body.test_time;
//     postData.standard_value = req.body.standard_value;
//     postData.sensor_value_low = req.body.sensor_value_low;
//     postData.sensor_value_high = req.body.sensor_value_high;
//     //TODO 데이터 받아와서 재정의
//      console.log(postData)
// });




// router.post('/rasResultData', function(req, res, next) {
//     // console.log(req.body);

//     var result;

//     var postData = {
//         "device_address": "",
//         "port_number": "",
//         "csename": "",
//         "x_m2m_origin": "",
//         "x_m2m_ri": "",
//         "resourcename": "",
//         "containername": "",
//         "old_la": "",
//         "device_file_name": "",
//         "category": "",
//         "name": "",
//         "device": "",
//         "count": 0,
//         "detail": "",
//         "test_time": 0,
//         "standard_value": "" ,
//         "sensor_value_low": "" ,
//         "sensor_value_high": "" 
        
//     };

//     //set Val           
//     postData.device_address = req.body.device_address;
//     postData.port_number = req.body.port_number;
//     postData.csename = req.body.csename;
//     postData.x_m2m_origin = req.body.x_m2m_origin;
//     postData.x_m2m_ri = req.body.x_m2m_ri;
//     postData.resourcename = req.body.resourcename;
//     postData.containername = req.body.containername;
//     postData.old_la = req.body.old_la;
//     postData.device_file_name = req.body.device_file_name;
//     postData.category = req.body.category;
//     postData.name = req.body.name;
//     postData.device = req.body.device;
//     postData.count = req.body.count;
//     postData.detail = req.body.detail;
//     postData.test_time = req.body.test_time;
//     postData.standard_value = req.body.standard_value;
//     postData.sensor_value_low = req.body.sensor_value_low;
//     postData.sensor_value_high = req.body.sensor_value_high;   
//     // ==========================================add janjune
//     if (postData.category == "performance" ){

//         if (postData.detail == "Packet_Speed" ){
//             // 숫자부분 바꾸기<= 0.240
//             var q = "SELECT ROUND(COUNT(grade)/"+req.body.count+"*100,2) RESULT FROM (SELECT round(timestamp(end_time) - timestamp(start_time), 3) AS grade FROM TESTBED) temp WHERE grade <= "+req.body.test_time+";"; 
    
//             console.log("Packet_SpeedPacket_Speed")
//             connection.query(q , function(err, rows) {
//                 if (err) throw err;            
//                     console.log('speed_Cal_Answer: ', rows);
//                 res.send(rows);
//             });
//         }
        
//         else if (postData.detail == "Packet_Send" ){                       
//             //그냥 갯수만 체크
   
   
//             var q = "SELECT ROUND(COUNT(*)/"+req.body.count+"*100,2) AS RESULT FROM testbed;";
    
        
//                 connection.query(q , function(err, rows) {
//                     if (err) throw err;            
//                         console.log('Cal_Answer: ', rows);
//                     res.send(rows);
//                 });
  
           
//         }
//         else if (postData.detail == "Congestion_Packet_Send" ){
//             //혼잡상황에서 로스나는거 버리고 들어오는것만 체크
//             // console.log("Congestion_Packet_SendCongestion_Packet_SendCongestion_Packet_SendCongestion_Packet_SendCongestion_Packet_SendCongestion_Packet_SendCongestion_Packet_SendCongestion_Packet_SendCongestion_Packet_SendCongestion_Packet_Send")
//             var q = "SELECT ROUND(COUNT(*)/"+req.body.count+"*100,2) AS RESULT FROM TESTBED;";
    
        
//             connection.query(q , function(err, rows) {
//                 if (err) throw err;            
//                     console.log('Cal_Answer: ', rows);
//                 res.send(rows);
//             });

            
//         }

//         else{
//             console.log("error")
//         }
        

//     }

//     else if (postData.category == "reliability" ){

//         if (postData.detail == "Sensing_External_Success" ){
//             //초기값 넣어주는 거 코드 넣기
//             var q = "SELECT ROUND(COUNT(grade)/"+req.body.count+"*100,2) RESULT FROM (SELECT sensor_value AS grade FROM TESTBED) temp WHERE grade >  "+req.body.standard_value+" OR grade <  "+req.body.standard_value+";";
    
        
//                 connection.query(q , function(err, rows) {
//                     if (err) throw err;            
//                         console.log('Cal_Answer: ', rows);
//                     res.send(rows);
//                 });
//             //외부동작 반응 성공률
            
//         }
        
//         else if (postData.detail == "Sensign_Sensitivity_Success" ){
            
//             var q = "SELECT ROUND(COUNT(*)/"+req.body.count+"*100,2) AS RESULT FROM testbed;";
//             // "SELECT" + "@rownum"+":" + "=" + "@rownum+1 as no" + "," + "ROUND(COUNT(s_current)/"+req.body.count+"*100,2)" + "RESULT FROM (SELECT sensor_value AS s_current, LAG(sensor_value) over (order by no) as s_before FROM testbed) temp WHERE s_current <> s_before;";
//             // SELECT @rownum:=@rownum+1 as no, ROUND(COUNT(s_current)/"+req.body.count+"*100,2) AS RESULT FROM (SELECT sensor_value AS s_current, LAG(sensor_value) over (order by no) as s_before FROM testbed) temp WHERE s_current <> s_before;
           
    
        
//                 connection.query(q , function(err, rows) {
//                     if (err) throw err;            
//                         console.log('Cal_Answer: ', rows);
//                     res.send(rows);
//                 });
//             //민감도 성공률(a라는 센서가 하나가 1초안에 값이 변경 돼서 들어와야하는데 1초안에 들어오면 성공 안들어오면 실패)
            
//         }
//         else if (postData.detail == "Sensing_Value_Validity" ){
            
//             var q = "SELECT ROUND(COUNT(grade)/"+req.body.count+"*100,2) RESULT FROM (SELECT sensor_value AS grade FROM TESTBED) temp WHERE grade > "+req.body.sensor_value_low+" OR grade <  "+req.body.sensor_value_high+";";
//                 console.log("Query Check"+q)
//                 connection.query(q , function(err, rows) {
//                     if (err) throw err;            
//                         console.log('Sensing_Value_Validity_Cal_Answer: ', rows);
//                     res.send(rows);
//                 });
//             //센싱 값 유효성 성공률 = 센서 범위 내에 값이 들오면 성공 아니면 실패
            
//         }
        
//         else{
//             console.log("error")
//         }
//     }

//     else if (postData.category == "compatibility" ){
//         if (postData.detail == "cseBase" ){

//             console.log("===============================CSEBASE===============================");

//                 var url = 'http://'+postData.device_address+':'+postData.port_number+'/'+postData.csename;

//                 // var url = 'http://192.168.12.19:7579/Mobius';
                
//                 var request = require("request");
//                 var options = { method: 'GET',
//                 url: url,
//                 headers: 
//                 { 'cache-control': 'no-cache',
//                     // 'X-M2M-Origin': 'SOrigin',
//                     // 'X-M2M-RI': '12345',
//                     'X-M2M-Origin': postData.x_m2m_origin,
//                     'X-M2M-RI': postData.x_m2m_ri,
//                     Accept: 'application/json' } };
//                 request(options, function (error, response, body) {
//                 if (error) throw new Error(error);
//                 console.log("body : ==========="+body);
//                 res.send(body);
            
//             });

//             // console.log("body : ====122======="+body);
          
//         }
        
//         else if (postData.detail == "ae" ){
//             console.log("===============================AE===============================");
          
//                 var url = 'http://'+postData.device_address+':'+postData.port_number+'/'+postData.csename+'/'+postData.resourcename;
//                 // var url = 'http://192.168.12.19:7579/Mobius/justin';
//                 var request = require("request");
//                 var options = { method: 'GET',
//                 url: url,
//                 headers: 
//                 { 'cache-control': 'no-cache',
//                 // 'X-M2M-Origin': 'SOrigin',
//                 //     'X-M2M-RI': '12345',
//                     'X-M2M-Origin': postData.x_m2m_origin,
//                     'X-M2M-RI': postData.x_m2m_ri,
//                     Accept: 'application/json' } };
//                 request(options, function (error, response, body) {
//                 if (error) throw new Error(error);
//                 res.send(body);
//                 console.log(body);
//             });

    
            
//         }
//         else if (postData.detail == "container" ){


//               console.log("===============================container===============================");
          
//             var url = 'http://'+postData.device_address+':'+postData.port_number+'/'+postData.csename+'/'+postData.resourcename+'/'+postData.containername;
//             // var url = 'http://192.168.12.19:7579/Mobius/justin/ss';
//             // console.log(url);
//             var request = require("request");
//             var options = { method: 'GET',
//             url: url,
//             headers: 
//             { 'cache-control': 'no-cache',
//                 // 'X-M2M-Origin': 'SOrigin',
//                 // 'X-M2M-RI': '12345',
//                 'X-M2M-Origin': postData.x_m2m_origin,
//                 'X-M2M-RI': postData.x_m2m_ri,
//                 Accept: 'application/json' } };
//             request(options, function (error, response, body) {
//             if (error) throw new Error(error);
//             res.send(body);
//             console.log(body);
//         });
        
            
//         }

//         else if (postData.detail == "contentinstance" ){
         
//             console.log("===============================contentinstance===============================");

//             if (postData.old_la == "latest" ){
                
//               console.log("===============================lastest===============================");
          
//               var url = 'http://'+postData.device_address+':'+postData.port_number+'/'+postData.csename+'/'+postData.resourcename+'/'+postData.containername+'/'+postData.old_la;
//             // var url = 'http://192.168.12.19:7579/Mobius/justin/ss/latest';
//               // console.log(url);
//               var request = require("request");
//               var options = { method: 'GET',
//               url: url,
//               headers: 
//               { 'cache-control': 'no-cache',
//                 //   'X-M2M-Origin': 'SOrigin',
//                 //   'X-M2M-RI': '12345',
//                   'X-M2M-Origin': postData.x_m2m_origin,
//                   'X-M2M-RI': postData.x_m2m_ri,
//                   Accept: 'application/json' } };
//               request(options, function (error, response, body) {
//               if (error) throw new Error(error);
//               res.send(body);
//               console.log(body);
//           });
          
//             }
                
            
//             else if (postData.old_la == "oldest" ){

                 
//               console.log("===============================oldest===============================");
          
//               var url = 'http://'+postData.device_address+':'+postData.port_number+'/'+postData.csename+'/'+postData.resourcename+'/'+postData.containername+'/'+postData.old_la;
//               // console.log(url);
//               var request = require("request");
//               var options = { method: 'GET',
//               url: url,
//               headers: 
//               { 'cache-control': 'no-cache',
//                 //   'X-M2M-Origin': 'SOrigin',
//                 //   'X-M2M-RI': '12345',
//                   'X-M2M-Origin': postData.x_m2m_origin,
//                   'X-M2M-RI': postData.x_m2m_ri,
//                   Accept: 'application/json' } };
//               request(options, function (error, response, body) {
//               if (error) throw new Error(error);
//               res.send(body);
//               console.log(body);
//           });

                    

//                 }


//         }
            


//     }

//     else{
//         console.log("error")
//     }

  
// });


// //////////////////////////deleteRasData////////////////////////////
// router.post('/deleteRasData', function(req, res, next) {
        
//     connection.query('TRUNCATE TABLE testbed', function(err, rows) {
//         if (err) throw err;

//         // console.log('The solution is: ', rows);
//         res.send(rows);
//     });
// });





module.exports = router;