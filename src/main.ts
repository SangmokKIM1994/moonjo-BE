import { NestFactory } from "@nestjs/core";
import * as dotenv from "dotenv";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  dotenv.config();
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const config = new DocumentBuilder()
    .setTitle("MoonJo API")
    .setDescription("API문서")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(PORT, () => {
    console.log(`${PORT}번 포트로 서버가 연결되었습니다.`);
  });
}
bootstrap();
