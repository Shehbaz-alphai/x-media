import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendEmail } from './send-email.model';
import { ChatboxService } from './chatbox.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import LocomotiveScroll from 'locomotive-scroll';
import { BehaviourSubjectService } from './behaviour.subject.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  iconColor: string = 'white'; 
  @ViewChild('regForm') myRegForm: undefined;
  @ViewChild('scrollContent') scrollContent!: ElementRef;
  email1 = 'info@xmediaglobal.com';
  contactusform!: FormGroup;
  sendEmail = new SendEmail();
  loading: boolean = false;
  scroll: any;
  courses = [
    {
      name: 'Digital Analytics Fundamentals',
      duration: '8 Weeks',
      details: 'Certificate: Yes | Assignments: 5 | Hands-On Practice: 5 | Professional Experience:',
      isVisible: false
    },
    {
      name: 'E-commerce Marketing Strategies',
      duration: '8 Weeks',
      details: 'Certificate: Yes | Assignments: 5 | Hands-On Practice: 5 | Professional Experience:',
      isVisible: false
    },
    {
      name: 'Branding and Identity Design',
      duration: '8 Weeks',
      details: 'Certificate: Yes | Assignments: 5 | Hands-On Practice: 5 | Professional Experience:',
      isVisible: false
    },
    {
      name: 'UI/UX Designing',
      duration: '8 Weeks',
      details: 'Certificate: Yes | Assignments: 5 | Hands-On Practice: 5 | Professional Experience:',
      isVisible: false
    },
    {
      name: 'Graphic Designing',
      duration: '8 Weeks',
      details: 'Certificate: Yes | Assignments: 5 | Hands-On Practice: 5 | Professional Experience:',
      isVisible: false
    },
    {
      name: 'Brand Activation',
      duration: '8 Weeks',
      details: 'Certificate: Yes | Assignments: 5 | Hands-On Practice: 5 | Professional Experience:',
      isVisible: false
    },
    {
      name: 'Marketing & PR',
      duration: '8 Weeks',
      details: 'Certificate: Yes | Assignments: 5 | Hands-On Practice: 5 | Professional Experience:',
      isVisible: false
    },
   
    // Add more courses as needed
  ];  
  isRow2Visible: boolean = false;

  constructor(
    private emailService: ChatboxService,
    private rxFormBuilder: RxFormBuilder,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private bsServices: BehaviourSubjectService
  ) {}

  ngOnInit() {
    this.getForm();
    this.bsServices.services$.subscribe(res => {
      this.contactusform.get('subject')!.setValue(res);
    });
  }

  ngAfterViewInit(): void {
    // Check if elRef and its nativeElement are defined
    if (this.elRef && this.elRef.nativeElement) {
      const container = this.elRef.nativeElement.querySelector(
        '[data-scroll-container]'
      );
  
      if (container) {
        this.scroll = new LocomotiveScroll({
          el: container,
          smooth: true,
          direction: 'horizontal',
        });
  
        this.scroll.on('scroll', (obj: any) => {
          // console.log('Scroll value:', obj.scroll.x);
        });
      } else {
        console.error('Scroll container not found!');
      }
  
      const ro = new ResizeObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          const { inlineSize: width, blockSize: height } =
            entry.contentBoxSize[0];
          if (this.scroll) {
            this.scroll.update();
          }
        });
      });
  
      // Check if scrollContent and its nativeElement are defined
      if (this.scrollContent && this.scrollContent.nativeElement) {
        ro.observe(this.scrollContent.nativeElement);
      } else {
        console.error('Scroll content not found!');
      }
    } else {
      console.error('Element reference not found!');
    }
  }
  

  get contactusformValid() {
    if (this.contactusform.valid) {
      return false;
    } else {
      return true;
    }
  }

  async onSubmit() {
    if (this.contactusform.valid) {
      this.loading = true;
      this.emailService
        .postSendEmail(this.contactusform.value as SendEmail)
        .then((data) => {
          if (data) {
            this.toastr.success('Thanks for contacting us!');
            this.contactusform.reset();
            // alert("Thank you for contacting us!")
          }
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.toastr.error(
            'Oops, something went wrong.Please try again later'
          );
          this.contactusform.reset();
        });
    }
  }
  getservice(text: string, el: HTMLElement) {
    this.contactusform.get('subject')!.setValue(text);
    const currentScrollValue = this.scroll.scroll.instance.scroll.x;
    console.log('Current Scroll Value:', currentScrollValue);
    this.renderer.setProperty(el, 'scrollRight', 1000);
    el.scrollIntoView({ behavior: 'smooth' });
    this.cdr.detectChanges();
  }

  getForm() {
    this.contactusform = this.rxFormBuilder.formGroup(this.sendEmail);
    this.contactusform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      website: ['xmedia', Validators.required],
      comment: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }
  get name(){
    return this.contactusform.controls['name'];
  }
  get email(){
    return this.contactusform.controls['email'];
  }
  get comment(){
    return this.contactusform.controls['comment'];
  }
 

  toggleRow2Visibility(index: number) {
    this.courses[index].isVisible = !this.courses[index].isVisible;
  }
 registertoday(name:string,el: HTMLElement){
  this.contactusform.get('subject')!.setValue(name);
  el.scrollIntoView({ behavior: 'smooth' });
   this.cdr.detectChanges();
  }
}
