const profileController = {
  getProfile: (req, res) => {
    const customerId = req.jwt.claims.cid

    res.json({ name: customerId })
  }
}

module.exports = profileController
