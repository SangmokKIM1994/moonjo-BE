import { ApiResponseProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateManagerDto {
  @ApiResponseProperty({ example: "김상목" })
  @IsString()
  name: string;

  @ApiResponseProperty({ example: "yeong0319" })
  @IsString()
  id: string;

  @ApiResponseProperty({ example: "tkdahr45" })
  @IsString()
  password: string;

  @ApiResponseProperty({ example: "yeong0319@naver.com" })
  @IsString()
  email: string;
}
