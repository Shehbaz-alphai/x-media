import { Component } from '@angular/core';
import { SocialMediaParent} from '../packages.model'
@Component({
  selector: 'app-deome',
  templateUrl: './deome.component.html',
  styleUrl: './deome.component.css'
})
export class DeomeComponent {
  isRow2Visible = false;
  packages = ['Essential Package', 'Growth Package', 'Premium Package', 'Custom Package'];
  jsonservices: SocialMediaParent[] = [
    {
      SocialMediaMarketing: {
        title: "social media marketing",
        packages: [
          {
            name: ["Service", "Essential Package", "Growth Package", "Premium Package", "Custom Package"],
            services: [
              { name: "Social Media Audit", icon: "icon_url_1", },
              { name: "Set Up and Optimization of Business Page/Profile", icon: "icon_url_2" },
              { name: "Page Management", icon: "icon_url_3" },
              { name: "Content Calendar", icon: "icon_url_4" },
              { name: "Content Creation (5 posts/week)", icon: "icon_url_5" },
              { name: "Hashtag Optimization", icon: "icon_url_6" },
              { name: "Image Alt Text", icon: "icon_url_7" },
              { name: "Community Management", icon: "icon_url_8" }
            ],
            price: ["$100/month", "$300/month", "$500/month", "Varies"]
          }
        ]
      },
      SEO: {
        title: "SEO",
        packages: [
          {
            name: ["Service", "Essential Package", "Growth Package", "Premium Package", "Custom Package"],
            services: [
              { name: "Social Media Audit", icon: "icon_url_1" },
              { name: "Set Up and Optimization of Business Page/Profile", icon: "icon_url_2" },
              { name: "Page Management", icon: "icon_url_3" },
              { name: "Content Calendar", icon: "icon_url_4" },
              { name: "Content Creation (5 posts/week)", icon: "icon_url_5" },
              { name: "Hashtag Optimization", icon: "icon_url_6" },
              { name: "Image Alt Text", icon: "icon_url_7" },
              { name: "Community Management", icon: "icon_url_8" }
            ],
            price: ["$100/month", "$300/month", "$500/month", "Varies"]
          }
        ]
      }
    }
  ];
  jsonData = {
    "packages": {
      "socialMediaMarketing": [
        {
          "name": "Essential Package",
          "services": [
            "Social Media Audit",
            "Set Up and Optimization of Business Page/Profile",
            "Page Management",
            "Content Calendar",
            "Content Creation (5 posts/week)",
            "Hashtag Optimization",
            "Image Alt Text",
            "Community Management"
          ],
          "price": "$100/month"
        },
        // ... (other packages)
      ],
      "seo": [
        {
          "name": "Essential Package",
          "services": [
            "Keyword Research",
            "On-Page Optimization",
            "Technical SEO",
            "Link Building",
            "Content Creation (3 blog post/week)",
            "Monthly Reporting & Goal Evaluation"
          ],
          "price": "$500/month"
        },
        // ... (other packages)
      ]
    }
  };



  toggleRow2Visibility() {
    this.isRow2Visible = !this.isRow2Visible;
  }
}
