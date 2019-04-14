
export class UserInfoModel {
    id: number;
    name: string;
    username: string;
    img:string;

    deserialize(input: any) {
        Object.assign(this, input);

        return this;
    }
}