const bass_l1 = ['C2', 'D2'];
const bass_l2 = bass_l1.concat(['E2']);
const bass_l3 = bass_l2.concat(['B1', 'F2']);
const bass_r0 = bass_l3;
const bass_l4 = bass_l3.concat(['G2', 'A2']);
const bass_l5 = bass_l4.concat(['A1', 'G1']);
const bass_r1 = bass_l5;
const bass_l6 = bass_l5.concat(['B2', 'C3']);
const bass_l7 = bass_l6.concat(['E1', 'F1']);
const bass_r2 = bass_l7;
const bass_l8 = bass_l7.concat(['C1', 'D1']);
const bass_l9 = bass_l8.concat(['D3', 'E3']);
const bass_r3 = bass_l9;
// END OF BASIC LEVELS
const bass_l10 = ['C%231', 'Cb1'];
const bass_l11 = bass_l10.concat(['D%231', 'Db1']);
// REVIEW LEVEL
const bass_r4 = bass_l11;
const bass_l12 = bass_l11.concat(['E%231', 'Eb1']);
const bass_l13 = bass_l12.concat(['F%231', 'Fb1']);
// REVIEW LEVEL
const bass_r5 = bass_l12;
const bass_l14 = bass_l13.concat(['G%231', 'Gb1']);
const bass_l15 = bass_l14.concat(['A%231', 'Ab1']);
// REVIEW LEVEL
const bass_r6 = bass_l15;
const bass_l16 = bass_l15.concat(['B%231', 'Bb1']);
const bass_l17 = bass_l16.concat(['C%232', 'Cb2']);
// REVIEW LEVEL
const bass_r7 = bass_l17;
const bass_l18 = bass_l17.concat(['D%232', 'Db2']);
const bass_l19 = bass_l18.concat(['E%232', 'Eb2']);
// REVIEW LEVEL
const bass_r8 = bass_l19;
const bass_l20 = bass_l19.concat(['F%232', 'Fb2']);
const bass_l21 = bass_l20.concat(['G%232', 'Gb2']);
// REVIEW LEVEL
const bass_r9 = bass_l21;
const bass_l22 = bass_l21.concat(['A%232', 'Ab2']);
const bass_l23 = bass_l22.concat(['B%232', 'Bb2']);
// REVIEW LEVEL
const bass_r10 = bass_l23;
const bass_l24 = bass_l23.concat(['C%233', 'Cb3']);
const bass_l25 = bass_l24.concat(['D%233', 'Db3']);
// REVIEW LEVEL
const bass_r11 = bass_l25;
const bass_l26 = bass_l25.concat(['E%233', 'Eb3']);
const bass_all = bass_r3.concat(bass_l26);
const bass_levels = [bass_l1, bass_l2, bass_l3, bass_r0, bass_l4,
    bass_l5, bass_r1, bass_l6, bass_l7, bass_r2, bass_l8, bass_l9, bass_r3,
    bass_l10, bass_l11, bass_r4, bass_l12, bass_l13, bass_r5, bass_l14,
    bass_l15, bass_r6, bass_l16, bass_l17, bass_r7, bass_l18, bass_l19, bass_r8,
    bass_l20, bass_l21, bass_r9, bass_l22, bass_l23, bass_r10, bass_l24, bass_l25,
    bass_r11, bass_l26, bass_all
];

