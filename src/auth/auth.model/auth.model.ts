import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// добавляет айдишник из класса бейс
export interface AuthModel extends Base {}
// добавляет тайм штампы из класса таймстампс
export class AuthModel extends TimeStamps {
  @prop({ unique: true })
  email: string;

  @prop()
  passwordHash: string;
}
