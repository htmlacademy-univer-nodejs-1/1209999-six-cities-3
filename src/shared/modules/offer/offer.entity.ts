import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { City, Coordinates, HouseType } from '../../types/index.js';
import { UserEntity } from '../user/index.js';
import { Facilities } from '../../types/facilities.enum.js';


export interface OfferEntity extends defaultClasses.Base {
}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({type: String, required: true, minlength: 10, maxlength: 100, trim: true,})
  public name: string;

  @prop({type: String, required: true, minlength: 20, maxlength: 1024, trim: true,})
  public description: string;

  @prop({type: String, required: true})
  public datePublished: Date;

  @prop({type: String, enum: City, required: true})
  public city: City;

  @prop({type: String, required: true})
  public previewImagePath: string;

  @prop({ type: () => [String]})
  public photosPaths: string[];

  @prop({type: Boolean, required: true, default: false})
  public isPremium: boolean;

  @prop({type: Boolean, required: true, default: false})
  public isFavorite: boolean;

  @prop({type: Number, required: true, min: 1, max: 5})
  public rating: number;

  @prop({type: String, enum: HouseType, required: true})
  public houseType: HouseType;

  @prop({type: Number, required: true, min: 1, max: 8})
  public numberRooms: number;

  @prop({type: Number, required: true, min: 1, max: 10})
  public numberGuests: number;

  @prop({type: Number, required: true, min: 100, max: 100000})
  public rentPrice: number;

  @prop({type: () => [String], required: true})
  public facilities: Facilities[];

  @prop({
    ref: UserEntity,
    required: true,
    type: String
  })
  public userId: Ref<UserEntity>;

  @prop({type: Number, default: 0})
  public numberComments: number;

  @prop({
    type: () => String,
    enum: Coordinates
  })
  public coordinates: Coordinates;
}

export const OfferModel = getModelForClass(OfferEntity);
