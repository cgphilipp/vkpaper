void mainImage(out vec4 frag_color, in vec2 frag_coord) {
    vec2 uv = frag_coord / iResolution.xy;

    frag_color = texture(iChannel0, uv);
}
