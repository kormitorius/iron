import {h, render} from 'https://unpkg.com/preact@latest?module';
import {useState} from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from "https://unpkg.com/htm@latest/dist/htm.module.js?module";

const html = htm.bind(h);

const setup = {
    render,
    useState,
    html,
    h
}

export default setup;