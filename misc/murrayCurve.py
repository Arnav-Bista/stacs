"""
!Test fast murray polygon algorithm. 4/11/87
let scale.fac = Y.dim( screen ) / X.dim( screen )

procedure change.parities( *bool p;int start )
    for i = start to 1 by -2 do p( i ) := ~p( i )

procedure increment( *int d,r;int i -> int )
    if d( i ) < r( i ) - 1 then { d( i ) := d( i ) + 1;i }
    else { d( i ) := 0;increment( d,r,i + 1 ) }

procedure get.rads( *int digits,radices;int x.rad,y.rad )
begin
    write "x radices > "
    for i = 1 to 2 * x.rad by 2 do radices( i ) := readi()
    write "y radices > "
    for i = 2 to 2 * y.rad by 2 do radices( i ) := readi()
end

procedure number.pts( *int r;int start,inc -> int )
begin
    let res := 1
    for j = start to upb( r ) - 1 by inc do
        res := res * r( j )
    res
end

!Main

write "Number of x radices > " 
let x.rad = readi()
write "Number of y radices > "
let y.rad = readi()
let max.rad = if x.rad > y.rad then x.rad else y.rad
let complexity = 2 * max.rad
let digits = vector 1 :: complexity + 1 of 0
let radices = vector 1 :: complexity + 1 of 1
let parities = vector 1 :: complexity + 1 of true
get.rads( digits,radices,x.rad,y.rad )
let no.pts := number.pts( radices,1,1 )
let nx := number.pts( radices,1,2 )
let ny := number.pts( radices,2,2 )
let width = if nx > ny then nx else ny
let x1 := 0
let y1 := 0
let x2 := 0
let y2 := 0
let next.seg := nilpic

for i = 1 to no.pts do
begin
    let i = increment( digits,radices,1 )
    change.parities( parities,i )
    let inc = if parities( i + 1 ) then 1 else -1
    if i rem 2 = 1 then x2 := x2 + inc else y2 := y2 + inc
    next.seg := next.seg & [x1,y1] ^ [x2,y2]
    if i rem 2 = 1 then x1 := x2 else y1 := y2
end

draw( screen,next.seg, -0.15 * width,0.85 * width,0,width )
"""


def change_parities(p: list[bool], start: int) -> None:
    for i in range(start, 0, -2):
        p[i] = not p[i]


def increment(d: list[int], r: list[int], i: int) -> int:
    while i < len(d):
        if d[i] < r[i] - 1:
            d[i] += 1
            return i
        d[i] = 0
        i += 1
    return i-1  # Return last valid index


def number_pts(r: list[int], start: int, inc: int) -> int:
    res = 1
    for j in range(start, len(r) - 1, inc):
        res *= r[j]
    return res


x_radices = [3, 5, 5, 5]
y_radices = [5, 5, 5, 5]
complexity = 2 * max(len(x_radices), len(y_radices))
digits = [0] * (complexity + 1)
radices = [1] * (complexity + 1)
parities = [True] * (complexity + 1)

for i in range(len(x_radices)):
    radices[2*i + 1] = x_radices[i]
for i in range(len(y_radices)):
    radices[2*i + 2] = y_radices[i]

no_pts = number_pts(radices, 1, 1)
x1 = y1 = x2 = y2 = 0
points = [(x1, y1)]

for _ in range(no_pts):
    i = increment(digits, radices, 1)
    if i < 1:  # Check for valid index
        break
    change_parities(parities, i)
    inc = 1 if i+1 < len(parities) and parities[i + 1] else -1

    if i % 2 == 1:
        x2 += inc
    else:
        y2 += inc
    points.append((x2, y2))

print(points)
