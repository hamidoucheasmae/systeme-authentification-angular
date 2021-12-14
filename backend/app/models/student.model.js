module.exports = mongoose => {
    const Student = mongoose.model(
      "student",
      mongoose.Schema(
        {
            username: String,
            email: String,
            password: String
        },
        { timestamps: true }
      )
    );
  
    return Student;
  };