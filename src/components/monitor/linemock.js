const sd1 = `0.02
1.51
1.52
2.4
2.08
1.98
0.03
0.03
1.83
2.25
2.13
2.08
2.07
0.03
0.03
2.07
1.52
0
0
0.7
1.42
0
0.55
0
0
1.51
2.21
4.2
3.02
1.88
0
0
5.01
0.55`
const ld1 = `
0.02
0.02
0.02
0.02
0.02
0.02
0.02
0.02
1
0.09
0.02
1.06
1.2
1.54
2.2
1.66
0.03
`
const sdlist1 = sd1.split(/\n/)
const ldlist1 = ld1.split(/\n/)

const sd2 = `0
0
0.7
1.42
0
0.55
0
0
1.51
2.21
4.2
3.02
1.88
0
0
5.01
0.55
`
const ld2 = `0
0
0
0
0
0
0
0
0
0
0
0
0
0
3.82
0
0
`
const sdlist2 = sd2.split(/\n/)
const ldlist2 = ld2.split(/\n/)

const sd3 = `0
0
0.7
1.52
1.2
0
0
0
0
0.88
0
0
0
0
0
1.09
1.3
`
const ld3 = `0
0
0
0
0
0
0
0
0
0
0
0.8
2.21
14.2
2.41
5.6
0
`
const sdlist3 = sd3.split(/\n/)
const ldlist3 = ld3.split(/\n/)

const sd4 = `0
18.09
32.12
13.34
18.88
14.09
2.81
0
3.48
7.21
1.67
0
8.91
0
0
0
1.01
`
const ld4 = `0
0
0
0
0
0
0
0
0
0
0
0
1.88
26.13
45.13
14.24
0
`
const sdlist4 = sd4.split(/\n/)
const ldlist4 = ld4.split(/\n/)

const sd5 = `199.09 
246.99 
674.41 
254.57 
157.65 
124.08 
0.00 
0.00 
133.82 
108.91 
100.59 
4.01 
1.96 
0.00 
0.00 
0.49 
`
const ld5 = `0.00 
0.38 
0.00 
124.45 
0.00 
0.00 
0.00 
48.00 
41.32 
98.80 
50.51 
56.64 
142.11 
523.02 
0.00 
0.00 
`
const sdlist5 = sd5.split(/\n/)
const ldlist5 = ld5.split(/\n/)

const sd6 = `232.05 
134.82 
204.97 
221.43 
260.06 
44.55 
25.93 
5.72 
7.34 
1.67 
28.02 
78.12 
87.67 
50.08 
2.15 
16.63 
`
const ld6 = `172.24 
204.23 
145.38 
24.06 
24.30 
0.89 
1.04 
1.12 
0.66 
0.92 
0.48 
0.29 
0.00 
1.06 
269.16 
98.92 
`
const sdlist6 = sd6.split(/\n/)
const ldlist6 = ld6.split(/\n/)

const sd7 = `0.00 
1.19 
0.45 
24.21 
24.03 
0.19 
0.00 
0.00 
0.00 
0.01 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
`
const ld7 = `0.26 
120.36 
0.17 
0.00 
0.00 
0.00 
0.00 
0.00 
25.87 
0.09 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
`
const sdlist7 = sd7.split(/\n/)
const ldlist7 = ld7.split(/\n/)

const sd8 = `1.77 
26.42 
56.99 
37.17 
0.75 
0.07 
0.04 
0.06 
0.24 
0.04 
24.19 
1.48 
0.73 
0.01 
0.01 
0.40 
`
const ld8 = `0.00 
0.00 
0.40 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
26.90 
24.60 
2.28 
`
const sdlist8 = sd8.split(/\n/)
const ldlist8 = ld8.split(/\n/)

const sd9 = `0.00 
0.00 
0.00 
0.00 
0.29 
0.24 
0.00 
0.00 
193.35 
242.20 
168.11 
241.36 
24.32 
0.00 
0.00 
24.75 
`
const ld9 = `0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
0.00 
0.43 
0.11 
0
0
0
`
const sdlist9 = sd9.split(/\n/)
const ldlist9 = ld9.split(/\n/)

const sd10 = `10.04
8.43
22.11
2.8
4.12
0
0
0
0
7.87
3.5
25.23
8.4
0
0
18.21
3.1
`
const ld10 = `0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
`
const sdlist10 = sd10.split(/\n/)
const ldlist10 = ld10.split(/\n/)

export { sdlist1, ldlist1, sdlist2, ldlist2, sdlist3, ldlist3, sdlist4, ldlist4, sdlist5, ldlist5, sdlist6, ldlist6, sdlist7, ldlist7, sdlist8, ldlist8, sdlist9, ldlist9, sdlist10, ldlist10 }