const bass_noteDetails = [
    [{
            title: 'New Note: C',
            img: '/public/assets/images/bass/bass_C2.png',
            details: 'This is what a C can look like in the bass clef. The C falls in the second space of the staff. <br/><br/>Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/bass/bass_D2.png',
            details: 'This is what a D can look like in the bass clef. The D falls on the middle line of the staff, right above the C. <br/><br/>Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [{
        title: 'New Note: E',
        img: '/public/assets/images/bass/bass_E2.png',
        details: 'This is what an E can look like in the bass clef. The E falls in the third space of the staff. <br/><br/>Remember: spaces stand for All Cows Eat Grass'
    }, ],
    [{
            title: 'New Note: B',
            img: '/public/assets/images/bass/bass_B1.png',
            details: 'This is what a B can look like in the bass clef. The B falls on the first line of the staff. <br/><br/>Remember: lines stand for Good Boys Deserve Fudge Always'
        },
        {
            title: 'New Note: F',
            img: '/public/assets/images/bass/bass_F2.png',
            details: 'This is what an F can look like in the bass clef. The F falls on the fourth line of the staff. <br/><br/>Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [{
            title: 'Review Note: B',
            img: '/public/assets/images/bass/bass_B1.png',
            details: 'This is what a B can look like in the bass clef. The B falls on the first line of the staff. <br/><br/>Remember: lines stand for Good Boys Deserve Fudge Always'
        },
        {
            title: 'Review Note: C',
            img: '/public/assets/images/bass/bass_C2.png',
            details: 'This is what a C can look like in the bass clef. The C falls in the second space of the staff. <br/><br/>Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'Review Note: D',
            img: '/public/assets/images/bass/bass_D2.png',
            details: 'This is what a D can look like in the bass clef. The D falls on the middle line of the staff, right above the C. <br/><br/>Remember: lines stand for Good Boys Deserve Fudge Always'
        },
        {
            title: 'Review Note: E',
            img: '/public/assets/images/bass/bass_E2.png',
            details: 'This is what an E can look like in the bass clef. The E falls in the third space of the staff. <br/><br/>Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'Review Note: F',
            img: '/public/assets/images/bass/bass_F2.png',
            details: 'This is what an F can look like in the bass clef. The F falls on the fourth line of the staff. <br/><br/>Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [{
            title: 'New Note: G',
            img: '/public/assets/images/bass/bass_G2.png',
            details: 'This is what a G can look like in the bass clef. The G falls in the top space of the staff. <br/><br/>Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'New Note: A',
            img: '/public/assets/images/bass/bass_A2.png',
            details: 'This is what an A can look like in the bass clef. The A falls on the top line of the staff. <br/><br/>Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [{
            title: 'New Note: A',
            img: '/public/assets/images/bass/bass_A1.png',
            details: 'This is what an A can look like in the bass clef. The A falls in the first space of the staff. <br/><br/>Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'New Note: G',
            img: '/public/assets/images/bass/bass_G1.png',
            details: 'This is what a G can look like in the bass clef. The G falls on the first line of the staff. <br/><br/>Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [{
            title: 'Review Note: G',
            img: '/public/assets/images/bass/bass_G2.png',
            details: 'This is what a G can look like in the bass clef. The G falls in the top space of the staff. <br/><br/>Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'Review Note: A',
            img: '/public/assets/images/bass/bass_A2.png',
            details: 'This is what an A can look like in the bass clef. The A falls on the top line of the staff. <br/><br/>Remember: lines stand for Good Boys Deserve Fudge Always'
        },
        {
            title: 'Review Note: A',
            img: '/public/assets/images/bass/bass_A1.png',
            details: 'This is what an A can look like in the bass clef. The A falls in the first space of the staff. <br/><br/>Remember: spaces stand for All Cows Eat Grass'
        },
        {
            title: 'Review Note: G',
            img: '/public/assets/images/bass/bass_G1.png',
            details: 'This is what a G can look like in the bass clef. The G falls on the first line of the staff. <br/><br/>Remember: lines stand for Good Boys Deserve Fudge Always'
        }
    ],
    [{
            title: 'New Note: B',
            img: '/public/assets/images/bass/bass_B2.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a B can look in the bass clef. The B is one space above the top line of the bass staff.'
        },
        {
            title: 'New Note: C',
            img: '/public/assets/images/bass/bass_C3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the bass clef. The C is on the line above the top line of the bass staff. This specific C is called Middle C on the piano, because it is in the middle of the keyboard.'
        }
    ],
    [{
            title: 'New Note: E',
            img: '/public/assets/images/bass/bass_E1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an E can look in the bass clef. The E is one line below the bottom line of the bass staff.'
        },
        {
            title: 'New Note: F',
            img: '/public/assets/images/bass/bass_F1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an F can look in the bass clef. The F is on the space below the bottom line of the bass staff.'
        }
    ],
    [{
            title: 'Review Note: B',
            img: '/public/assets/images/bass/bass_B2.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a B can look in the bass clef. The B is one space above the top line of the bass staff.'
        },
        {
            title: 'Review Note: C',
            img: '/public/assets/images/bass/bass_C3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the bass clef. The C is on the line above the top line of the bass staff. This specific C is called Middle C on the piano, because it is in the middle of the keyboard.'
        },
        {
            title: 'Review Note: E',
            img: '/public/assets/images/bass/bass_E1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an E can look in the bass clef. The E is one line below the bottom line of the bass staff.'
        },
        {
            title: 'Review Note: F',
            img: '/public/assets/images/bass/bass_F1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an F can look in the bass clef. The F is on the space below the bottom line of the bass staff.'
        }
    ],
    [{
            title: 'New Note: C',
            img: '/public/assets/images/bass/bass_C1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the bass clef. The C is two lines below the bottom line of the bass staff.'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/bass/bass_D1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the bass clef. The D is right above the low C.'
        }
    ],
    [{
            title: 'New Note: D',
            img: '/public/assets/images/bass/bass_D3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the bass clef. The D is two spaces above the top line of the bass staff.'
        },
        {
            title: 'New Note: E',
            img: '/public/assets/images/bass/bass_E3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an E can look in the bass clef. The E is two lines above the top line of the bass staff, right above D.'
        }
    ],
    [{
            title: 'New Note: C',
            img: '/public/assets/images/bass/bass_C1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a C can look in the bass clef. The C is two lines below the bottom line of the bass staff.'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/bass/bass_D1.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the bass clef. The D is right above the low C.'
        },
        {
            title: 'New Note: D',
            img: '/public/assets/images/bass/bass_D3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way a D can look in the bass clef. The D is two spaces above the top line of the bass staff.'
        },
        {
            title: 'New Note: E',
            img: '/public/assets/images/bass/bass_E3.png',
            details: 'Sometimes notes fall above or below the staff. This is another way an E can look in the bass clef. The E is two lines above the top line of the bass staff, right above D.'
        }
    ],
    [{
            title: 'New Note: C Sharp',
            img: '/public/assets/images/bass/bass_C%231.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: C Flat',
            img: '/public/assets/images/bass/bass_Cb1.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: D Sharp',
            img: '/public/assets/images/bass/bass_D%231.png',
            details: 'D Sharp is one half step above D, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: D Flat',
            img: '/public/assets/images/bass/bass_Db1.png',
            details: 'D Flat is one half step below D, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: C Sharp',
            img: '/public/assets/images/bass/bass_C%231.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: C Flat',
            img: '/public/assets/images/bass/bass_Cb1.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: D Sharp',
            img: '/public/assets/images/bass/bass_D%231.png',
            details: 'D Sharp is one half step above D, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: D Flat',
            img: '/public/assets/images/bass/bass_Db1.png',
            details: 'D Flat is one half step below D, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: E Sharp',
            img: '/public/assets/images/bass/bass_E%231.png',
            details: 'E Sharp is one half step above E, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: E Flat',
            img: '/public/assets/images/bass/bass_Eb1.png',
            details: 'E Flat is one half step below E, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: F Sharp',
            img: '/public/assets/images/bass/bass_F%231.png',
            details: 'F Sharp is one half step above F, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: F Flat',
            img: '/public/assets/images/bass/bass_Fb1.png',
            details: 'F Flat is one half step below F, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: E Sharp',
            img: '/public/assets/images/bass/bass_E%231.png',
            details: 'E Sharp is one half step above E, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: E Flat',
            img: '/public/assets/images/bass/bass_Eb1.png',
            details: 'E Flat is one half step below E, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: F Sharp',
            img: '/public/assets/images/bass/bass_F%231.png',
            details: 'F Sharp is one half step above F, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: F Flat',
            img: '/public/assets/images/bass/bass_Fb1.png',
            details: 'F Flat is one half step below F, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: G Sharp',
            img: '/public/assets/images/bass/bass_G%231.png',
            details: 'G Sharp is one half step above G, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: G Flat',
            img: '/public/assets/images/bass/bass_Gb1.png',
            details: 'G Flat is one half step below G, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: A Sharp',
            img: '/public/assets/images/bass/bass_A%231.png',
            details: 'A Sharp is one half step above A, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: A Flat',
            img: '/public/assets/images/bass/bass_Ab1.png',
            details: 'A Flat is one half step below A, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: G Sharp',
            img: '/public/assets/images/bass/bass_G%231.png',
            details: 'G Sharp is one half step above G, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: G Flat',
            img: '/public/assets/images/bass/bass_Gb1.png',
            details: 'G Flat is one half step below G, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: A Sharp',
            img: '/public/assets/images/bass/bass_A%231.png',
            details: 'A Sharp is one half step above A, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: A Flat',
            img: '/public/assets/images/bass/bass_Ab1.png',
            details: 'A Flat is one half step below A, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: B Sharp',
            img: '/public/assets/images/bass/bass_B%231.png',
            details: 'B Sharp is one half step above B, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: B Flat',
            img: '/public/assets/images/bass/bass_Bb1.png',
            details: 'B Flat is one half step below B, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: C Sharp',
            img: '/public/assets/images/bass/bass_C%232.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: C Flat',
            img: '/public/assets/images/bass/bass_Cb2.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: B Sharp',
            img: '/public/assets/images/bass/bass_B%231.png',
            details: 'B Sharp is one half step above B, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: B Flat',
            img: '/public/assets/images/bass/bass_Bb1.png',
            details: 'B Flat is one half step below B, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: C Sharp',
            img: '/public/assets/images/bass/bass_C%232.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: C Flat',
            img: '/public/assets/images/bass/bass_Cb2.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: D Sharp',
            img: '/public/assets/images/bass/bass_D%232.png',
            details: 'D Sharp is one half step above D, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: D Flat',
            img: '/public/assets/images/bass/bass_Db2.png',
            details: 'D Flat is one half step below D, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: E Sharp',
            img: '/public/assets/images/bass/bass_E%232.png',
            details: 'E Sharp is one half step above E, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: E Flat',
            img: '/public/assets/images/bass/bass_Eb2.png',
            details: 'E Flat is one half step below E, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: D Sharp',
            img: '/public/assets/images/bass/bass_D%232.png',
            details: 'D Sharp is one half step above D, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: D Flat',
            img: '/public/assets/images/bass/bass_Db2.png',
            details: 'D Flat is one half step below D, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: E Sharp',
            img: '/public/assets/images/bass/bass_E%232.png',
            details: 'E Sharp is one half step above E, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: E Flat',
            img: '/public/assets/images/bass/bass_Eb2.png',
            details: 'E Flat is one half step below E, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: F Sharp',
            img: '/public/assets/images/bass/bass_F%232.png',
            details: 'F Sharp is one half step above F, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: F Flat',
            img: '/public/assets/images/bass/bass_Fb2.png',
            details: 'F Flat is one half step below F, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: G Sharp',
            img: '/public/assets/images/bass/bass_G%232.png',
            details: 'G Sharp is one half step above G, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: G Flat',
            img: '/public/assets/images/bass/bass_Gb2.png',
            details: 'G Flat is one half step below G, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: F Sharp',
            img: '/public/assets/images/bass/bass_F%232.png',
            details: 'F Sharp is one half step above F, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: F Flat',
            img: '/public/assets/images/bass/bass_Fb2.png',
            details: 'F Flat is one half step below F, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: G Sharp',
            img: '/public/assets/images/bass/bass_G%232.png',
            details: 'G Sharp is one half step above G, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: G Flat',
            img: '/public/assets/images/bass/bass_Gb2.png',
            details: 'G Flat is one half step below G, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: A Sharp',
            img: '/public/assets/images/bass/bass_A%232.png',
            details: 'A Sharp is one half step above A, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: A Flat',
            img: '/public/assets/images/bass/bass_Ab2.png',
            details: 'A Flat is one half step below A, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: B Sharp',
            img: '/public/assets/images/bass/bass_B%232.png',
            details: 'B Sharp is one half step above B, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: B Flat',
            img: '/public/assets/images/bass/bass_Bb2.png',
            details: 'B Flat is one half step below B, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: A Sharp',
            img: '/public/assets/images/bass/bass_A%232.png',
            details: 'A Sharp is one half step above A, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: A Flat',
            img: '/public/assets/images/bass/bass_Ab2.png',
            details: 'A Flat is one half step below A, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: B Sharp',
            img: '/public/assets/images/bass/bass_B%232.png',
            details: 'B Sharp is one half step above B, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: B Flat',
            img: '/public/assets/images/bass/bass_Bb2.png',
            details: 'B Flat is one half step below B, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: C Sharp',
            img: '/public/assets/images/bass/bass_C%233.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: C Flat',
            img: '/public/assets/images/bass/bass_Cb3.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: D Sharp',
            img: '/public/assets/images/bass/bass_D%233.png',
            details: 'D Sharp is one half step above D, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: D Flat',
            img: '/public/assets/images/bass/bass_Db3.png',
            details: 'D Flat is one half step below D, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'Review Note: C Sharp',
            img: '/public/assets/images/bass/bass_C%233.png',
            details: 'C Sharp is one half step above C, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: C Flat',
            img: '/public/assets/images/bass/bass_Cb3.png',
            details: 'C Flat is one half step below C, noted with a flat sign (b).'
        },
        {
            title: 'Review Note: D Sharp',
            img: '/public/assets/images/bass/bass_D%233.png',
            details: 'D Sharp is one half step above D, noted with a sharp sign (#).'
        },
        {
            title: 'Review Note: D Flat',
            img: '/public/assets/images/bass/bass_Db3.png',
            details: 'D Flat is one half step below D, noted with a flat sign (b).'
        }
    ],
    [{
            title: 'New Note: E Sharp',
            img: '/public/assets/images/bass/bass_E%233.png',
            details: 'E Sharp is one half step above E, noted with a sharp sign (#).'
        },
        {
            title: 'New Note: E Flat',
            img: '/public/assets/images/bass/bass_Eb3.png',
            details: 'E Flat is one half step below E, noted with a flat sign (b).'
        }
    ],
    [{
        title: 'You have completed all Bass Note Levels!',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'Practice with all the Bass notes.'
    }, ]
];

