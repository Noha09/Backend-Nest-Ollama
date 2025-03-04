import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class OllamaService {
    private readonly OLLAMA_URL: string = process.env.OLLAMA_URL || 'http://localhost:11434/api';

    async response(prompt : string) {
        try {
            const { data } = await axios.post(`${this.OLLAMA_URL}/generate`, 
                {
                    model: 'llama3.2',
                    prompt: prompt,
                    stream : false
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            );

            return data?.response || 'Sin respuesta de Ollama';
        } catch (error) {
            throw new HttpException(
                'Error al comunicarse con Ollama',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
