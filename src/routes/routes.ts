import { UsersController } from '../controllers/users.controller'

export class Routes {
  public usersController: UsersController = new UsersController()

  public routes(app: any): void {
    app
      .route('/users')
      .get(this.usersController.getAllUsers)
      .post(this.usersController.createUser)
    app
      .route('/users/:id')
      .get(this.usersController.getUser)
      .post(this.usersController.updateUser)
      .delete(this.usersController.deleteUser)
  }
}