// C2, D2, E2, B1, F2, G2, A2, A1, G1, B2, C3, E1, F1, C1, D1, D3, E3
// 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16

const beethoven = [2, 2, 2, 0, 1, 1, 1, 3];
const jaws = [3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0];
const twinkle = [0, 0, 5, 5, 6, 6, 5, 4, 4, 2, 2, 1, 1, 0, 5, 5, 4, 4, 2, 2, 1, 5, 5, 4, 4, 2, 2, 1, 0, 0, 5, 5, 6, 6, 5, 4, 4, 2, 2, 1, 1, 0];
const starWars = [8, 8, 8, 0, 5, 4, 2, 1, 10, 5, 4, 2, 1, 10, 5, 4, 2, 4, 1];
const avengers = [1, 1, 6, 5, 4, 2, 1, 1, 1, 6, 9, 5, 6, 15];
const spongebob = [10, 10, 15, 10, 6, 4, 6, 10, 15, 10, 6, 7, 7, 7, 7, 10, 10, 15, 10, 6, 4, 6, 10, 15, 10, 6];


const songs = [beethoven, jaws, twinkle, starWars, avengers, spongebob];
//, joyOdePt1, rowBoat,  joyOdePt2, twinkle, joyOdePt1.concat(joyOdePt2)];
const songNames = ['Beethoven\'s Fifth', 'Jaws Theme', 'Twinkle Twinkle Little Star', 'Star Wars Theme', 'Avengers Theme', 'Spongebob Theme'];
//, 'Ode to Joy (pt. 1)', 'Row, Row, Row Your Boat',  'Ode to Joy (pt. 2)', 'Twinkle Twinkle Little Star', , 'Ode to Joy (full)'];
const songDetails = [
    [{
        title: 'New Song: Beethoven\'s Fifth',
        img: 'https://images.pexels.com/photos/7325138/pexels-photo-7325138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'Beethoven\'s Fifth Symphony was composed between 1804 and 1808. It contains one of the most recognizable tunes in all of music with its short-short-short-long fate motif.',
    }],
    [{
        title: 'New Song: Jaws Theme',
        img: 'https://images.pexels.com/photos/11348767/pexels-photo-11348767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'The Jaws Theme was written by famous soundtrack composer John Williams for the 1975 movie Jaws. His goal was for it to sound as if it was, "grinding away at you, just as a shark would do, instinctual, relentless, unstoppable."',
    }],
    [{
        title: 'New Song: Twinkle Twinkle Little Star',
        img: 'https://images.pexels.com/photos/980859/pexels-photo-980859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'Twinkle Twinkle Little Star is a popular English lullaby written by Jane Taylor in 1806. It follows the same tune as the Alphabet Song and Baa, Baa, Black Sheep.',
    }],
    [{
        title: 'New Song: Star Wars (Main Title)',
        img: 'https://images.pexels.com/photos/6335954/pexels-photo-6335954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'The Star Wars Theme was written by famous soundtrack composer John Williams for the 1977 movie Star Wars: A New Hope.',
    }],
    [{
        title: 'New Song: Avengers Theme',
        img: 'https://images.pexels.com/photos/7768663/pexels-photo-7768663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'Alan Silvestri wrote the Avengers Theme in 2012, a theme that appears in many of Marvel\'s Avengers movies. ',
    }],
    [{
        title: 'New Song: Spongebob Theme',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/640px-SpongeBob_SquarePants_character.svg.png',
        details: 'The Spongebob Theme Song, loved by children and adults across America, was written by Stephen Hillenburg and Derek Drymon. It was originally released in 1999 during the first season of the Spongebob TV Show and has been shown at the beginning every episode since.',
    }]
]

