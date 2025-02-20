
import CrowdFunding from "assets/crowdFunding.png";
import Welcomint from "assets/welcomint.png";
import crypto from "assets/crypto.png"
import pillow from "assets/pillow.png"
import quicknotes from "assets/quicknotes.png"
import resumeBuilder from "assets/resumebuilder.png"
import scanner from "assets/0xscanner.png"
import snb from "assets/snb.png";
import web3safebridge from "assets/web3safebridge.png"
import almabetter from "assets/almabetter-ico.png"
import hackerrank from "assets/hackerrank.png"
import mangloreU from "assets/mangloreU.png"
import puboard from "assets/puBoard.png"
import puc from "assets/puc.png"
import sololearn from "assets/sololearn.png"
import udemy from "assets/udemy.png"
import css from "../assets/css.png"
import mongodb from "../assets/database-storage.png"
import webpack from "../assets/webpack.png"
import react from "../assets/react.png"
import nodejs from "../assets/nodejs.png"
import html from "../assets/html-5.png"
import js from '../assets/js.png'
import npm from  "../assets/npm.png"
import github from "../assets/github.png"
import redux from "../assets/redux.png"
import solidity from "../assets/solidity.png";
import figma from "../assets/figma.png"
import bootstrap from "../assets/bootstrap.png"
import hardhat from "../assets/hardhat.png"
import chainlink from "../assets/chainlink.png"
import ethersjs from "../assets/ethersjs.png";
import tailwind from "../assets/tailwindcss.png";
import alchemy from "../assets/alchemy.png";
import pinata from "../assets/pinata.png";
import opensea from "../assets/opensea.png";

export const Education = [
    {
        title: 'Gas Costs Optimization',
        image: udemy,
        link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-54c120e0-788f-4b78-96bc-a27ba64abd24.jpg'
    },
    {
        title: "Introduction to AWS",
        image: almabetter,
        link: 'https://certificates.almabetter.com/en/verify/13391667101924'
    },
    {
        title: 'Data Structures and Algorithms',
        image: almabetter,
        link: 'https://certificates.almabetter.com/en/verify/19542648205321'
    },
    {
        title: "Object Oriented Programming",
        image: almabetter,
        link: 'https://certificates.almabetter.com/en/verify/53494702117097'
    },
    {
        title: 'Introduction to Web',
        image: almabetter,
        link: 'https://certificates.almabetter.com/en/verify/05301540693571'
    },
    {
        title: 'Introduction to JavaScript',
        image: sololearn,
        link: 'https://www.sololearn.com/certificates/CC-2DTFHNTM'
    },
    {
        title: 'JavaScript Basic',
        image: hackerrank,
        link: 'https://www.hackerrank.com/certificates/6fa3fe6ff0e7'
    },
    {
        title: 'JavaScript Intermediate',
        image: sololearn,
        link: 'https://www.sololearn.com/certificates/CC-JO04DRBC'
    },
    {
        title: 'JavaScript Intermediate',
        image: hackerrank,
        link: 'https://www.hackerrank.com/certificates/fd0addaf8b68'
    },
    {
        title: 'React Basic',
        image: hackerrank,
        link: 'https://www.hackerrank.com/certificates/c136120bf879'
    },
    {
        title: 'Java Basic',
        image: hackerrank,
        link: 'https://www.hackerrank.com/certificates/902c006d1243'
    },
];

export const Education_NFTs = [
    {
        image: 'https://authoring.metacrafters.io/assets/cms/Group_483385_e6b65921cf.png',
        link: 'https://solscan.io/account/2NVDMCk1AoZF7qNW97Eo6dBNSvNF8nVWwGA792X1mDa5'
    },
    {
        image: 'https://authoring.metacrafters.io/assets/cms/Group_483375_f1b416ffb4.png',
        link: 'https://solscan.io/account/2NVDMCk1AoZF7qNW97Eo6dBNSvNF8nVWwGA792X1mDa5'
    }
];

