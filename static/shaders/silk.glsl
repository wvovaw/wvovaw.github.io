#ifdef GL_ES
precision mediump float;
#endif

#define BACKBUFFER       // you can uncomment this

uniform vec2 u_resolution;
uniform float u_time;

const float Pi = 3.14159;
uniform sampler2D bb;

const int   complexity      = 30;    // More points of color.
const float fluid_speed     = 20000.0;  // Drives speed, higher number will make it slower.
float color_intensity = 0.6;
const float red = 0.1;
const float green = 0.2;
const float blue = 0.3;

void main()
{
  vec2 p=(2.0*gl_FragCoord.xy-u_resolution)/max(u_resolution.x,u_resolution.y);
  for(int i=1;i<complexity;i++)
  {
    vec2 newp=p + u_time*0.0003;
    newp.x+=0.6/float(i)*sin(float(i)*p.y+u_time/fluid_speed*float(i+2000)) + 0.5;
    newp.y+=0.6/float(i)*sin(float(i)*p.x+u_time/fluid_speed*float(i+1909)) - 0.5;
    p=newp;
  }

	#ifdef BACKBUFFER
		color_intensity = 0.4*color_intensity + 0.6*texture2D(bb, 2.0*gl_FragCoord.xy).x;
  #endif
  vec3 col=vec3(color_intensity*sin(3.0*p.x)+red,color_intensity*sin(3.0*p.x)+green,color_intensity*sin(3.0*p.x)+blue);
  gl_FragColor=vec4(col, 1.0);
}