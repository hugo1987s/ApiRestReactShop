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

const GetProductById = (req, res) => {
    res.status(200).send({'message': 'GetProductById', 'value': req.params.productId})
}

const AddProduct = (req, res) => {
    res.status(200).send({'message': 'AddProduct', 'value': req.body})
}

const UpdateProduct = (req, res) => {
    res.status(200).send({'message': 'UpdateProduct', 'value': req.body, 'param': req.params.productId})
}

const DeleteProduct = (req, res) => {
    res.status(200).send({'message': 'DeleteProduct', 'param': req.params.productId})
}
export default {
    GetProducts,
    GetProductById,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
}