export const mongooseSaveError = (error, data, next) => {
<<<<<<< HEAD
  const { name, code } = error;
  error.status = name === 'MongoServerError' && code === 11000 ? 409 : 400;
=======
  error.status = 400;
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5
  next();
};

export const setUpdateSettings = function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
};