// C2, D2, E2, B1, F2, G2, A2, A1, G1, B2, C3, E1, F1, C1, D1, D3, E3
// 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16

const C2 = 0;
const D2 = 1;
const E2 = 2;
const B1 = 3;
const F2 = 4;
const G2 = 5;
const A2 = 6;
const A1 = 7;
const G1 = 8;
const B2 = 9;
const C3 = 10;
const E1 = 11;
const F1 = 12;
const C1 = 13;
const D1 = 14;
const D3 = 15;
const E3 = 16;
const Cs1 = 17;
const Cb1 = 18;
const Ds1 = 19;
const Db1 = 20;
const Es1 = 21;
const Eb1 = 22;
const Fs1 = 23;
const Fb1 = 24;
const Gs1 = 25;
const Gb1 = 26;
const As1 = 27;
const Ab1 = 28;
const Bs1 = 29;
const Bb1 = 30;
const Cs2 = 31;
const Cb2 = 32;
const Ds2 = 33;
const Db2 = 34;
const Es2 = 35;
const Eb2 = 36;
const Fs2 = 37;
const Fb2 = 38;
const Gs2 = 39;
const Gb2 = 40;
const As2 = 41;
const Ab2 = 42;
const Bs2 = 43;
const Bb2 = 44;
const Cs3 = 45;
const Cb3 = 46;
const Ds3 = 47;
const Db3 = 48;
const Es3 = 49;
const Eb3 = 50;

