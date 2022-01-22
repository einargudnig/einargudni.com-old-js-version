import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function LatexTemplate() {
  const images = `
  %%% LaTex code for images
  %%% DOCUMENT PREAMBLE %%%
  \\documentclass[12pt]{report}
  \\usepackage[english]{babel}
  \\usepackage{url}
  \\usepackage[utf8x]{inputenc}
  \\usepackage[T1]{fontenc}
  \\usepackage{amsmath}
  \\usepackage{graphicx, wrapfig, subcaption, setspace, booktabs}
  \\graphicspath{{images/}}
  \\usepackage{parskip}
  \\usepackage{caption}
  \\usepackage{fancyhdr}
  \\usepackage{vmargin}
  \\setmarginsrb{3 cm}{2.5 cm}{3 cm}{2.5 cm}{1 cm}{1.5 cm}{1 cm}{1.5 cm}
  
  \\pagestyle{fancy}
  \\fancyhf{}
  
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  \\begin{document}
  
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  \\begin{titlepage}
    \\centering
      \\vspace*{0.5 cm}
      
      % First Section - containing school information
      \\begin{center}    
          \\textsc{\\Large   University of Iceland}\\[0.5 cm] % University Name
          \\textsc{  Computer Science}\\[2.0 cm] % Department
      \\end{center}
    
    % Next section - containing the title of the project
    \\textsc{\\Large Introduction to Data Mining - REI502M  }\\[0.5 cm] % Course Name + Code
    
    % Main Section - containing the title of the project
    \\rule{\\linewidth}{0.2 mm} \\[0.4 cm] % Horizontal Line
    { \\huge \\bfseries Project I}\\ % Title
    \\rule{\\linewidth}{0.2 mm} \\[1.5 cm] % Horizontal Line
    
    % Section that contains teacher on left side
    % and Authors on right side
    \\begin{minipage}{0.4\\textwidth}
      \\begin{flushleft} \\large
        \\emph{Teacher:}\\\
        Great Teacher\\\
  
        \\end{flushleft}
        \\end{minipage}~
        \\begin{minipage}{0.4\\textwidth}
              
        \\begin{flushright} \\large
        \\emph{Authors:} \\
        Einar Guðni Guðjónsson\\
        Guest Author
      \\end{flushright}
             
    \\end{minipage}\\[2 cm]
    
    % Section that contains the university logo, 
    % note you have to add the logo to overleaf so the image will render.
    \\includegraphics[scale = 0.5]{pallas.jpg} % University Logo
      
  \\end{titlepage}
  
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  \\thispagestyle{empty}
  \\tableofcontents
  \\listoffigures
  
  \\newpage
  
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  \\section{Section I}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Praesent dignissim, purus eu sagittis dictum, ipsum mauris malesuada nisi, nec rhoncus massa purus vel libero. 
      Donec at justo neque. Sed in posuere mauris, in blandit lorem. Fusce mauris sapien, condimentum suscipit nisi vitae, elementum tincidunt sem. 
      Sed luctus justo eu hendrerit iaculis. Maecenas aliquam, turpis ac consectetur blandit, metus ipsum egestas lectus, at tincidunt ante neque in lectus. 
      Quisque leo tortor, sagittis et ligula ac, feugiat varius nunc. Proin accumsan viverra posuere. 
      Vivamus nec ultrices odio, eu rhoncus arcu. Nam aliquam est hendrerit sapien aliquet, quis viverra arcu egestas. 
      Mauris et mi quis massa pulvinar ornare. Maecenas tempus risus non congue porta. Curabitur consequat ultrices nisl.
      
      \\begin{center}
          \\includegraphics{photo1.PNG}
      \\end{center}
      
      
      
  \\section{Section II}
      Vestibulum suscipit ante non mi condimentum lacinia. In hac habitasse platea dictumst. Nullam hendrerit ultrices tortor, nec dignissim dolor aliquet ac. Sed molestie pretium augue, a tincidunt lorem imperdiet euismod. Phasellus tincidunt arcu nec tortor viverra, at blandit nisi maximus. 
      
      Nullam ligula dolor, fringilla et venenatis non, efficitur id lectus. Cras mattis convallis lacus, nec fringilla risus venenatis vel. Integer laoreet finibus diam, non dapibus lorem pulvinar quis. Fusce eget tristique felis. Curabitur fermentum tristique ligula, vel cursus purus euismod quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      
      
      
      \\begin{wrapfigure}{r}{0.5\\textwidth}       
      %this figure will be at the right
          \\centering
          \\includegraphics[width=0.40\\textwidth]{photo2.PNG}
          \\caption{  Photo 2 }
      \\end{wrapfigure}
      
      Donec sed nulla laoreet massa vestibulum finibus ac eget metus. 
      Proin nisl purus, pellentesque vitae enim ac, consectetur rutrum leo. In commodo fermentum elementum. 
      Donec consectetur dapibus nulla a ullamcorper. Integer cursus suscipit mi a commodo. 
      Morbi pellentesque tortor ac diam sollicitudin gravida vitae nec magna. 
      Praesent sapien dui, lobortis eu tempor ut, ultrices vel est. Ut ullamcorper ante vel finibus maximus. 
      Suspendisse aliquet, eros nec facilisis commodo, lorem nulla convallis mi, sit amet posuere diam leo sed odio. 
      Fusce iaculis sapien varius sem commodo auctor. Proin finibus nisi at arcu auctor, at auctor justo pellentesque. 
      Nullam eget ultricies ex, sit amet mollis felis.
      
      Vestibulum viverra eros sed quam aliquam dapibus. Nunc lobortis tincidunt arcu id convallis. 
      Integer in suscipit magna, eget facilisis metus. Pellentesque ornare sed lacus quis vestibulum. 
      Nam consequat vitae elit at tempor. Cras molestie bibendum maximus. Fusce efficitur quam a orci pellentesque, id egestas sapien consequat. 
      Curabitur id consequat risus. Maecenas et lectus ligula. Nullam non augue nunc. 
      Mauris id nisi pellentesque, auctor leo ac, aliquam dolor. Donec semper metus ac urna hendrerit, et interdum dolor volutpat.
      
      \\begin{figure}[!h]
          \\centering
          \\begin{minipage}{0.45\\textwidth}
              \\centering
              \\includegraphics[width=0.9\\textwidth]{photo3PNG} % first figure itself
              \\caption{Photo 3}
          \\end{minipage}\\hfill
          \\begin{minipage}{0.45\\textwidth}
              \\centering
              \\includegraphics[width=0.9\\textwidth]{photo4.PNG} % second figure itself
              \\caption{Photo 4}
          \\end{minipage}
      \\end{figure}
      
  \\section{Section III}
      Cras accumsan rhoncus risus, vitae gravida nisi bibendum nec. Nunc non arcu vulputate lorem dignissim consequat. 
      Aenean vitae orci diam. In elementum lectus vel augue feugiat, sit amet consequat sem pellentesque. 
      Morbi viverra mi eu ante rhoncus, luctus euismod purus viverra. Etiam feugiat felis at dolor aliquam aliquam. 
      Suspendisse gravida porta massa ultrices dapibus. Quisque odio velit, consectetur ornare ligula sed, pretium laoreet orci. 
      Donec ut placerat risus, placerat fringilla ex. In at ante tellus. Donec blandit suscipit convallis.
      
      \\begin{wrapfigure}{l}{0.5\\textwidth}       %this figure will be at the right
          \\centering
          \\includegraphics[width=0.40\\textwidth]{photo5.PNG}
          \\caption{  Photo 5. }
      \\end{wrapfigure}
      
      Donec at iaculis enim. Suspendisse ligula massa, pulvinar et sapien sed, lobortis faucibus diam. 
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sagittis sapien felis, ac tincidunt ex ultricies eu. 
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
      Maecenas imperdiet lacinia mi, in vestibulum est dictum id. 
      Fusce aliquet, nisl ac auctor consequat, lorem nisl lacinia leo, a porta dolor lorem et mauris. 
      Nam quis rutrum velit, nec blandit ante.
      
  \\end{document}
  
  `

  const preamble = `
  %%% LaTex code for preamble
  \\documentclass[fontsize=14pt,a4paper]{scrartcl}
  \\usepackage{syntax}
  \\usepackage{fullpage}
  \\usepackage{amsmath, amssymb, amsthm}
  \\usepackage{hyperref}
  \\usepackage[utf8]{inputenc}
  \\usepackage[icelandic]{babel}
  \\usepackage[T1]{fontenc}
  \\usepackage{enumerate}
  \\usepackage{graphicx}
  \\usepackage{dsfont}
  \\usepackage{listings}
  \\usepackage{minted}
  `
  const title = `
  %%% LaTex code for title
    \\begin{document}
    \\title{REI502M\\Introduction to Data Mining\\Homework I}
    \\author{Einar Guðni Guðjónsson\\egg18@hi.is}
    \\maketitle
    \\sloppy
    %\\tableofcontents
  `

  const smallTemplate = `
  %%% LaTex code for small template
  % Vid byrjum a formalanum, 
  % athugadu ad thad ma alveg setja fleiri pakka
  
  \\documentclass[fontsize=14pt,a4paper]{scrartcl}
  \\usepackage{syntax}
  \\usepackage{fullpage}
  \\usepackage{amsmath, amssymb, amsthm}
  \\usepackage{hyperref}
  \\usepackage[utf8]{inputenc}
  \\usepackage[icelandic]{babel}
  \\usepackage[T1]{fontenc}
  \\usepackage{syntax}
  \\usepackage{enumerate}
  \\usepackage{graphicx}
  \\usepackage{dsfont}
  \\usepackage{listings}
  \\usepackage{minted}
  
  % Herna ad nedan gerum vid titill og hofund
  
  \\begin{document}
  \\title{Áfanganúmer\\Nafn á áfanga\\Heimdaæmi I}
  \\author{Einar Guðni Guðjónsson\\egg18@hi.is}
  \\maketitle
  \\sloppy
  
  % Herna ad nedan eru daemi med texta sem er einfalt ad breyta.
  
  \\section{Homework}
  
  \\begin{enumerate}
  
  \\item \\
  Spurning 1\\
  
  \\begin{enumerate}
  
      \\item \\textit{Hvaða dagur er í dag?}\\
    \\textbf{\\underline{Svar:}}\\
    14. September
  
  
      \\item \\textit{Hvað er klukkan?}\\
    \\textbf{\\underline{Svar:}}\\
    07:03
  
      \\item \\textit{Hvenær áttu afmæli?}\\
    \\textbf{\\underline{Svar:}}\\
    24. Mars
  
  
  \\end{enumerate}
  
  \\item \\
  Spurning 2.\\
  
  \\begin{enumerate}
  
     \\item \\textit{Hvað fékkstu þér í morgunmat?}\\
    \\textbf{\\underline{Svar:}}\\
    Egg og hafragraut.
      
      \\item \\textit{Hvernig er veðrið úti?}\\
    \\textbf{\\underline{Svar:}}\\
    Ekki gott, haust rigning.
  
  \\end{enumerate}
  
  \\end{enumerate}
  
  \\end{document}
  `

  const bigPreamble = `
  %%% LaTex code for preamble big template
  %%% DOCUMENT PREAMBLE %%%
  \\documentclass[12pt]{report}
  \\usepackage[english]{babel}
  \\usepackage{url}
  \\usepackage[utf8x]{inputenc}
  \\usepackage[T1]{fontenc}
  \\usepackage{amsmath}
  \\usepackage{graphicx, wrapfig, subcaption, setspace, booktabs}
  \\graphicspath{{images/}}
  \\usepackage{parskip}
  \\usepackage{caption}
  \\usepackage{fancyhdr}
  \\usepackage{vmargin}
  \\setmarginsrb{3 cm}{2.5 cm}{3 cm}{2.5 cm}{1 cm}{1.5 cm}{1 cm}{1.5 cm}

  \\pagestyle{fancy}
  \\fancyhf{}
  `

  const titleAndPreamble = `
  %%% LaTex code for preamble and title big template
  %%% DOCUMENT PREAMBLE %%%
  \\documentclass[12pt]{report}
  \\usepackage[english]{babel}
  \\usepackage{url}
  \\usepackage[utf8x]{inputenc}
  \\usepackage[T1]{fontenc}
  \\usepackage{amsmath}
  \\usepackage{graphicx, wrapfig, subcaption, setspace, booktabs}
  \\graphicspath{{images/}}
  \\usepackage{parskip}
  \\usepackage{caption}
  \\usepackage{fancyhdr}
  \\usepackage{vmargin}
  \\setmarginsrb{3 cm}{2.5 cm}{3 cm}{2.5 cm}{1 cm}{1.5 cm}{1 cm}{1.5 cm}
  \\pagestyle{fancy}
  \\fancyhf{}
  
  %%% END DOCUMENT PREAMBLE %%%
  
  \\begin{document}
  
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  \\begin{titlepage}
    \\centering
      \\vspace*{0.5 cm}
    
    % First Section - containig school information
      \\begin{center}    
          \\textsc{\\Large   University of Iceland}\\[0.5 cm] % University Name
          \\textsc{  Computer Science}\\[2.0 cm] % Department
      \\end{center}
    
    % Next section - containing course information
    \\textsc{\\Large Introduction to Data Mining - REI502M  }\\\\[0.5 cm] % Course Name + Code
    
    % Main section - containing the title of the project
    \\rule{\\linewidth}{0.2 mm} \\[0.4 cm] % Horizontal Line
    { \\huge \\bfseries Project II}\\ % Title
    \\rule{\\linewidth}{0.2 mm} \\[1.5 cm] % Horizontal Line
    
    % Section that contains teacher on left side
    % and Authors on right side
    \\begin{minipage}{0.4\\textwidth}
      \\begin{flushleft} \\large
        \\emph{Teacher:}\\
        Great Teacher\\
  
        \\end{flushleft}
        \\end{minipage}~
        \\begin{minipage}{0.4\\textwidth}
              
        \\begin{flushright} \\large
        \\emph{Authors:} \\
        Einar Guðni Guðjónsson\\
        Guest Author
      \\end{flushright}
             
    \\end{minipage}\\[2 cm]
    
    % Section that contains the university logo, note you have to add the logo to overleaf so the image will render.
    \\includegraphics[scale = 0.5]{pallas.jpg} % University Logo
      
  \\end{titlepage}
  
  \\end{document}
  `

  const bigTemplate = `
  %%% LaTex code for big template
  %%% DOCUMENT PREAMBLE %%%
  \\documentclass[12pt]{report}
  \\usepackage[english]{babel}
  \\usepackage{url}
  \\usepackage[utf8x]{inputenc}
  \\usepackage[T1]{fontenc}
  \\usepackage{amsmath}
  \\usepackage{graphicx, wrapfig, subcaption, setspace, booktabs}
  \\graphicspath{{images/}}
  \\usepackage{parskip}
  \\usepackage{caption}
  \\usepackage{fancyhdr}
  \\usepackage{vmargin}
  \\setmarginsrb{3 cm}{2.5 cm}{3 cm}{2.5 cm}{1 cm}{1.5 cm}{1 cm}{1.5 cm}
  \\pagestyle{fancy}
  \\fancyhf{}
  
  
  %%% END DOCUMENT PREAMBLE %%%
  
  \\begin{document}
  
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  \\begin{titlepage}
    \\centering
      \\vspace*{0.5 cm}
      \\begin{center}    
          \\textsc{\\Large   University of Iceland}\\[0.5 cm] % University Name
          \\textsc{  Computer Science}\\[2.0 cm] % Department
      \\end{center}
    \\textsc{\\Large Introduction to Data Mining - REI502M  }\\[0.5 cm] % Course Name + Code
    \\rule{\\linewidth}{0.2 mm} \\[0.4 cm] % Horizontal Line
    { \\huge \\bfseries Project I}\\ % Title
    \\rule{\\linewidth}{0.2 mm} \\[1.5 cm] % Horizontal Line
    
    % Section that contains teacher on left side
    % and Authors on right side
    \\begin{minipage}{0.4\\textwidth}
      \\begin{flushleft} \\large
        \\emph{Teacher:}\\
        Great Teacher\\
  
        \\end{flushleft}
        \\end{minipage}~
        \\begin{minipage}{0.4\\textwidth}
              
        \\begin{flushright} \\large
        \\emph{Authors:} \\
        Einar Guðni Guðjónsson\\
        Guest Author
      \\end{flushright}
             
    \\end{minipage}\\[2 cm]
    
    \\includegraphics[scale = 0.5]{pallas.jpg} % University Logo
      
  \\end{titlepage}
  
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  \\thispagestyle{empty}
  \\tableofcontents
  \\listoffigures
  
  \\newpage
  
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  \\section{Section 1}
    
      
  \\section{Section 2}
    
      
  \\section{Section 3}
     
      
  \\section{Section 4}
      
      
  \\section{Section 5}
  
  \\end{document}
  `

  return (
    <>
      <PageSEO
        title={`Latex template - ${siteMetadata.author}`}
        description={`Latex code for my book`}
        url={`${siteMetadata.siteUrl}/latex-template`}
      />
      <div>
        <div className="mb-5">
          <h2 className="my-2 font-semibold text-xl">LaTeX template</h2>
          <span>I didn't want to flood the book with too much code.</span>
          <br />
          <span>
            Here below you can see the bigger examples of latex code. You can easily copy/paste this
            code to overleaf.
          </span>
          <br />
          <span>This page is not very mobile friendly!</span>
        </div>

        <div className="my-3">
          <span>
            Latex code for the image template in chapter 3 beginning on{' '}
            <span className="text-primary-color dark:text-primary-color-dark">page 20</span>{' '}
          </span>
          <br />
          <span className="mt-3 text-xs">
            Remember that you have to import photos to overleaf for them to be visible!
          </span>
          <SyntaxHighlighter language="latex" style={monokai}>
            {images}
          </SyntaxHighlighter>
        </div>
        <div className="my-3">
          <h3 className="text-lg font-semibold">
            This code is from chapter 4 -{' '}
            <span className="text-primary-color dark:text-primary-color-dark">
              smaller template
            </span>
          </h3>
        </div>
        <div className="my-3">
          <span>
            Latex code for the preamble for the smaller template on{' '}
            <span className="text-primary-color dark:text-primary-color-dark">page 26</span>
          </span>
          <SyntaxHighlighter language="latex" style={monokai}>
            {preamble}
          </SyntaxHighlighter>
        </div>
        <div className="my-3">
          <span>
            Here we have the title for the smaller template, on{' '}
            <span className="text-primary-color dark:text-primary-color-dark">page 28</span>
          </span>
          <SyntaxHighlighter language="latex" style={monokai}>
            {title}
          </SyntaxHighlighter>
        </div>
        <div className="my-3">
          <span>
            Here we have the smaller template, on{' '}
            <span className="text-primary-color dark:text-primary-color-dark">page 30</span>
          </span>
          <SyntaxHighlighter language="latex" style={monokai}>
            {smallTemplate}
          </SyntaxHighlighter>
        </div>
        <div className="my-3">
          <h3>
            This code is from chapter 5 -{' '}
            <span className="text-primary-color dark:text-primary-color-dark">Bigger template</span>
          </h3>
        </div>
        <div className="my-3">
          <span>
            Preamble for the bigger template on{' '}
            <span className="text-primary-color dark:text-primary-color-dark">page 35</span>
          </span>
          <SyntaxHighlighter language="latex" style={monokai}>
            {bigPreamble}
          </SyntaxHighlighter>
        </div>
        <div className="my-3">
          <span>
            Preamble and title page for the bigger template on{' '}
            <span className="text-primary-color dark:text-primary-color-dark">page 38</span>
          </span>
          <SyntaxHighlighter language="latex" style={monokai}>
            {titleAndPreamble}
          </SyntaxHighlighter>
        </div>
        <div className="my-3">
          <span>
            Here we have the bigger template on{' '}
            <span className="text-primary-color dark:text-primary-color-dark">page 45</span>. This
            is the whole template.
          </span>
          <SyntaxHighlighter language="latex" style={monokai}>
            {bigTemplate}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  )
}
