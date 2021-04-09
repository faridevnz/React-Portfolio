import Markdown from 'markdown-to-jsx';
import { TextComponent } from '../../components/TextComponent/TextComponent';
import { H1Component } from '../../components/Markdown/H1/H1Component';
import './Article.scss';
import { H2Component } from '../../components/Markdown/H2/H2Component';
import { Code } from '../../components/Markdown/Code/Code';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';

const markdown = `

<H1>This is the article title very very 
very long long long long long</H1>
<br/>
<H2>this in the subtitle</H2>

[this is a link]('')

**This** is a list:

* ciao
- cao

<CodeM>
String a;
</CodeM>

`;

const options = {
    overrides: {
        Text : {
            component: TextComponent,
            props: { data: 'ciao' }
        },
        H1: {
            component: H1Component
        },
        H2: {
            component: H2Component
        },
        CodeM: {
            component: Code
        }
    }
}

export const Article = () => {
    const [theme] = useContext(ThemeContext);
    // render
    return(
        <div className={`article article--${theme.theme}`}>
            <Markdown options={options}>
                {markdown}
            </Markdown>
        </div>
    );
}