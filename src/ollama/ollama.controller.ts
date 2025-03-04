import { Controller, Body, Post } from '@nestjs/common';
import { OllamaService } from './ollama.service';

@Controller('ollama')
export class OllamaController {
    constructor(private readonly ollamaService: OllamaService) {}

    @Post('/response')
    async generateResponse(@Body() body: { prompt: string }) {
        const { prompt } = body;

        try {
            const response = await this.ollamaService.response(prompt);
            if (!response) {
                throw new Error('No response from Ollama');
            }
            return response;
        } catch (error) {
            console.error('Error in OllamaController:', error);
            throw new Error('Error al generar la respuesta');
        }
    }
}
