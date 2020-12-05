#version 450 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

// Texture sampler
uniform sampler2D ourTexture1;

void main()
{
    //O comando texture � da pr�pria GLSL, e busca a cor do fragmento com a coord de 
    //textura fornecida
    color = texture(ourTexture1, TexCoord);

    //LEMBRE-SE: aqui o valor dos canais de cor est� NORMALIZADO (entre 0.0 e 1.0)

	float media = color.r * 0.2125 + color.g * 0.7154 + color.b * 0.0721;
	color = vec4(media, media, media, color.a);
}