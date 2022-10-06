// slime.
  

             //\
            // \\
           //   \\
          //     \\
         //   A   \\
        //         \\
       // ändrom3da \\
      //_____________\\
     
#extension GL_OES_standard_derivatives : enable
precision highp float;
    
#define BACKBUFFER       // you can uncomment this

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D bb;

#define fieldSize 2.5
#define PI                       3.14159
#define pi			   PI
#define time                      u_time*1.0
#define res			   u_resolution
#define rot(a)                    mat2( cos(a), -sin(a), sin(a), cos(a) )

void main( void )
{
	float tt = 4.5;
	vec2 p0 = gl_FragCoord.xy/res.xy;
	vec2 p =  (.15/(1.2/48.))*( 2.0*gl_FragCoord.xy - res)/min( res.x, res.y ); vec2 p1 = p;
	tt += 0.1*sin(time);
	float varyying = cos(cos(tt)*sin(tt))+sin(tt+0.1*sin(1.*p.x));
        p *= rot(5.*time); p.x -= 3.67+2.*sin(0.1*time);
		
	float c = 0.;
	float angle = (acos( dot( vec2(0.0, 1.0), normalize( p ) ) ) * sign( p.x )/pi) + time;
	
	float o = sign(length(1.0 - mod(length(p) * varyying + angle, 2.0))-0.5); // this could lead to problems because of "varying"...
	
	// whateva
	if      ( c + o == 2.0 ) c = 0.0;
	else if ( c + o == 1.0 ) c = 1.0;
	
	#ifdef BACKBUFFER
		c = 0.4*c + 0.6*texture2D(bb, p0).x;
        #endif
	gl_FragColor = vec4(vec3(c), 1.0); 
}
                                                                           // rf.	