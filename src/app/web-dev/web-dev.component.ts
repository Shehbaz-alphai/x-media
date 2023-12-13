import { Component } from '@angular/core';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrl: './web-dev.component.css'
})
export class WebDevComponent {
  isRow2Visible: boolean = false;
  packages = ['Essential Package', 'Growth Package', 'Premium Package', 'Custom Package'];
  jsonServices={
    "social_media_marketing": {
      'title':'Social Media Marketing',
      "packages": [
        {
          "name": "Essential Package",
          "services": [
            {"name": "Social Media Audit", "icon": "icon_url_1"},
            {"name": "Set Up and Optimization of Business Page/Profile", "icon": "icon_url_2"},
            {"name": "Page Management", "icon": "icon_url_3"},
            {"name": "Content Calendar", "icon": "icon_url_4"},
            {"name": "Content Creation (5 posts/week)", "icon": "icon_url_5"},
            {"name": "Hashtag Optimization", "icon": "icon_url_6"},
            {"name": "Image Alt Text", "icon": "icon_url_7"},
            {"name": "Community Management", "icon": "icon_url_8"}
          ],
          "price": "$100/month"
        },
        {
          "name": "Growth Package",
          "services": [
            {"name": "Social Media Audit", "icon": "icon_url_1"},
            {"name": "Set Up and Optimization of Business Page/Profile", "icon": "icon_url_2"},
            {"name": "Page Management", "icon": "icon_url_3"},
            {"name": "Content Calendar", "icon": "icon_url_4"},
            {"name": "Content Creation (5 posts/week)", "icon": "icon_url_5"},
            {"name": "Hashtag Optimization", "icon": "icon_url_6"},
            {"name": "Image Alt Text", "icon": "icon_url_7"},
            {"name": "Community Management", "icon": "icon_url_8"},
            {"name": "Social Media Engagement Campaigns", "icon": "icon_url_9"},
            {"name": "Monthly Reporting & Goal Evaluation", "icon": "icon_url_10"},
            {"name": "Social Media Listening", "icon": "icon_url_11"},
            {"name": "Social Media Advertisement Campaigns (up to $500/month)", "icon": "icon_url_12"}
          ],
          "price": "$300/month"
        },
        {
          "name": "Premium Package",
          "services": [
            {"name": "Social Media Audit", "icon": "icon_url_1"},
            {"name": "Set Up and Optimization of Business Page/Profile", "icon": "icon_url_2"},
            {"name": "Page Management", "icon": "icon_url_3"},
            {"name": "Content Calendar", "icon": "icon_url_4"},
            {"name": "Content Creation (5 posts/week)", "icon": "icon_url_5"},
            {"name": "Hashtag Optimization", "icon": "icon_url_6"},
            {"name": "Image Alt Text", "icon": "icon_url_7"},
            {"name": "Community Management", "icon": "icon_url_8"},
            {"name": "Social Media Engagement Campaigns", "icon": "icon_url_9"},
            {"name": "Monthly Reporting & Goal Evaluation", "icon": "icon_url_10"},
            {"name": "Social Media Listening", "icon": "icon_url_11"},
            {"name": "Social Media Advertisement Campaigns (up to $500/month)", "icon": "icon_url_12"},
            {"name": "Social Media Crisis Management", "icon": "icon_url_13"},
            {"name": "Social Media Influencer Marketing (up to 3 influencers/month)", "icon": "icon_url_14"},
            {"name": "Social Media Video Production (up to 1 video/month)", "icon": "icon_url_15"},
            {"name": "Social Media Live Streaming (up to 2 hours/month)", "icon": "icon_url_16"}
          ],
          "price": "$500/month"
        },
        {
          "name": "Custom Package",
          "services": [
            {"name": "Social Media Audit", "icon": "icon_url_1"},
            {"name": "Set Up and Optimization of Business Page/Profile", "icon": "icon_url_2"},
            {"name": "Page Management", "icon": "icon_url_3"},
            {"name": "Content Calendar", "icon": "icon_url_4"},
            {"name": "Content Creation (5 posts/week)", "icon": "icon_url_5"},
            {"name": "Hashtag Optimization", "icon": "icon_url_6"},
            {"name": "Image Alt Text", "icon": "icon_url_7"},
            {"name": "Community Management", "icon": "icon_url_8"},
            {"name": "Social Media Engagement Campaigns", "icon": "icon_url_9"},
            {"name": "Monthly Reporting & Goal Evaluation", "icon": "icon_url_10"},
            {"name": "Social Media Listening", "icon": "icon_url_11"},
            {"name": "Social Media Advertisement Campaigns (up to $500/month)", "icon": "icon_url_12"},
            {"name": "Social Media Crisis Management", "icon": "icon_url_13"},
            {"name": "Social Media Influencer Marketing (up to 3 influencers/month)", "icon": "icon_url_14"},
            {"name": "Social Media Video Production (up to 1 video/month)", "icon": "icon_url_15"},
            {"name": "Social Media Live Streaming (up to 2 hours/month)", "icon": "icon_url_16"}
          ],
          "price": "Varies"
        }
      ]
    },
    "seo": {
      'title':'SEO',
      "packages": [
        {
          "name": "Essential Package",
          "services": [
            {"name": "Keyword Research", "icon": "icon_url_17"},
            {"name": "On-Page Optimization", "icon": "icon_url_18"},
            {"name": "Technical SEO", "icon": "icon_url_19"},
            {"name": "Link Building", "icon": "icon_url_20"},
            {"name": "Content Creation (3 blog post/week)", "icon": "icon_url_21"},
            {"name": "Monthly Reporting & Goal Evaluation", "icon": "icon_url_22"}
          ],
          "price": "$500/month"
        },
        {
          "name": "Growth Package",
          "services": [
            {"name": "Keyword Research", "icon": "icon_url_17"},
            {"name": "On-Page Optimization", "icon": "icon_url_18"},
            {"name": "Technical SEO", "icon": "icon_url_19"},
            {"name": "Link Building", "icon": "icon_url_20"},
            {"name": "Content Creation (3 blog post/week)", "icon": "icon_url_21"},
            {"name": "Monthly Reporting & Goal Evaluation", "icon": "icon_url_22"},
            {"name": "Competitive Analysis", "icon": "icon_url_23"},
            {"name": "Local SEO", "icon": "icon_url_24"}
          ],
          "price": "$1000/month"
        },
        {
          "name": "Premium Package",
          "services": [
            {"name": "Keyword Research", "icon": "icon_url_17"},
            {"name": "On-Page Optimization", "icon": "icon_url_18"},
            {"name": "Technical SEO", "icon": "icon_url_19"},
            {"name": "Link Building", "icon": "icon_url_20"},
            {"name": "Content Creation (3 blog post/week)", "icon": "icon_url_21"},
            {"name": "Monthly Reporting & Goal Evaluation", "icon": "icon_url_22"},
            {"name": "Competitive Analysis", "icon": "icon_url_23"},
            {"name": "Local SEO", "icon": "icon_url_24"},
            {"name": "Enterprise SEO", "icon": "icon_url_25"},
            {"name": "E-Commerce SEO", "icon": "icon_url_26"},
            {"name": "SEO Consulting", "icon": "icon_url_27"}
          ],
          "price": "$2000/month"
        },
        {
          "name": "Custom Package",
          "services": [
            {"name": "Keyword Research", "icon": "icon_url_17"},
            {"name": "On-Page Optimization", "icon": "icon_url_18"},
            {"name": "Technical SEO", "icon": "icon_url_19"},
            {"name": "Link Building", "icon": "icon_url_20"},
            {"name": "Content Creation (3 blog post/week)", "icon": "icon_url_21"},
            {"name": "Monthly Reporting & Goal Evaluation", "icon": "icon_url_22"},
            {"name": "Competitive Analysis", "icon": "icon_url_23"},
            {"name": "Local SEO", "icon": "icon_url_24"},
            {"name": "Enterprise SEO", "icon": "icon_url_25"},
            {"name": "E-Commerce SEO", "icon": "icon_url_26"},
            {"name": "SEO Consulting", "icon": "icon_url_27"}
          ],
          "price": "Varies"
        }
      ]
    }
  }
  
  toggleRow2Visibility() {
    this.isRow2Visible = !this.isRow2Visible;
  }
}
