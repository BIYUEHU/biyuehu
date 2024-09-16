import { Component, OnInit } from '@angular/core';
import config from '../config';
import { RouterOutlet } from '@angular/router';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div id="particles-js"></div>
  <div class="bg" [style]="'background-image: url(' + background + ');'"></div>
  <div class="card">
    <img
      [src]="avatar"
      alt="avatar"
      style="border-radius: 100%;"
      width="200"
      height="200"
    />
    <div style="font-size: 30px;weight: bold;">{{ name }}</div>
    <div style="font-size: 19px;">{{ description }}</div>
    <div style="font-size: 21px;">{{ content }}</div>
    <div class="button_group">
    @for (item of button; track item.text) {
      <a
        [href]="item.link"
        [target]="item.blank ? '_blank' : '_self'"
        [class]="item.class ?? 'button'"
        >{{ item.text }}</a
      >
    }
    </div>
  </div>`,
  styles: `.bg {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -10;
    top: 0;
    left: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }


  .card {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 360px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 0 32px;
    border-top: 1px solid hsla(0, 0%, 1000%, 0.5);
    border-left: 1px solid hsla(0, 0%, 1000%, 0.5);
    background-image: linear-gradient(90deg, rgba(99, 99, 99, 0.1), rgba(99, 99, 99, 0.1) 1px, transparent 0, transparent),
      linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) -20%, transparent 15%),
      linear-gradient(0deg, hsla(0, 0%, 100%, 0.1), transparent 25%);
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px 5px hsla(0, 0%, 100%, 0.15);
    backdrop-filter: blur(3px);
    border-radius: 15px;
    transform: translate(-50%, -50%);
    /* text */
    font-size: 20px;
    text-align: center;
    color: #fff;
    text-shadow: 0 0 2px #000;
  }

  .button_group {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    margin: 10px 0;
    gap: 12px;
  }

  .button {
    display: block;
    width: 100%;
    height: 42px;
    line-height: 40px;
    color: #000;
    background-color: #fff;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid #fff;
    transition:
      color 0.3s,
      background-color 0.3s;
  }

  .button:hover {
    color: #fff;
    background-color: transparent;
  }

  .button.github {
    color: #fff;
    background-color: transparent;
  }

  .button.github:hover {
    color: #000;
    background-color: #fff;
  }
  `
})
export class AppComponent implements OnInit {
  private readonly title = config.title

  public readonly background = config.background

  public readonly avatar = config.avatar

  public readonly name = config.name

  public readonly description = config.description

  public readonly content = config.content

  public readonly button = config.button

  public hitokoto = '';

  public ngOnInit() {
    // document.title = this.config.title;
    this.loadParticles();
    this.fetchHitokoto();
  }

  public async fetchHitokoto() {
    // try {
    //   this.hitokoto = await fetch('https://hotaru.icu/api/hitokoto/v2/?format=text').then(res => res.text());
    // } catch (error) {
    //   console.error('Error fetching hitokoto:', error);
    // }
  }

  public loadParticles() {
    particlesJS.load('particles-js', 'particles.json');
  }
}
