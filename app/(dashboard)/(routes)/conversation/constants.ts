import * as z from 'zod';

//prompt' ต้องเป็น string และมีความยาวอย่างน้อย 1 ตัวอักษร
export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: 'Prompt is required'
    }),
});