import { UserService } from './user.service';
import { EditUserDto } from "./dto/edit-user.dto";
/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Patch, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { GetUser } from "../auth/decorator/get-user.decorator";
import { JwtGuard } from "../auth/guard";

@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}
  @Get("me")
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  async editUser(@GetUser("id") userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
