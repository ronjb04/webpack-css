/**
 * Created by matt on 2/19/17.
 */
import Footer from './footer';
import { pageInit } from './index';

const About = () => `
  <section class="about">
    <h1 class="header">About</h1>
    <p class="text">Some dummy texzt here</p>
    ${Footer()}
  </section>
`;

pageInit(About);