import winston from 'winston';
import { format } from 'winston';

// Create a logger instance
export const errorLogger = (error) => {
    const logger = winston.createLogger({
        level: 'info', // Set the default logging level to 'info'
        format: format.combine(
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp to log entries in EET format
            format.printf(info => {
                return `${info.timestamp} - ${info.level}: ${info.message}\n${info.stack}\n`;
            })
        ),
        transports: [
            // Add a file transport for logging to a file
            new winston.transports.File({
                filename: 'error.log', // Specify the filename
                level: 'error', // Log only errors to this file
                format: format.combine(
                    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp to log entries in EET format
                    format.printf(info => {
                        return `${info.timestamp} - ${info.level}: ${info.message}\n${info.stack}\n`;
                    })
                )
            })
        ]
    })
    logger.error(error)
    throw new Error(error)
}
