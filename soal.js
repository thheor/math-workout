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
        explain: `\\pi=180^\\circ \\allowbreak 
                \\sin(\\frac{\\pi}{2}-90^\\circ) = \\sin(90^\\circ-90^\\circ) \\allowbreak
                \\sin(0^\\circ) = 0 \\allowbreak
                \\text{or we can use this equation} \\allowbreak
                \\sin(\\frac{\\pi}{2}-90^\\circ)=\\cos(90^\\circ) \\allowbreak
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
        explain: '\\text{sin is an odd function, that }\\allowbreak \\text{means } \\sin(-90) = -\\sin(90)',
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
        explain: '\\text{sin is an odd function, that }\\allowbreak \\text{means } \\sin(-90) = -\\sin(90)',
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
        explain: '\\text{sin is an odd function, that }\\allowbreak \\text{means } \\sin(-90) = -\\sin(90)',
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
        explain: '\\text{sin is an odd function, that }\\allowbreak \\text{means } \\sin(-90) = -\\sin(90)',
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