#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 polar(float r, float theta) {
	return r * vec2(cos(theta), sin(theta));
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec2 st_mouse = u_mouse/u_resolution;

	vec2 pivot = polar(0.25 + sin(u_time / 2.) / 4.0, u_time / 2.) + vec2(0.5, 0.5);
	float v1 = pow(1.0 - distance(st, pivot), 5.0);

	vec2 pivot2 = -polar(0.25 + cos(u_time / 2.) / 4.0, u_time / 4.) + vec2(0.5, 0.5);
	float v2 = pow(1.0 - distance(st, pivot2), 5.0);

	float v = v1 + v2;

    gl_FragColor = vec4(st.x * v1, st.y * v2, st.y * v + st.y * v, 1.0);
}