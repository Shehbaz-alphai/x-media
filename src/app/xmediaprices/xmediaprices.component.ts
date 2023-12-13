import { Component } from '@angular/core';

@Component({
  selector: 'app-xmediaprices',
  templateUrl: './xmediaprices.component.html',
  styleUrl: './xmediaprices.component.css'
})
export class XmediapricesComponent {
data:Data[]=[
  {td1:"Industry",td2:"Package"},
  {td1:"Technology",td2:"Software Marketing Package"},
  {td1:"Healthcare",td2:"Healthcare Marketing Package"},
  {td1:"Hospitality",td2:"Hospitality Industry Marketing Package"},
  {td1:"Real Estate",td2:"Real Estate Marketing Package"},
  {td1:"Manufacturing  ",td2:"Industrial Marketing Package"},
  {td1:"Retail",td2:"E-Commerce Marketing Package"},
  {td1:"Education",td2:"Educational Marketing Package"},
  {td1:"Financial Services",td2:"Financial Services Marketing Package"},
  {td1:"Nonprofit",td2:"Nonprofit Marketing Package"},
  {td1:"Professional Services",td2:"B2B Marketing Package"},
  {td1:"Consumer Goods",td2:"Consumer Goods Marketing Package"},

]
tableData = [
  {
    service: 'Social Media Audit',
  
  },
  {
    service: 'Set Up and Optimization of Business Page/Profile',
  },
  {
    service: 'Page Management',
  
  },
  {
    service: 'Content Calendar',
  },
  {
    service: 'Content Creation (5 posts/week)',
  
  },
  {
    service: 'Hashtag Optimization',
  },
  {
    service: 'Image Alt Text',
  
  },
  {
    service: 'Community Management',
  },
  {
    service: 'Social Media Engagement Campaigns',
  },
  {
    service: 'Monthly Reporting & Goal Evaluation',
  },
  {
    service: 'Social Media Listening',
  },
  {
    service: 'Social Media Advertisement Campaigns (up to $500/month) ',
  },
  {
    service: 'Social Media Crisis Management ',
  },
  {
    service: 'Social Media Influencer Marketing (up to 3 influencers/month) ',
  },
  {
    service: 'Social Media Video Production (up to 1 video/month) ',
  },
  {
    service: 'Social Media Live Streaming (up to 2 hours/month) ',
  },{
    service:"Price  "
  }
];

packages = ['Essential Package', 'Growth Package', 'Premium Package', 'Custom Package'];

getPackagePropertyName(row: any, packageName: string): string {
  return row[packageName.toLowerCase().replace(/ /g, '') + 'Package'];
}
isRow2Visible: boolean = false;

toggleRow2Visibility() {
  this.isRow2Visible = !this.isRow2Visible;
}
}
export interface Data{
  td1:string,
  td2:string,
}