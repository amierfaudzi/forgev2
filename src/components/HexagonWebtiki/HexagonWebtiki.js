import React from 'react';
import './HexagonWebtiki.scss';

// Code from https://github.com/web-tiki/responsive-grid-of-hexagons

export default function HexagonWebtiki({handleSkill, skill}) {

    return (
        <div>
            <ul id="hexGrid">
            <li class="hex">
                <div class="hexIn">
                <a class="hexLink" href="#">
                    <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                    <h1>This is a title</h1>
                    <p>Some sample text about the article this hexagon leads to</p>
                </a>
                </div>
            </li>
            { skill ? skill.map(data => {
                return (
                    <li class="hex">
                    <div class="hexIn">
                    <a class="hexLink" href="#">
                        <img src={data.thumbnailUrl} alt=""/>
                        <h1>{data.skillName}</h1>
                        <p>{data.skillDescription}</p>
                    </a>
                    </div>
                </li>
                )
            }) : ""}

        {/* <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li>
        <li class="hex">
            <div class="hexIn">
            <a class="hexLink" href="#">
                <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a>
            </div>
        </li> */}
    </ul>
        </div>
    )
}
