# SvStarRating
![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)
![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![]


##Demo
http://localhost:4200/home/rating
##Installation 
***
Install with NPM

> npm i sv-star-rating
>>>
```bash
npm i sv-star-rating
```

##Options
***
| Name  | Type | Description |
| ------------- |:-------------:|------------|
| margin      | string     |------------|
| bgColor     | string     |------------|
| activeBgColor      | string     |------------|
| size      | string     |------------|
| value      | string / number    |------------|
| readonly      | boolean    |------------|
| disabled      | boolean    |------------|
| radiusRatio      | number     |------------|
| innerOuterRadiusRatio      | number  |------------|


##Usage

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
***

##Example
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

##Author
[Mehdi Sadeghian](https://github.com/sadeghianme)
[Samira Vahidi](https://github.com/svahidi)





