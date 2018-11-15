import { Injectable, ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  setViewRef(viewRef: ViewContainerRef){
       this.viewRef = viewRef;
  }

  addComponent(compToAdd: any): any{

    // Accessing the Component Factory
     const factory = this.resolver.resolveComponentFactory(compToAdd);

     // Creating the component  using factory and passing it an Injector
     const compRef = factory.create(this.viewRef.injector);

     // Inserting the View part of the component
     this.viewRef.insert(compRef.hostView);

     return compRef.instance;
  }

  removeComponent() {

     this.viewRef.detach();

  }
}
