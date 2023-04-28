import { DetailUserController } from './../../controller/user/DetailUserController';
import prismaClient from "../../../prisma";

export class DetailUserService {
    async execute() {
        return ({ ok: true })
    }
}