// white majors
const cMaj = [C2, D2, E2, F2, G2, A2, B2, C3, B2, A2, G2, F2, E2, D2, C2];
const gMaj = [G1, A1, B1, C2, D2, E2, Fs2, G2, Fs2, E2, D2, C2, B1, A1, G1];
const fMaj = [F1, G1, A1, Bb1, C2, D2, E2, F2, E2, D2, C2, Bb1, A1, G1, F1];
const dMaj = [D2, E2, Fs2, G2, A2, B2, Cs3, D3, Cs3, B2, A2, G2, Fs2, E2, D2];
const aMaj = [A1, B1, Cs2, D2, E2, Fs2, Gs2, A2, Gs2, Fs2, E2, D2, Cs2, B1, A1];
const eMaj = [E2, Fs2, Gs2, A2, B2, Cs3, Ds3, E3, Ds3, Cs3, B2, A2, Gs2, Fs2, E2];
const bMaj = [B1, Cs2, Ds2, E2, Fs2, Gs2, As2, B2, As2, Gs2, Fs2, E2, Ds2, Cs2, B1];

// black majors
const bbMaj = [Bb1, C2, D2, Eb2, F2, G2, A2, Bb2, A2, G2, F2, Eb2, D2, C2, Bb1];
const ebMaj = [Eb2, F2, G2, Ab2, Bb2, C3, D3, Eb3, D3, C3, Bb2, Ab2, G2, F2, Eb2];
const abMaj = [Ab1, Bb1, C2, Db2, Eb2, F2, G2, Ab2, G2, F2, Eb2, Db2, C2, Bb1, Ab1];
const dbMaj = [Db2, Eb2, F2, Gb2, Ab2, Bb2, C3, Db3, C3, Bb2, Ab2, Gb2, F2, Eb2, Db2];
const gbMaj = [Gb1, Ab1, Bb1, Cb2, Db2, Eb2, F2, Gb2, F2, Eb2, Db2, Cb2, Bb1, Ab1, Gb1];

