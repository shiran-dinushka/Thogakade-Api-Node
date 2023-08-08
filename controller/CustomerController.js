const Customer = require('../model/CustomerSchema')

const saveCustomer=(req,resp)=>{
    const customerDto = new Customer({
       id:req.body.id,
       name:req.body.name,
       address:req.body.address,
       salary:req.body.salary,
    });
    customerDto.save().then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}
const updateCustomer=(req,resp)=>{
    Customer.updateOne({id:req.body.id},{
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary,
    }).then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}
const getCustomer=(req,resp)=>{
    Customer.findOne({id:req.headers.id}).then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
       resp.status(500).json(error);
    });

}
const deleteCustomer=(req,resp)=>{
    Customer.deleteOne({id:req.headers.id}).then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}
const getAllCustomer=(req,resp)=>{
    Customer.find().then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}

const searchCustomer=(req,resp)=>{
    Customer.find({
        $or: [
            {id:{$regex:req.headers.text, $options:'i' }},
            {name:{$regex:req.headers.text, $options:'i' }},
            {address:{$regex:req.headers.text, $options:'i' }}

        ]
    }).then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}

module.exports= {
    saveCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomer,
    getAllCustomer,
    searchCustomer
}