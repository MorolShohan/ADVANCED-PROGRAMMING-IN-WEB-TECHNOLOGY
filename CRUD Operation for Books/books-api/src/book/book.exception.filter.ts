import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request,Response } from "express";
@Catch(HttpException)
export class BookCustomExceptionFilter implements ExceptionFilter
{
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode : status,
      timestamp : new Date().toISOString(),
      url : request.url,
      host : request.get("host")
    })
  }
  
}