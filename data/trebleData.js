const treble_l1 = ['F1', 'G1'];
const treble_l2 = treble_l1.concat(['A2']);
const treble_l3 = treble_l2.concat(['B2', 'E1']);
// REVIEW LEVEL
const treble_r0 = treble_l3;
const treble_l4 = treble_l3.concat(['C2', 'D2']);
const treble_l5 = treble_l4.concat(['E2', 'F2']);
// REVIEW LEVEL
const treble_r1 = treble_l5;
const treble_l6 = treble_l5.concat(['C1', 'D1']);
const treble_l7 = treble_l6.concat(['A1', 'B1']);
// REVIEW LEVEL
const treble_r2 = treble_l7;
const treble_l8 = treble_l7.concat(['A3', 'G2']);
const treble_l9 = treble_l8.concat(['C3', 'B3']);
const treble_r3 = treble_l9;
// END OF BASIC LEVELS
const treble_l10 = ['A%231', 'Ab1'];
const treble_l11 = treble_l10.concat(['B%231', 'Bb1']);
// REVIEW LEVEL
const treble_r4 = treble_l11;
const treble_l12 = treble_l11.concat(['C%231', 'Cb1']);
const treble_l13 = treble_l12.concat(['D%231', 'Db1']);
// REVIEW LEVEL
const treble_r5 = treble_l12;
const treble_l14 = treble_l13.concat(['E%231', 'Eb1']);
const treble_l15 = treble_l14.concat(['F%231', 'Fb1']);
// REVIEW LEVEL
const treble_r6 = treble_l15;
const treble_l16 = treble_l15.concat(['G%231', 'Gb1']);
const treble_l17 = treble_l16.concat(['A%232', 'Ab2']);
// REVIEW LEVEL
const treble_r7 = treble_l17;
const treble_l18 = treble_l17.concat(['B%232', 'Bb2']);
const treble_l19 = treble_l18.concat(['C%232', 'Cb2']);
// REVIEW LEVEL
const treble_r8 = treble_l19;
const treble_l20 = treble_l19.concat(['D%232', 'Db2']);
const treble_l21 = treble_l20.concat(['E%232', 'Eb2']);
// REVIEW LEVEL
const treble_r9 = treble_l21;
const treble_l22 = treble_l21.concat(['F%232', 'Fb2']);
const treble_l23 = treble_l22.concat(['G%232', 'Gb2']);
// REVIEW LEVEL
const treble_r10 = treble_l23;
const treble_l24 = treble_l23.concat(['A%233', 'Ab3']);
const treble_l25 = treble_l24.concat(['B%233', 'Ab3']);
// REVIEW LEVEL
const treble_r11 = treble_l25;
const treble_l26 = treble_l25.concat(['C%233', 'Cb3']);
const treble_all = treble_l26.concat(treble_r3);
const treble_levels = [treble_l1, treble_l2, treble_l3, treble_r0, treble_l4,
    treble_l5, treble_r1, treble_l6, treble_l7, treble_r2, treble_l8, treble_l9, treble_r3,
    treble_l10, treble_l11, treble_r4, treble_l12, treble_l13, treble_r5, treble_l14,
    treble_l15, treble_r6, treble_l16, treble_l17, treble_r7, treble_l18, treble_l19, treble_r8,
    treble_l20, treble_l21, treble_r9, treble_l22, treble_l23, treble_r10, treble_l24, treble_l25,
    treble_r11, treble_l26, treble_all
];
// F1, G1, A2, B2, E1, C2, D2, E2, F2, C1, D1, A1, B1, A3, G2, C3, B3
// 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16
const twinkle = [9, 9, 1, 1, 2, 2, 1, 0, 0, 4, 4, 10, 10, 9, 1, 1, 0, 0, 4, 4, 10, 1, 1, 0, 0, 4, 4, 10, 9, 9, 1, 1, 2, 2, 1, 0, 0, 4, 4, 10, 10, 9];
const hotCrossBuns = [4, 10, 9, 4, 10, 9, 9, 9, 9, 9, 10, 10, 10, 10, 4, 10, 9];
const rowBoat = [9, 9, 9, 10, 4, 4, 10, 4, 0, 1, 5, 5, 5, 1, 1, 1, 4, 4, 4, 9, 9, 9, 1, 0, 4, 10, 9];
const londonBridge = [1, 2, 1, 0, 4, 0, 1, 10, 4, 0, 4, 0, 1, 1, 2, 1, 0, 4, 0, 1, 10, 1, 4, 9];
const joyOdePt1 = [4, 4, 0, 1, 1, 0, 4, 10, 9, 9, 10, 4, 4, 10, 10, 4, 4, 0, 1, 1, 0, 4, 10, 9, 9, 10, 4, 10, 9, 9];
const joyOdePt2 = [10, 10, 4, 9, 10, 4, 0, 4, 9, 10, 4, 0, 4, 10, 9, 10, 1, 4, 4, 0, 1, 1, 0, 4, 10, 9, 9, 10, 4, 10, 9, 9];
const songNames = ['Hot Cross Buns', 'London Bridge is Falling Down', 'Ode to Joy (pt. 1)', 'Row, Row, Row Your Boat', 'Ode to Joy (pt. 2)', 'Twinkle Twinkle Little Star', , 'Ode to Joy (full)'];
const songDetails = [
    [{
        title: 'New Song: Hot Cross Buns',
        img: '',
        details: 'details about HCB',
    }],
    [{
        title: 'New Song: London Bridge is Falling Down',
        img: '',
        details: 'details about LBiFD',
    }],
    [{
        title: 'New Song: Ode to Joy',
        img: '',
        details: 'details about OTJ',
    }],
    [{
        title: 'New Song: Row, Row, Row Your Boat',
        img: '',
        details: 'details about RRRYB',
    }],
    [{
        title: 'Ode to Joy',
        img: '',
        details: 'details about OTJ',
    }],
    [{
        title: 'New Song: Twinkle Twinkle Little Star',
        img: '',
        details: 'details about TTLS',
    }],
    [{
        title: 'Review Song: Ode to Joy',
        img: '',
        details: 'details about OTJ',
    }]
];

