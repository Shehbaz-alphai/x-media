import { email, prop, required } from "@rxweb/reactive-form-validators";
export class SendEmail {
    @prop({ defaultValue: "" })
    @required()
    name!: string;
    @email()
    @required()
    email!: string;
    @prop({ defaultValue: "xmedia" })
    website!: string;
    @prop()
    subject!:string
    @prop()
    comment!: string;
}

