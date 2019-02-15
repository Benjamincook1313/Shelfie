
module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db');

    db.get_Inventory().then(resp => {
      res.status(200).send(resp)
    })
  }



}