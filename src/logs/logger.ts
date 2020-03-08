
import * as winston from "winston";

export const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File({ filename: 'pizza-restaurant.log' }),
    // new winston.transports.Console()
  ]
});

Logger.info("######### Pizza restaurant is open ##########");

