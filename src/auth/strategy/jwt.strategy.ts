import { PrismaService } from "@/prisma/prisma.service"
import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import { User } from ".prisma/client"
import { Strategy } from "passport-local"
import { ExtractJwt } from "passport-jwt"
import { Jwt } from "@/common/configs/config.interface"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(configService: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<Jwt>("jwt")?.secret,
      signOptions: configService.get<Jwt>("jwt")?.signOptions
    })
    this.prisma = prisma
  }

  async validate(payload: { sub: number; username: string }) {
    const user: User = <User>await this.prisma.user.findUnique({
      where: {
        id: payload.sub
      }
    })
    return Object.assign(user, { hash: "******" })
  }
}