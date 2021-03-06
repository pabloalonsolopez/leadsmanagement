import { Injectable } from "@angular/core"
import { ViewContainerRef, Injector, ReflectiveInjector, Compiler, ComponentRef } from "@angular/core"

import { Observable, ReplaySubject } from "rxjs/Rx"

@Injectable()
export class ModalService {
    
  private vcRef: ViewContainerRef
  private injector: Injector
  public activeInstances: number = 0

  constructor(private compiler: Compiler) {}

  registerViewContainerRef(vcRef: ViewContainerRef): void {
    this.vcRef = vcRef
  }

  registerInjector(injector: Injector): void {
    this.injector = injector
  }

  create<T>(module: any, component: any, parameters?: Object): Observable<ComponentRef<T>> {
      let componentRef$ = new ReplaySubject()
      this.compiler.compileModuleAndAllComponentsAsync(module)
        .then(factory => {
            let componentFactory = factory.componentFactories.filter(item => item.componentType === component)[0]
            const childInjector = ReflectiveInjector.resolveAndCreate([], this.injector)
            let componentRef = this.vcRef.createComponent(componentFactory, 0, childInjector)
            Object.assign(componentRef.instance, parameters)
            this.activeInstances ++
            componentRef.instance["componentIndex"] = this.activeInstances
            componentRef.instance["destroy"] = () => {
                this.activeInstances--
                componentRef.destroy()
            }
            componentRef$.next(componentRef)
            componentRef$.complete()
        })
      return <Observable<ComponentRef<T>>> componentRef$.asObservable()
  }

}