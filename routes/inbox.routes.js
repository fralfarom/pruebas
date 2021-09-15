const {Router} = require('express');


const router = Router();

router.get('/', (req, res) => {
    try {
        console.log('req query:',  req.query)
        console.log('req params:',  req.params)
        
    } catch (error) {
        console.log('error: ', error)
    }
});

module.exports = router;