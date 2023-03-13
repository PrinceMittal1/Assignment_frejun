const mydata = [];


const myreducer = (storedata=mydata, action) =>{

    switch(action.type){
        // adding the new data to the store
        case "NEW" :{
            const newmydata = [...storedata];
            const mynewdata = newmydata.concat(action.info);
            return mynewdata;
        }

        // adding the more data to the store by first copying all the data in new varibale as 
        // state is not mutable and after making changes in new varibale returning it 
        case "MORE" :{
            const newmydata = [...storedata];
            const mynewdata = newmydata.concat(action.info);
            return mynewdata;
        }

        default :{
            return storedata;
        }
    }
}


export default myreducer;