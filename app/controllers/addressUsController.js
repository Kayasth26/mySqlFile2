const logger = require('../service/logging');
const db = require('../../sqlconnect');
const jwt = require('../helper/authToken');
const { response } = require('../routes/route');
const {validation,updateaddressValidate} = require('../validation/addressUsValidation')

exports.address = async (req,res) => {
    try{
        const {addressline1,addressline2,country,state,city,pincode}=req.body        
            
            const sql = `INSERT INTO address_table(addressline1,addressline2,country,state,city,pincode) VALUES('${addressline1}','${addressline2}','${country}','${state}','${city}','${pincode}')`;
            
            db.query(sql, (err, result) => {
                if (err) {
                    logger.error('Error', err);
                } else {
                    res.send("Data Inserted Successfully..");
                } 
            })
        
    }
    catch (err) {
        logger.error("err", err);
    }
};

exports.viewaddress = async (req,res) => {
    try {
        const {country }= req.body;
        db.query(`SELECT * FROM address_table WHERE country = ?`, [country], async (err, response) => {
            if(response) {
                res.send(response);
            } else {
                res.send('Not Valid Address');
            }
        });
    } catch (err) {
        logger.error("err", err);
    }
}

exports.updateaddress = async (req,res) => {
    try {
        const { error } = updateaddressValidate (req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        } else {
            const {id} = req.params;
            const {addressline1,state,city}=req.body
            db.query(`UPDATE address_table SET addressline1='${addressline1}',state='${state}',city='${city}' WHERE id ='${id}'`, function (err, response) {
                 if (response) {
                    res.send('Data updated')
                } else {
                    logger.error('Error', err);
                }
            })
        }
    } catch (err) {

        logger.error('Error', err);
    }
}

exports.deleteaddress = async (req,res) => {
    try {
         
            const {id} = req.params;
            console.log(req.params);
            
            db.query(`DELETE FROM address_table  WHERE id ='${id}'`, function (err, response) {
                
if (response) {
                    console.log(response);
                    res.send('Data deleted successfully')
                } else {
                    logger.error('Error', err);
                }
            })
        
    } catch (err) {
        console.log(err);
        logger.error('Error', err);
    }
}