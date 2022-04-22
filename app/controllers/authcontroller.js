const { result } = require("@hapi/joi/lib/base");
const any = require("@hapi/joi/lib/types/any");
const bcrypt = require("bcrypt");
const db = require('../../sqlconnect');
const logger = require("../logger/logger");
const { response } = require("../routes/route");
const { registerValidate , updateProfileValidate} = require("../validation/authValidation");
const saltRound =10;

exports.registration = async (req,res) => {
    try{
        const {name,sname,mobile,email,address,gender,hobby,password}=req.body
        const encryptedPassword = await bcrypt.hash(password, saltRound);        
            
            const sql = `INSERT INTO registration_page(name,sname,mobile,email,address,gender,hobby,password) VALUES('${name}','${sname}','${mobile}','${email}','${address}','${gender}','${hobby}','${encryptedPassword}')`;
            
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

exports.authUser = async (req, res) => {
    try {
            const email = req.body.email;

            db.query(`SELECT * FROM registration_page WHERE email = ?`, [email], async (err, response) => {
                if (err) {
                    logger.error(err);
                } else {
                    if (response.length > 0) {
                        const comparision = await bcrypt.compare(req.body.password, response[0].password);
                        if (comparision)
                            res.send('Login successfully...');
                        else
                            res.send('Password is not correct!');
                    } else {
                        res.send('Email is not correct!');
                    }
                }
            });
    } catch (err) {
        logger.error("err", err);
    }
};

exports.viewProfile = async (req,res) => {
    try {
        const {mobile} = req.body
        db.query(`SELECT * FROM registration_page WHERE mobile = ?`, [mobile], async (err, response) => {
            if(response) {
                res.send(response);
            } else {
                res.send('Not Valid email!');
            }
        });
    } catch (err) {
        logger.error("err", err);
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const { error } = updateProfileValidate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        } else {
            const {name,sname,mobile,email,address,gender,hobby}=req.body
            db.query(`UPDATE registration_page SET name='${name}',sname='${sname}',mobile='${mobile}',email='${email}',address='${address}',gender='${gender}',hobby='${hobby}' WHERE email ='${req.user.email}'`, function (err, response) {
                
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

exports.address = async (req,res) => {
    try{
        const {name,sname,mobile,email,address,gender,hobby,password}=req.body
        const encryptedPassword = await bcrypt.hash(password, saltRound);        
            
            const sql = `INSERT INTO registration_page(name,sname,mobile,email,address,gender,hobby,password) VALUES('${name}','${sname}','${mobile}','${email}','${address}','${gender}','${hobby}','${encryptedPassword}')`;
            
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