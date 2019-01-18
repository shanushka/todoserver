const validate = (req,res,next) => {
  if (!req.body.id || !req.body.value) {
    res.status(200).json({
      msg: 'Data not found'
    });
    return;
  }

  next();
};

export { validate };
