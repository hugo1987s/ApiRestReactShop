import firebase from '../configs/firebaseConfig'

const collectionName = 'products'

const GetProducts = (req, res) => {
    firebase.firestore().collection(collectionName).get()
    .then( snapshot => {
        let resp = []
        snapshot.docs.forEach(element => {
            resp.push(element.data())    
        }); 
        res.status(200).send(resp)
    })
    .catch( (err)=> {
        res.status(500).send({'messsage': err})
    })
}

export default {
    GetProducts,
}