export let soalMath = [
    {
        question: '\\sin(-90^\\circ) = ...',
        answer: '-1',
        explain: '\\text{sin is an odd function, that }\\allowbreak \\text{means } \\sin(-90) = -\\sin(90)',
        option: 
        ['-1',
         '1',
         '\\frac{1}{2}\\sqrt{2}',
         '0'
        ]
    },
    {
        question: '\\cos(-45^\\circ)=...',
        answer: '\\frac{1}{2}\\sqrt{2}', 
        explain: '\\text{cos is an even function, that }\\allowbreak \\text{means } \\cos(-45) = \\cos(45)',
        option: 
        ['\\frac{-1}{2}\\sqrt{2}',
         '\\frac{1}{2}\\sqrt{2}',
         '\\frac{1}{2}',
         '\\frac{-1}{2}'        
        ]
    },
    {
        question: 'sin(\\frac{\\pi}{2}-90^\\circ)=...',
        answer: '0',
        explain: `\\pi=180^\\circ \\newline 
                \\sin(\\frac{\\pi}{2}-90^\\circ) = \\sin(90^\\circ-90^\\circ) \\newline
                \\sin(0^\\circ) = 0 \\newline 
                \\text{ } \\newline
                \\text{or we can use this equation} \\newline 
                \\text{ } \\newline
                \\sin(\\frac{\\pi}{2}-90^\\circ)=\\cos(90^\\circ) \\newline
                \\cos(90^\\circ)=0`,
        option: 
        ['0',
         '\\frac{1}{2}\\sqrt{3}',
         '\\frac{1}{2}\\sqrt{2}',
         '\\frac{1}{2}'        
        ]
    },
    {
        question: 'cos(\\frac{\\pi}{2}-45^\\circ)=...',
        answer: '\\frac{1}{2}\\sqrt{2}',
        explain: `\\pi=180^\\circ \\newline 
                \\cos(\\frac{\\pi}{2}-45^\\circ) = \\cos(90^\\circ-45^\\circ) \\newline
                \\cos(45^\\circ) = \\frac{1}{2}\\sqrt{2} \\newline 
                \\text{ } \\newline
                \\text{or we can use this equation} \\newline 
                \\text{ } \\newline
                \\cos(\\frac{\\pi}{2}-45^\\circ)=\\sin(45^\\circ) \\newline
                \\sin(45^\\circ)=\\frac{1}{2}\\sqrt{2}`,
        option: 
        ['\\frac{1}{2}\\sqrt{3}',
         '\\frac{1}{2}\\sqrt{2}',
         '\\frac{1}{2}',
         '0'        
        ]
    },
    {
        question: 'cosec(30^\\circ)=...',
        answer: '2',
        explain: `\\cosec(30^\\circ) = \\frac{1}{sin(30^\\circ)}, \\sin(30^\\circ) = \\frac{1}{2} \\newline 
                \\cosec(30^\\circ) = \\frac{1}{\\frac{1}{2}} = \\frac{1}{1}\\times\\frac{2}{1} \\newline
                \\cosec(30^\\circ) = 2`,
        option: 
        ['\\frac{1}{2}\\sqrt{3}',
         '\\frac{1}{2}',
         '2',
         '\\frac{1}{2}\\sqrt{2}'        
        ]
    },
    {
        question: '\\lim_{x\\to0} \\frac{sin(x)}{x}=...',
        answer: '1',
        explain: `\\text{Use L\'Hôpital\'s rule}\\newline 
                \\lim_{x\\toc} \\frac{f\'(x)}{g\'(x)} = lim_{x\\to0} \\frac{\\cos(x)}{1} \\newline
                \\cos(0) = 1`,
        option: 
        ['Undefined',
         '\\frac{1}{2}',
         '2',
         '1'        
        ]
    },
    {
        question: '\\lim_{x\\to0}x^2sin(\\frac{1}{x})=...',
        answer: '0',
        explain: `\\text{Use Squeeze Theorem} \\newline
                \\text{NOTE: use squeeze theorem only if you can\'t} \\newline
                \\text{get the resut by using L\'Hopital\'s rule}`,
        option: 
        ['Undefined',
         '\\frac{1}{2}',
         '0',
         '1'        
        ]
    },
    {
        question: 'f(x)=\\ln(x^2+2), f\'(x)=...',
        answer: '\\frac{2x}{x^2+2}',
        explain: '\\text{sin is an odd function, that }\\allowbreak \\text{means } \\sin(-90) = -\\sin(90)',
        option: 
        ['\\frac{2x}{x^2+2}',
         '\\frac{1}{x^2+2}',
         '\\log_x(x^2+2)',
         '\\frac{1}{\\ln{x^2+2}}'       
        ]
    },
    {
        // jawaban belum diganti
        question: 'f(x)=\\log_a(x), f\'(x)=...',
        answer: '\\frac{2x}{x^2+2}',
        explain: '\\text{sin is an odd function, that }\\allowbreak \\text{means } \\sin(-90) = -\\sin(90)',
        option: 
        ['\\frac{2x}{x^2+2}',
         '\\frac{1}{x^2+2}',
         '\\log_x(x^2+2)',
         '\\frac{1}{\\ln{x^2+2}}'       
        ]
    },
    {
        // jawaban belum diganti
        question: 'y=\\arcsin{(u)}, y\'=...',
        answer: '\\frac{2x}{x^2+2}',
        explain: '\\text{sin is an odd function, that }\\allowbreak \\text{means } \\sin(-90) = -\\sin(90)',
        option: 
        ['\\frac{2x}{x^2+2}',
         '\\frac{1}{x^2+2}',
         '\\log_x(x^2+2)',
         '\\frac{1}{\\ln{x^2+2}}'       
        ]
    },
    {
        // jawaban belum diganti
        question: 'y=\\cos^{-1}{(u)}, y\'=...',
        answer: '\\frac{2x}{x^2+2}',
        explain: '\\text{sin is an odd function, that }\\allowbreak \\text{means } \\sin(-90) = -\\sin(90)',
        option: 
        ['\\frac{2x}{x^2+2}',
         '\\frac{1}{x^2+2}',
         '\\log_x(x^2+2)',
         '\\frac{1}{\\ln{x^2+2}}'       
        ]
    },
]

export default soalMath;