import { Component, OnInit, ViewChild, ElementRef, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Element } from '../element'
import { ElementService } from '../element.service'
import { RouterLink } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';

import { ModalService } from '../_modal';


@Component({
  selector: 'app-periodic',
  templateUrl: './periodic.component.html',
  styleUrls: ['./periodic.component.css']
})
export class PeriodicComponent implements OnInit {

  private modalService : ModalService;
  elements: Element[];
  constructor(eService: ElementService, modalService: ModalService) {
    this.elements = eService.element;
    this.modalService = modalService;
    console.log(this.elements.length);
  }

  bodyText: string;
  weblink : string;
  ngOnInit(): void {
  }

  ChangeText(num: string) {
    let test = document.getElementById(num);

    test.style.background = "lightgray";



  }
  changeBack(num: string) {
    let test = document.getElementById(num);

    test.style.background = "white";
  }

  click(link: string) {
    
  }

  open(content) {
    
  }

  openModal(id: string, link : string) {
  this.weblink = link;
;
  
console.log(link);
    this.modalService.open(id);
}

closeModal(id: string) {
  this.modalService.close(id);
}

}