export const Projects = [
    {
        id: 11,
        title: 'Stake N Bake',
        description: "A complete POC for a live cross chain farming game, built using Unity & utilized Thirdweb's SDK for transaction and Account abstraction.",
        image: snb,
        link: 'https://snbunity.vercel.app/',
        github: 'https://github.com/bakestake/snbunity'
    },
    {
        id: 10,
        title: 'Welcomint',
        description: "A NFT marketplace offering users diverse functionalities starting from creating, listing for sale, buying to canceling NFTs and more.",
        image: Welcomint,
        link: 'https://welcomint.vercel.app/',
        github: 'https://github.com/vikas-viki/welcomint'
    },
    {
        id: 9,
        title: 'Web3 Safe Bridge',
        description: "Web3 powered escrow platform, allows users to experience hassle free escrow transactions ensuring security and transparency along with 0% fee.",
        image: web3safebridge,
        link: 'https://web3-escrow.netlify.app/',
        github: 'https://github.com/vikas-viki/Escrow2.0'
    },
    {
        id: 8,
        title: '0xScanner',
        description: "Scan your blockchain address on multiple chains for balance, transactions, ERC20 tokens, NFTs & more, with standardized results.",
        image: scanner,
        link: 'https://0xscanner.on.fleek.co/',
        github: 'https://github.com/vikas-viki/0xScanner'
    },
    {
        id: 7,
        title: 'Crowd Funding',
        description: "A blockchain-based crowdfunding platform that enables anyone to create and manage fundraising campaigns with ease, security and efficiency.",
        image: CrowdFunding,
        link: 'https://crowd-funding-fyr8.onrender.com/',
        github: 'https://github.com/vikas-viki/Crowd-Funding-client'
    },
    {
        id: 6,
        title: "Pillow",
        description: "Decentralized & automated approach to real estate transactions, eliminating intermediaries, reducing costs, increasing transparency & efficiency.",
        image: pillow,
        link: '',
        github: 'https://github.com/vikas-viki/Pillow'
    },
    {
        id: 5,
        title: "Crypto Tracer",
        description: "The dashboard provides real-time price data for over 200 cryptocurrencies, making it a valuable resource for investors seeking to stay informed.",
        image: crypto,
        link: 'https://tracecrypto.netlify.app/',
        github: 'https://github.com/vikas-viki/crypto-tracer-frontend'
    },
    {
        id: 4,
        title: "Resume Builder",
        description: "The team-developed resume builder provides basic functionality for creating a professional resume with two pre-defined templates for easy use.",
        image: resumeBuilder,
        link: 'https://resume-builder2022.netlify.app/',
        github: 'https://github.com/vikas-viki/Resume-Builder'
    },
    /*
    {
        id: 3,
        title: "News App",
        description: "The News API-powered app offers real-time updates across seven categories, providing easy access to a wide range of news articles from top sources.",
        image: news,
        link: '',
        github: 'https://github.com/vikas-viki/Get-my-news'
    },
    */
    {
        id: 2,
        title: "Note Maker",
        description: "The basic note maker enables users to perform essential CRUD operations, helping them take quick notes and manage personal notes efficiently.",
        image: quicknotes,
        link: 'https://takeshortnotes.netlify.app/',
        github: 'https://github.com/vikas-viki/iNotebook-client'
    },
    /*
    {
        id: 1,
        title: "Book My Show",
        description: "The full-stack app showcases API requests, data retrieval, user feedback, and essential components of full-stack development.",
        image: BmyS,
        link: 'https://bookmyshow-almabetter2022.netlify.app/',
        github: 'https://github.com/vikas-viki/BookMyShow-frontend'
    },
    */
];

export const Skills = [
        
    {
        name: 'Chainlink Oracle',
        icon : chainlink
    },
    {
        name: 'OpenSea SDK',
        icon : opensea
    },
    {
        name: 'Pinata SDK',
        icon : pinata
    },
    {
        name: 'Alchemy SDK',
        icon : alchemy
    },
    {
        name: "Ethers JS",
        icon: ethersjs
    },
    {
        name: "Solidity",
        icon: solidity
    },
    {
        name: "Hardhat",
        icon: hardhat
    },        
    {
        name: "NPM",
        icon: npm
    },
    {
        name: "GitHub",
        icon: github
    },
    ,
    {
        name: "Figma",
        icon: figma
    },
    {
        name: "HTML",
        icon: html
    },
    {
        name: "CSS",
        icon: css
    },
    {
        name: "JavaScript",
        icon: js
    },
    {
        name: "Reactjs",
        icon: react
    },
    {
        name: "Tailwind css",
        icon: tailwind
    },
    {
        name: "Bootstrap",
        icon: bootstrap
    },
    {
        name: "Redux",
        icon: redux
    },
    {
        name: "MongoDB",
        icon: mongodb
    },
    {
        name: "Webpack",
        icon: webpack
    },
    {
        name: "Node js",
        icon: nodejs
    },
];