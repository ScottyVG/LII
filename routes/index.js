var express = require('express');
var router = express.Router();
var csv = require('csv-parser')
var fs = require('fs')

// INPUT parse full data set
// fs.createReadStream('./data/input.csv')
//   .pipe(csv())
//   .on('data', function (data) {
//     console.log('incoming_custacct: %s	incoming_fname: %s	incoming_mname: %s	incoming_lname: %s	incoming_fullname: %s	incoming_suffix: %s	incoming_ssn: %s	incoming_address1: %s	incoming_address2: %s	incoming_city: %s	incoming_state: %s	incoming_zip: %s	incoming_dob: %s	incoming_phone: %s	incoming_client: %s', data.incoming_custacct,	data.incoming_fname,	data.incoming_mname,	data.incoming_lname,	data.incoming_fullname,	data.incoming_suffix,	data.incoming_ssn,	data.incoming_address1,	data.incoming_address2,	data.incoming_city,	data.incoming_state,	data.incoming_zip,	data.incoming_dob,	data.incoming_phone,	data.incoming_client)
//   })

// OUTPUT parse full data set
// fs.createReadStream('./data/output.csv')
//   .pipe(csv())
//   .on('data', function (data) {
//     console.log('incoming_custacct: %s	incoming_fname: %s	incoming_mname: %s	incoming_lname: %s	incoming_fullname: %s	incoming_suffix: %s	incoming_ssn: %s	incoming_address1: %s	incoming_address2: %s	incoming_city: %s	incoming_state: %s	incoming_zip: %s	incoming_dob: %s	incoming_phone: %s	incoming_client: %s	name_first_1: %s	name_middle_1: %s	name_last_1: %s	name_suffix_1: %s	address_1: %s	p_city_name_1: %s	st_1: %s	zip_1: %s	addr_dt_first_seen_1: %s	addr_dt_last_seen_1: %s	conf_addr_match_code_1: %s	conf_flag_1: %s	name_first_2: %s	name_middle_2: %s	name_last_2: %s	name_suffix_2: %s	address_2: %s	p_city_name_2: %s	st_2: %s	zip_2: %s	addr_dt_last_seen_2: %s	addr_dt_first_seen_2: %s	conf_addr_match_code_2: %s	conf_flag_2: %s', data.incoming_custacct, data.incoming_fname, data.incoming_mname, data.incoming_lname, data.incoming_fullname, data.incoming_suffix, data.incoming_ssn, data.incoming_address1, data.incoming_address2, data.incoming_city, data.incoming_state, data.incoming_zip, data.incoming_dob, data.incoming_phone, data.incoming_client, data.name_first_1, data.name_middle_1, data.name_last_1, data.name_suffix_1, data.address_1, data.p_city_name_1, data.st_1, data.zip_1, data.addr_dt_first_seen_1, data.addr_dt_last_seen_1, data.conf_addr_match_code_1, data.conf_flag_1, data.name_first_2, data.name_middle_2, data.name_last_2, data.name_suffix_2, data.address_2, data.p_city_name_2, data.st_2, data.zip_2, data.addr_dt_last_seen_2, data.addr_dt_first_seen_2, data.conf_addr_match_code_2, data.conf_flag_2)
//   })

// OUTPUT parse only new data
fs.createReadStream('./data/output.csv')
  .pipe(csv())
  .on('data', function (data) {
    console.log('name_first_1: %s	name_middle_1: %s	name_last_1: %s	name_suffix_1: %s	address_1: %s	p_city_name_1: %s	st_1: %s	zip_1: %s	addr_dt_first_seen_1: %s	addr_dt_last_seen_1: %s	conf_addr_match_code_1: %s	conf_flag_1: %s	name_first_2: %s	name_middle_2: %s	name_last_2: %s	name_suffix_2: %s	address_2: %s	p_city_name_2: %s	st_2: %s	zip_2: %s	addr_dt_last_seen_2: %s	addr_dt_first_seen_2: %s	conf_addr_match_code_2: %s	conf_flag_2: %s', data.name_first_1, data.name_middle_1, data.name_last_1, data.name_suffix_1, data.address_1, data.p_city_name_1, data.st_1, data.zip_1, data.addr_dt_first_seen_1, data.addr_dt_last_seen_1, data.conf_addr_match_code_1, data.conf_flag_1, data.name_first_2, data.name_middle_2, data.name_last_2, data.name_suffix_2, data.address_2, data.p_city_name_2, data.st_2, data.zip_2, data.addr_dt_last_seen_2, data.addr_dt_first_seen_2, data.conf_addr_match_code_2, data.conf_flag_2)
  })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'LII',
  });
});

module.exports = router;
