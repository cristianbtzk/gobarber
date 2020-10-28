import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailProider from '../models/IMailProvider';

export default class FakeMailProvider implements IMailProider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
