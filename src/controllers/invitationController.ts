import { Request, Response } from 'express';

export class InvitationController {
  index = (req:Request, res:Response) => {
    let imgArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let data = {
      imgArr
    };
    res.render('invitation', data);
  }
}
