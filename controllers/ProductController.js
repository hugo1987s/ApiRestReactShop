import firebase from '../configs/firebaseConfig'
import ProductModel from '../models/ProductModel'

const collectionName = 'products'

const GetProducts = (req, res) => {
    firebase.firestore().collection(collectionName).get()
    .then( snapshot => {
            let resp = []
            snapshot.docs.forEach(element => {
        
            let model = new ProductModel()
            model.id = element.id,
            model.title = element.data().title,
            model.description = element.data().description,
            model.price = element.data().price,
            model.image = element.data().image

            resp.push(model)
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

    firebase.firestore().collection(collectionName).add(req.body)
    .then( (docRef) => {
        res.status(200).send({'docId': docRef.id})
    })
    .catch( (err)=> { 
        res.status(500).send({'message': 'An error has ocurred', 'error': err})
    })
 
}

const UpdateProduct = (req, res) => {
    firebase.firestore().doc(`${collectionName}/${req.params.productId}`)
    .set({
        description: req.body.description,
        title: req.body.title,
        price: req.body.price,
        image: req.body.image
    },{merge:true})
    .then( ()=> {
        res.status(200).send({'message': 'UpdateProduct', 'value': req.body, 'param': req.params.productId})
    })
    .catch( (err )=> {
        res.status(500).send({'message': 'An error has ocurred', 'error': err})
    })
    
}

const DeleteProduct = (req, res) => {

    firebase.firestore().collection("products").doc(req.params.productId).delete()
    .then( ()=> {
        res.status(200).send({'message': 'Deleted Ok', 'Deleted Id': req.params.productId})
    })
    .catch( err => {
        res.status(500).send({'message': 'An error has ocurred', 'error': err})
    })
    
}
export default {
    GetProducts,
    GetProductById,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
}