#ifdef GL_ES
precision mediump float;
#endif

#define BACKBUFFER       // you can uncomment this

uniform vec2 u_resolution;
uniform float u_time;

const float Pi = 3.14159;
uniform vec2 mouse;
uniform sampler2D bb;

const int   complexity      = 40;    // More points of color.
const float mouse_factor    = 10.;  // Makes it more/less jumpy.
const float mouse_offset    = 0.0;   // Drives complexity in the amount of curls/cuves.  Zero is a single whirlpool.
const float fluid_speed     = 60.0;  // Drives speed, higher number will make it slower.
float color_intensity = 1.8;
  

void main()
{
  vec2 p=(2.0*gl_FragCoord.xy-u_resolution)/max(u_resolution.x,u_resolution.y);
  for(int i=1;i<complexity;i++)
  {
    vec2 newp=p + u_time*-0.002;
    newp.x+=0.6/float(i)*sin(float(i)*p.y+u_time/fluid_speed+0.3*float(i)) + 0.5; // + mouse.y/mouse_factor+mouse_offset;
    newp.y+=0.6/float(i)*sin(float(i)*p.x+u_time/fluid_speed+0.3*float(i+10)) - 0.5; // - mouse.x/mouse_factor+mouse_offset;
    p=newp;
  }

	#ifdef BACKBUFFER
		color_intensity = 0.4*color_intensity + 0.6*texture2D(bb, 2.0*gl_FragCoord.xy).x;
  #endif
  vec3 col=vec3((color_intensity*sin(3.0*p.x)+color_intensity)*0.3, (color_intensity*sin(3.0*p.y)+color_intensity)*0.16,  (color_intensity*sin(p.x+p.y)+color_intensity)*0.5);

  gl_FragColor=vec4(col, 1.0);
}