const scales = [cMaj, gMaj, fMaj, dMaj, aMaj, eMaj, bMaj, bbMaj, ebMaj, abMaj, dbMaj, gbMaj];
const scaleNames = ['C Major', 'G Major', 'F Major', 'D Major', 'A Major', 'E Major', 'B Major', 'B Flat Major', 'E Flat Major', 'A Flat Major', 'D Flat Major', 'G Flat Major'];

const scaleDetails = [
    [{
        title: 'New Scale: C Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'A scale is a series of notes that form a pattern, typically increasing and then decreasing.<br/>You are about to learn the C Major scale, which includes all the notes in the key of C Major.',
    }],
    [{
        title: 'New Scale: G Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'A scale is a series of notes that form a pattern, typically increasing and then decreasing.<br/>You are about to learn the G Major scale, which includes all the notes in the key of G Major.',
    }],
    [{
        title: 'New Scale: F Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'A scale is a series of notes that form a pattern, typically increasing and then decreasing.<br/>You are about to learn the F Major scale, which includes all the notes in the key of F Major.',
    }],
    [{
        title: 'New Scale: D Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'A scale is a series of notes that form a pattern, typically increasing and then decreasing.<br/>You are about to learn the D Major scale, which includes all the notes in the key of D Major.',
    }],
    [{
        title: 'New Scale: A Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'A scale is a series of notes that form a pattern, typically increasing and then decreasing.<br/>You are about to learn the A Major scale, which includes all the notes in the key of A Major.',
    }],
    [{
        title: 'New Scale: E Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'A scale is a series of notes that form a pattern, typically increasing and then decreasing.<br/>You are about to learn the E Major scale, which includes all the notes in the key of E Major.',
    }],
    [{
        title: 'New Scale: B Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'A scale is a series of notes that form a pattern, typically increasing and then decreasing.<br/>You are about to learn the B Major scale, which includes all the notes in the key of B Major.',
    }],
    [{
        title: 'New Scale: B Flat Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'You are about to learn the B Flat Major scale, which includes all the notes in the key of B Flat Major.',
    }],
    [{
        title: 'New Scale: E Flat Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'You are about to learn the E Flat Major scale, which includes all the notes in the key of E Flat Major.',
    }],
    [{
        title: 'New Scale: A Flat Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'You are about to learn the A Flat Major scale, which includes all the notes in the key of A Flat Major.',
    }],
    [{
        title: 'New Scale: D Flat Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'You are about to learn the D Flat Major scale, which includes all the notes in the key of D Flat Major.',
    }],
    [{
        title: 'New Scale: G Flat Major',
        img: '/public/assets/images/bass/bass_clef.png',
        details: 'You are about to learn the G Flat Major scale, which includes all the notes in the key of G Flat Major.',
    }],
]
module.exports = {
    songDetails,
    songNames,
    songs,
    bass_noteDetails,
    bass_levels,
    scales,
    scaleNames,
    scaleDetails
}