import math
FR=[0.066,0.227,0.43,0.641,0.854,1.0]
def cr2bez(pts):
    # Catmull-Rom -> cubic bezier segments
    segs=[]
    for i in range(len(pts)-1):
        p0=pts[i-1] if i>0 else pts[i]; p1=pts[i]; p2=pts[i+1]; p3=pts[i+2] if i+2<len(pts) else pts[i+1]
        c1=(p1[0]+(p2[0]-p0[0])/6,p1[1]+(p2[1]-p0[1])/6); c2=(p2[0]-(p3[0]-p1[0])/6,p2[1]-(p3[1]-p1[1])/6)
        segs.append((p1,c1,c2,p2))
    return segs
def bez(s,t):
    (a,b,c,d)=s; mt=1-t
    return (mt**3*a[0]+3*mt*mt*t*b[0]+3*mt*t*t*c[0]+t**3*d[0], mt**3*a[1]+3*mt*mt*t*b[1]+3*mt*t*t*c[1]+t**3*d[1])
def build(fn, t0, t1, n=24):
    pts=[fn(t0+(t1-t0)*i/n) for i in range(n+1)]
    segs=cr2bez(pts)
    d='M%.1f %.1f '%pts[0]+' '.join('C %.1f %.1f, %.1f %.1f, %.1f %.1f'%(s[1]+s[2]+s[3]) for s in segs)
    # dense samples
    samp=[]
    for s in segs:
        for k in range(200): samp.append(bez(s,k/200))
    samp.append(pts[-1])
    cum=[0]
    for i in range(1,len(samp)): cum.append(cum[-1]+math.dist(samp[i],samp[i-1]))
    L=cum[-1]
    def at(f):
        target=f*L
        for i in range(1,len(cum)):
            if cum[i]>=target:
                p=samp[i]; q=samp[i-1]; tx,ty=p[0]-q[0],p[1]-q[1]; m=math.hypot(tx,ty) or 1
                return p,(tx/m,ty/m)
        p=samp[-1]; q=samp[-2]; tx,ty=p[0]-q[0],p[1]-q[1]; m=math.hypot(tx,ty); return p,(tx/m,ty/m)
    return d,L,at
def leaf(base,tan,side,length=46,ang=40,w=12):
    a=math.radians(ang)*side
    dx=tan[0]*math.cos(a)-tan[1]*math.sin(a); dy=tan[0]*math.sin(a)+tan[1]*math.cos(a)
    nx,ny=-dy,dx
    B=base; T=(B[0]+dx*length,B[1]+dy*length)
    c1=(B[0]+dx*length*.3+nx*w,B[1]+dy*length*.3+ny*w); c2=(T[0]-dx*length*.3+nx*w,T[1]-dy*length*.3+ny*w)
    c3=(T[0]-dx*length*.3-nx*w,T[1]-dy*length*.3-ny*w); c4=(B[0]+dx*length*.3-nx*w,B[1]+dy*length*.3-ny*w)
    vein=(B[0]+dx*length*.8,B[1]+dy*length*.8)
    return ('M%.1f %.1f C %.1f %.1f, %.1f %.1f, %.1f %.1f C %.1f %.1f, %.1f %.1f, %.1f %.1f Z'%(B+c1+c2+T+c3+c4+B),
            'M%.1f %.1f L %.1f %.1f'%(B+vein))
def vine(fn,t0,t1,leafsides):
    d,L,at=build(fn,t0,t1)
    nodes=[at(f)[0] for f in FR]
    leaves=[]
    for i in range(5):
        f=(FR[i]+FR[i+1])/2
        p,tn=at(f)
        leaves.append(leaf(p,tn,leafsides[i]))
    return d,L,nodes,leaves
