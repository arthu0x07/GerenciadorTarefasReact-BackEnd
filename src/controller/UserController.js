const UserModel = require("../model/UserModel");

/* Fazer verificação de situação, quando fizer cadastro com mais de um email... */

class UserController {
  async CreateUser(req, res) {
    req.body.authkey = "0";
    const User = UserModel(req.body);
    await User.save().then((UserSaved) => {
      ReplaceAuthKey(UserSaved);
    });

    function ReplaceAuthKey(UserSaved) {
      UserModel.findByIdAndUpdate(
        { _id: UserSaved._id },
        { authkey: UserSaved._id }
      )
        .then((response) =>
          res.status(200).json({ msg: "User Created", authkey: UserSaved._id })
        )
        .catch((err) => res.status(500).json(err));
    }
  }

  async LoginUser(req, res) {
    const LoginAttempt = req.body;

    UserModel.find(
      { email: LoginAttempt.email, password: LoginAttempt.password },
      ["authkey"]
    )
      .then((response) => {
        if (response == "") {
          res.status(500).json({ msg: "User Not Found" });
        } else {
          res.status(200).json(response);
        }
      })
      .catch((err) => res.status(500).json({ err }));
  }

  async DeleteUser(req, res) {
    const DelAttempt = req.body;

    UserModel.findOneAndDelete({ email: DelAttempt.email, password: DelAttempt.password }, [
      "authkey",
    ])
      .then((response) => {
        if (response == null) {
          res.status(500).json({ msg: "User Not Found" });
        } else {
          res.status(200).json({msg: "User Deleted"});
        }
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async ModifyUser(req, res) {
    const dataNewUser = req.body;
    UserModel.findByIdAndUpdate({'_id': dataNewUser.authkey}, {'name': dataNewUser.name, 'email': dataNewUser.email,'password': dataNewUser.password}, {returnDocument: 'after'}).then((response) => {res.status(200).json({'msg': "User Info Updated", 'data': response})}).catch((err) => {res.status(500).json({'msg': err.messageFormat})})
  }

  async RedeemPassUser(req, res) {
      /* Decidir se vamos ou não implementar -> Fazer recuperação com envio de e-mail :*/
    console.log("user recuperado");
  }
}

module.exports = new UserController();
