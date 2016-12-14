import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'f'
})

export class FPipe implements PipeTransform {
  
  transform(value: string): string {
    switch(value) {
      case 'label':
        return 'd(block) pb(5px) fw(600) fs(1.1rem) c(raven) tt(uppercase)'
      case 'form-control':
        return 'w(100%) b(1) bc(ghost) bc-focus(aluminium) bra(3px) px(15px) py(10px) c-placeholder(ghost) c-focus-placeholder(aluminium) ou(0) t(all) t-placeholder(all)'
      case 'button':
        return 'd(inline-block) va(middle) lh(36px) h(38px) b(1) bra(3px) px(20px) td(none) fw(600) fs(1.1rem) tt(uppercase) ls(0.1rem) t(all) cu(pointer) cu-disabled(default)'
      case 'button-alt':
        return 'bc(alabaster) bc-hover(white) bc-disabled(ghost) bgc(transparent) c(alabaster) c-hover(white) c-disabled(ghost)'
      case 'button-primary-alt':
        return 'bc(alabaster) bc-hover(white) bc-disabled(ghost) bgc(alabaster) bgc-hover(white) bgc-disabled(ghost) c(red)'
      default:
        return ''
    }
  }
   
}