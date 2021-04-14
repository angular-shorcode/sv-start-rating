<p align="center">
  <img style="text-align: center" src="https://angular-shortcode.web.app/assets/icons/logo-128.png"/>
  <h1 align="center">Angular Shortcode</h1>
</p>


[comment]: <> (![]&#40;https://angular-shortcode.web.app/assets/icons/logo-128.png&#41;)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) 
___
#SvStarRating

## Table of Contents

- [Live Demo](#demo) | [Stackblitz](#demo)
- [Installation](#installation)
- [Options](#options)
- [Usage](#usage)
- [Example](#example)
- [Author](#author)
- [Contact](#conatact)


<a name="demo"/>

##Demo

✨ https://angular-shortcode.web.app/home/rating ✨


<a name="installation"/>

##Installation 
***
Install with NPM

```bash
npm i sv-star-rating
```


<a name="options"/>

##Options
***

| Name                  | Type            | Default Value  |Description |
| --------------------- |:---------------:|:--------------:|------------|
| margin                | string          | 2px            |
| bgColor               | string          | #9c9c9c        |
| activeBgColor         | string          | gold           |
| size                  | string          | 40px           |
| value                 | string / number | 2              |
| readonly              | boolean         | false          |
| disabled              | boolean         | false          |
| radiusRatio           | number          | 16             |
| innerOuterRadiusRatio | number          | 4              |
| @Output() valueChange | number          |                |


<a name="usage"/>

##Usage
***

Import SvStarRatingModule in your app

```typescript
import { SvStarRatingModule } from 'sv-star-rating';

@NgModule({
  imports: [
    ...
    SvStarRatingModule
  ],
  ...
})
export class AppModule { }
```

<a name="example"/>

##Example
***
```html
<sv-star-rating
  margin="10px"
  bgColor="#a83838"
  activeBgColor="#2fc15b"
  size="40px"
  [(value)]="value"
  [readonly]="false"
  [disabled]="false"
  [radiusRatio]="40"
  [innerOuterRadiusRatio]="2">
</sv-star-rating>
```

<a name="auther"/>

##Author
***
`Mehdi Sadeghian` `Samira Vahidi`


<a name="conatact"/>

##Contact
***
 `github`
   - [Angular Shortcode](https://github.com/angular-shorcode/)
   - [Mehdi Sadeghian](https://github.com/sadeghianme)
   - [Samira Vahidi](https://github.com/svahidi)

  `linedIn`
   - [Mehdi Sadeghian](https://linkedin.com/in/mehdi-sadeghian-864912a5)
   - [Samira Vahidi](https://www.linkedin.com/in/samira-vahidi-2368856b)

  `twitter`




