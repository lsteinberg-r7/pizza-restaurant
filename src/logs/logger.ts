
import * as winston from "winston";

export const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File({ filename: '/var/log/pizza-restaurant.log' }),
    new winston.transports.Console()
  ]
});