const treble_noteDetails = [
    [{
            title: 'New Note: F',
            img: '/public/assets/images/treble/treble_F1.png',
            details: 'This is what an F can look like in the treble clef. The F falls in the first space of the staff. <br/><br/>Remember: spaces spell FACE'
        },
        {
            title: 'New Note: G',
            img: '/public/assets/images/treble/treble_G1.png',
            details: 'This is what a G can look like in the treble clef. The G falls on the second line of the staff, right above the F. <br/><br/>Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [{
        title: 'New Note: A',
        img: '/public/assets/images/treble/treble_A2.png',
        details: 'This is what an A can look like in the treble clef. The A falls in the second space of the staff, just above the G. <br/><br/>Remember: spaces spell FACE'
    }],
    [{
            title: 'New Note: B',
            img: '/public/assets/images/treble/treble_B2.png',
            details: 'This is what a B can look like in the treble clef. The B falls on the third space of the staff, just above the A. <br/><br/>Remember: spaces spell FACE'
        },
        {
            title: 'New Note: E',
            img: '/public/assets/images/treble/treble_E1.png',
            details: 'This is what an E can look like in the treble clef. The E falls on the first line of the staff, right below the F. <br/><br/>Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [{
            title: 'Review Note: F',
            img: '/public/assets/images/treble/treble_F1.png',
            details: 'This is what an F can look like in the treble clef. The F falls in the first space of the staff. <br/><br/>Remember: spaces spell FACE'
        },
        {
            title: 'Review Note: G',
            img: '/public/assets/images/treble/treble_G1.png',
            details: 'This is what a G can look like in the treble clef. The G falls on the second line of the staff, right above the F. <br/><br/>Remember: lines stand for Every Good Boy Does Fine'
        },
        {
            title: 'Review Note: A',
            img: '/public/assets/images/treble/treble_A2.png',
            details: 'This is what an A can look like in the treble clef. The A falls in the second space of the staff, just above the G. <br/><br/>Remember: spaces spell FACE'
        },
        {
            title: 'Review Note: B',
            img: '/public/assets/images/treble/treble_B2.png',
            details: 'This is what a B can look like in the treble clef. The B falls on the third space of the staff, just above the A. <br/><br/>Remember: spaces spell FACE'
        },
        {
            title: 'Review Note: E',
            img: '/public/assets/images/treble/treble_E1.png',
            details: 'This is what an E can look like in the treble clef. The E falls on the first line of the staff, right below the F. <br/><br/>Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [{
            title: 'New Note: C',
            img: '/public/assets/images/treble/treble_C2.png',
            details: 'This is what a C can look like in the treble clef. The C falls in the third space of the staff, just above the A. <br/><br/>Remember: spaces spell FACE'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/treble/treble_D2.png',
            details: 'This is what a D can look like in the treble clef. The D falls on the fourth line of the staff, right above the C. <br/><br/>Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [{
            title: 'New Note: E',
            img: '/public/assets/images/treble/treble_E2.png',
            details: 'This is another way E can look in the treble clef. The E falls in the top space of the staff, just above the D. <br/><br/>Remember: spaces spell FACE'
        },
        {
            title: 'New Note: F',
            img: '/public/assets/images/treble/treble_F2.png',
            details: 'This is another way F can look in the treble clef. The F falls on the top line of the staff, right above the E. <br/><br/>Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [{
            title: 'Review Note: C',
            img: '/public/assets/images/treble/treble_C2.png',
            details: 'This is what a C can look like in the treble clef. The C falls in the third space of the staff, just above the A. <br/><br/>Remember: spaces spell FACE'
        },
        {
            title: 'Review Note: D',
            img: '/public/assets/images/treble/treble_D2.png',
            details: 'This is what a D can look like in the treble clef. The D falls on the fourth line of the staff, right above the C. <br/><br/>Remember: lines stand for Every Good Boy Does Fine'
        },
        {
            title: 'Review Note: E',
            img: '/public/assets/images/treble/treble_E2.png',
            details: 'This is another way E can look in the treble clef. The E falls in the top space of the staff, just above the D. <br/><br/>Remember: spaces spell FACE'
        },
        {
            title: 'Review Note: F',
            img: '/public/assets/images/treble/treble_F2.png',
            details: 'This is another way F can look in the treble clef. The F falls on the top line of the staff, right above the E. <br/><br/>Remember: lines stand for Every Good Boy Does Fine'
        }
    ],
    [{
            title: 'New Note: C',
            img: '/public/assets/images/treble/treble_C1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the treble clef. The C is one line below the lowest line of the treble staff. This specific C is called Middle C on the piano, because it is in the middle of the keyboard.'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/treble/treble_D1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the treble clef. The D is on the space below the lowest line of the treble staff.'
        }
    ],
    [{
            title: 'New Note: A',
            img: '/public/assets/images/treble/treble_A1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an A can look in the treble clef. The A is two lines below the lowest line of the treble staff.'
        },
        {
            title: 'New Note: B',
            img: '/public/assets/images/treble/treble_B1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the treble clef. The B is two spaces below the lowest line of the treble staff, right below the C.'
        }
    ],
    [{
            title: 'Review Note: C',
            img: '/public/assets/images/treble/treble_C1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the treble clef. The C is one line below the lowest line of the treble staff. This specific C is called Middle C on the piano, because it is in the middle of the keyboard.'
        },
        {
            title: 'Review Note: D',
            img: '/public/assets/images/treble/treble_D1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the treble clef. The D is on the space below the lowest line of the treble staff.'
        },
        {
            title: 'Review Note: A',
            img: '/public/assets/images/treble/treble_A1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an A can look in the treble clef. The A is two lines below the lowest line of the treble staff.'
        },
        {
            title: 'Review Note: B',
            img: '/public/assets/images/treble/treble_B1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the treble clef. The B is two spaces below the lowest line of the treble staff, right below the C.'
        }
    ],
    [{
            title: 'New Note: A',
            img: '/public/assets/images/treble/treble_A3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an A can look in the treble clef. The A is on the line above the top line of the treble staff.'
        },
        {
            title: 'New Note: G',
            img: '/public/assets/images/treble/treble_G2.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a G can look in the treble clef. The G is right above the top line of the treble staff.'
        }
    ],
    [{
            title: 'New Note: C',
            img: '/public/assets/images/treble/treble_C3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the treble clef. The C is two lines above the top line of the treble staff.'
        },
        {
            title: 'New Note: B',
            img: '/public/assets/images/treble/treble_B3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a B can look in the treble clef. The B is two spaces above the top line of the treble staff, right above A.'
        }
    ],
    [{
            title: 'Review Note: G',
            img: '/public/assets/images/treble/treble_G2.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a G can look in the treble clef. The G is right above the top line of the treble staff.'
        },
        {
            title: 'Review Note: A',
            img: '/public/assets/images/treble/treble_A3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an A can look in the treble clef. The A is on the line above the top line of the treble staff.'
        },
        {
            title: 'Review Note: B',
            img: '/public/assets/images/treble/treble_B3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a B can look in the treble clef. The B is two spaces above the top line of the treble staff, right above A.'
        },
        {
            title: 'Review Note: C',
            img: '/public/assets/images/treble/treble_C3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the treble clef. The C is two lines above the top line of the treble staff.'
        }
    ],
    [{
            title: 'New Note: A Sharp',
            img: '/public/assets/images/treble/treble_A%231.png',
            details: 'A Sharp is one half step above A, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: A Flat',
            img: '/public/assets/images/treble/treble_Ab1.png',
            details: 'A Flat is one half step below A, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: B Sharp',
            img: '/public/assets/images/treble/treble_B%231.png',
            details: 'B Sharp is one half step above B, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: B Flat',
            img: '/public/assets/images/treble/treble_Bb1.png',
            details: 'B Flat is one half step below B, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: A Sharp',
            img: '/public/assets/images/treble/treble_A%231.png',
            details: 'A Sharp is one half step above A, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: A Flat',
            img: '/public/assets/images/treble/treble_Ab1.png',
            details: 'A Flat is one half step below A, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: B Sharp',
            img: '/public/assets/images/treble/treble_B%231.png',
            details: 'B Sharp is one half step above B, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: B Flat',
            img: '/public/assets/images/treble/treble_Bb1.png',
            details: 'B Flat is one half step below B, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: C Sharp',
            img: '/public/assets/images/treble/treble_C%231.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: C Flat',
            img: '/public/assets/images/treble/treble_Cb1.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: D Sharp',
            img: '/public/assets/images/treble/treble_D%231.png',
            details: 'D Sharp is one half step above D, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: D Flat',
            img: '/public/assets/images/treble/treble_Db1.png',
            details: 'D Flat is one half step below D, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: C Sharp',
            img: '/public/assets/images/treble/treble_C%231.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: C Flat',
            img: '/public/assets/images/treble/treble_Cb1.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: D Sharp',
            img: '/public/assets/images/treble/treble_D%231.png',
            details: 'D Sharp is one half step above D, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: D Flat',
            img: '/public/assets/images/treble/treble_Db1.png',
            details: 'D Flat is one half step below D, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: E Sharp',
            img: '/public/assets/images/treble/treble_E%231.png',
            details: 'E Sharp is one half step above E, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: E Flat',
            img: '/public/assets/images/treble/treble_Eb1.png',
            details: 'E Flat is one half step below E, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: F Sharp',
            img: '/public/assets/images/treble/treble_F%231.png',
            details: 'F Sharp is one half step above F, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: F Flat',
            img: '/public/assets/images/treble/treble_Fb1.png',
            details: 'F Flat is one half step below F, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: E Sharp',
            img: '/public/assets/images/treble/treble_E%231.png',
            details: 'E Sharp is one half step above E, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: E Flat',
            img: '/public/assets/images/treble/treble_Eb1.png',
            details: 'E Flat is one half step below E, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: F Sharp',
            img: '/public/assets/images/treble/treble_F%231.png',
            details: 'F Sharp is one half step above F, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: F Flat',
            img: '/public/assets/images/treble/treble_Fb1.png',
            details: 'F Flat is one half step below F, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: G Sharp',
            img: '/public/assets/images/treble/treble_G%231.png',
            details: 'G Sharp is one half step above G, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: G Flat',
            img: '/public/assets/images/treble/treble_Gb1.png',
            details: 'G Flat is one half step below G, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: A Sharp',
            img: '/public/assets/images/treble/treble_A%232.png',
            details: 'A Sharp is one half step above A, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: A Flat',
            img: '/public/assets/images/treble/treble_Ab2.png',
            details: 'A Flat is one half step below A, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: G Sharp',
            img: '/public/assets/images/treble/treble_G%231.png',
            details: 'G Sharp is one half step above G, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: G Flat',
            img: '/public/assets/images/treble/treble_Gb1.png',
            details: 'G Flat is one half step below G, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: A Sharp',
            img: '/public/assets/images/treble/treble_A%232.png',
            details: 'A Sharp is one half step above A, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: A Flat',
            img: '/public/assets/images/treble/treble_Ab2.png',
            details: 'A Flat is one half step below A, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: B Sharp',
            img: '/public/assets/images/treble/treble_B%232.png',
            details: 'B Sharp is one half step above B, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: B Flat',
            img: '/public/assets/images/treble/treble_Bb2.png',
            details: 'B Flat is one half step below B, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: C Sharp',
            img: '/public/assets/images/treble/treble_C%232.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: C Flat',
            img: '/public/assets/images/treble/treble_Cb2.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: B Sharp',
            img: '/public/assets/images/treble/treble_B%232.png',
            details: 'B Sharp is one half step above B, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: B Flat',
            img: '/public/assets/images/treble/treble_Bb2.png',
            details: 'B Flat is one half step below B, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: C Sharp',
            img: '/public/assets/images/treble/treble_C%232.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: C Flat',
            img: '/public/assets/images/treble/treble_Cb2.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: D Sharp',
            img: '/public/assets/images/treble/treble_D%232.png',
            details: 'D Sharp is one half step above D, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: D Flat',
            img: '/public/assets/images/treble/treble_Db2.png',
            details: 'D Flat is one half step below D, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: E Sharp',
            img: '/public/assets/images/treble/treble_E%232.png',
            details: 'E Sharp is one half step above E, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: E Flat',
            img: '/public/assets/images/treble/treble_Eb2.png',
            details: 'E Flat is one half step below E, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: D Sharp',
            img: '/public/assets/images/treble/treble_D%232.png',
            details: 'D Sharp is one half step above D, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: D Flat',
            img: '/public/assets/images/treble/treble_Db2.png',
            details: 'D Flat is one half step below D, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: E Sharp',
            img: '/public/assets/images/treble/treble_E%232.png',
            details: 'E Sharp is one half step above E, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: E Flat',
            img: '/public/assets/images/treble/treble_Eb2.png',
            details: 'E Flat is one half step below E, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: F Sharp',
            img: '/public/assets/images/treble/treble_F%232.png',
            details: 'F Sharp is one half step above F, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: F Flat',
            img: '/public/assets/images/treble/treble_Fb2.png',
            details: 'F Flat is one half step below F, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: G Sharp',
            img: '/public/assets/images/treble/treble_G%232.png',
            details: 'G Sharp is one half step above G, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: G Flat',
            img: '/public/assets/images/treble/treble_Gb2.png',
            details: 'G Flat is one half step below G, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: F Sharp',
            img: '/public/assets/images/treble/treble_F%232.png',
            details: 'F Sharp is one half step above F, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: F Flat',
            img: '/public/assets/images/treble/treble_Fb2.png',
            details: 'F Flat is one half step below F, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: G Sharp',
            img: '/public/assets/images/treble/treble_G%232.png',
            details: 'G Sharp is one half step above G, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: G Flat',
            img: '/public/assets/images/treble/treble_Gb2.png',
            details: 'G Flat is one half step below G, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: A Sharp',
            img: '/public/assets/images/treble/treble_A%233.png',
            details: 'A Sharp is one half step above A, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: A Flat',
            img: '/public/assets/images/treble/treble_Ab3.png',
            details: 'A Flat is one half step below A, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: B Sharp',
            img: '/public/assets/images/treble/treble_B%233.png',
            details: 'B Sharp is one half step above B, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: B Flat',
            img: '/public/assets/images/treble/treble_Bb3.png',
            details: 'B Flat is one half step below B, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: A Sharp',
            img: '/public/assets/images/treble/treble_A%233.png',
            details: 'A Sharp is one half step above A, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: A Flat',
            img: '/public/assets/images/treble/treble_Ab3.png',
            details: 'A Flat is one half step below A, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: B Sharp',
            img: '/public/assets/images/treble/treble_B%233.png',
            details: 'B Sharp is one half step above B, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: B Flat',
            img: '/public/assets/images/treble/treble_Bb3.png',
            details: 'B Flat is one half step below B, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: C Sharp',
            img: '/public/assets/images/treble/treble_C%233.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: C Flat',
            img: '/public/assets/images/treble/treble_Cb3.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        }
    ],
    [{
        title: 'You have completed all Treble Note Levels!',
        img: '/public/assets/images/treble/treble_clef.png',
        details: 'Practice with all the treble notes.'
    }, ]
];

const songs = [hotCrossBuns, londonBridge, joyOdePt1, rowBoat, joyOdePt2, twinkle, joyOdePt1.concat(joyOdePt2)];

module.exports = {
    songs,
    songDetails,
    treble_levels,
    treble_noteDetails,
    songNames
}