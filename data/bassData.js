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
const bass_all = bass_l26.concat(bass_r3);
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
        img: '',
        details: 'details about BF',
    }],
    [{
        title: 'New Song: Jaws Theme',
        img: '',
        details: 'details about JT',
    }],
    [{
        title: 'New Song: Twinkle Twinkle Little Star',
        img: '',
        details: 'details about TTLS',
    }],
    [{
        title: 'New Song: Star Wars Theme',
        img: '',
        details: 'details about SWT',
    }],
    [{
        title: 'New Song: Avengers Theme',
        img: '',
        details: 'details about AT',
    }],
    [{
        title: 'New Song: Spongebob Theme',
        img: '',
        details: 'details about ST',
    }]
]


module.exports = {
    songDetails,
    songNames,
    songs,
    bass_noteDetails,
    bass_levels
}