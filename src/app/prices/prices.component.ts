import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css',
})
export class PricesComponent {
  packages = ['Basic', 'Standard', 'Premium', 'Custom '];

  services = [
    {
      isVisible: false,
      serviceName: 'SOCIAL MEDIA MARKETING',
      services: [
        {
          name: 'Page/channel evaluation',
          icons: [false, true, true, true],
          strong:false,
          toolTip:
            'The seller will review your page or channel to understand your audience and niche, and make informed recommendations.',
        },
        {
          name: 'Content Creation',
          icons: [true, true, true, true],
          strong:false,
          toolTip:
            'The seller will create content to be published on your social media accounts.',
        },
        {
          name: 'Schedule posts',
          icons: [true, true, true, true],
          strong:false,
          toolTip:
            'The seller will schedule or publish your posts during the agreed-upon management duration.',
        },
        {
          name: 'Reporting',
          icons: [false, true, true, true],
          strong:false,
          toolTip:
            'The seller will provide a progress report and will analyze account performance during or after the management period.',
        },
        {
          name: 'Engagement with followers',
          icons: [true, true, true, true],
          strong:false,
          toolTip:
            'The seller will engage with your followers through likes, shares, comments and direct messages to increase satisfaction and grow your audience.',
        },
        {
          name: 'Content Calendar',
          icons: [true, true, true, true],
          strong:false,
          toolTip:
            'The planned content across various platforms, ensuring consistency and effective communication. Dates, platforms, content types, and overarching themes or campaigns.',
        },
        {
          name: 'Number of platforms',
          icons: [3, 5, 7, true],
          strong:false,
          toolTip:
            'The number of social media platforms that the seller will handle.',
        },
        {
          name: 'Action plan',
          icons: [false, true, true, true],
          strong:false,
          toolTip:
            'The seller will create a list of action steps you can use as a short-term strategy following the completion of work.',
        },
        {
          name: 'Social Media Audit',
          icons: [true, true, true, true],
          strong:false,
          toolTip:
            'The seller will conduct a comprehensive analysis of your social media presence, identifying strengths and areas for improvement.',
        },
        {
          name: 'Hashtag Optimization',
          icons: [false, true, true, true],
          strong:false,
          toolTip:
            'The seller will strategically optimize hashtags to enhance the discoverability and reach of your content across social media platforms.',
        },
        {
          name: 'Social Media Video Production',
          icons: [false, 1, 2, true],
          strong:false,
          toolTip:
            'The seller will craft engaging and shareable video content tailored for your target audience, elevating your social media presence.',
        },
        {
          name: 'Community Management',
          icons: [true, true, true, true],
          strong:false,
          toolTip:
            'The seller will foster a sense of community by actively engaging with your audience, moderating discussions, and addressing inquiries or concerns.',
        },
        {
          name: 'Social Media Live Streaming',
          icons: ['2 hours', 'upto 2 hours', 'upto 2 hours', true],
          strong:false,
          toolTip:
            'The seller will execute live streaming sessions, leveraging real-time interaction to connect with your audience on social media.',
        },
        {
          name: 'Posts Per Month',
          icons: [10, 14, 18, true],
          strong:false,
          toolTip:
            '(Static/Animated) Social Media Management Paid Ad Campaigns.',
        },
        {
          name: 'Profile Setup',
          icons: [false, true, true, true],
          strong:false,
          toolTip:
            'The seller will establish and optimize your social media profiles, ensuring a cohesive and professional brand image across platforms.',
        },
        {
          name: ' Social Media Influencer Marketing',
          icons: ['on demand', 'on demand', 'on demand', true],
          strong:false,
          toolTip:
            'The seller will collaborate with influencers to amplify your brands reach, leveraging their audience and credibility for effective social media marketing.',
        },
      ],
      prices: [
        { tier: 'Basic', price: '$350' },
        { tier: 'Standard', price: '$550' },
        { tier: 'Premium', price: '$750' },
        { tier: 'Custom', price: 'Varies' },
      ],
    },
    {
      isVisible: false,
      serviceName: 'SEO',
      services: [
        {
          name: '',
          headername: 'Keyword Research',
          isSingline: true,
          strong:false,
          toolTip:
            'Conducting a thorough exploration to identify strategic keywords for optimal search engine visibility.',
        },
        {
          name: 'In-Depth Analysis',
          icons: [true, true, true, true],
          strong:false,
          isSingline: false,
        },
        {
          name: 'Content Duplicacy Check',
          icons: [true, true, true, true],
          strong:false,
          isSingline: false,
        },
        {
          name: 'Initial Backlinks Analysis',
          icons: [true, true, true, true],
          strong:false,
          isSingline: false,
        },
        {
          name: 'Google Penalty Check',
          icons: [true, true, true, true],
          strong:false,
          isSingline: false,
        },
        {
          name: '',
          headername: 'On-Page Optimization',
          isSingline: true,
          strong:false,
          toolTip:
            'Enhancing individual webpage elements, including titles, meta tags, content, and links, for improved search engine rankings.',
        },
        {
          name: 'Pages',
          icons: ['upto 3', 'upto 5', 'upto 10', true],
          isSingline: false,
          strong:false,
        },
        { name: 'Title Page', icons: [3, 5, 10, true], isSingline: false },
        {
          name: 'Meta Tags',
          icons: [3, 5, 10, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Content Optimization',
          icons: [3, 5, 10, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Image & Hyperlinks',
          icons: [3, 5, 10, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Inbound/Outbound Link Structuring',
          icons: [3, 5, 10, true],
          isSingline: false,
          strong:false,
        },
        {
          name: '',
          headername: 'Technical analysis',
          isSingline: true,
          strong:false,
          toolTip:
            'Implementing technical measures such as sitemap creation, canonicalization, and page speed analysis to enhance website performance.',
        },
        {
          name: 'Sitemap Creation',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Canonicalisation/301 Redirect',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Robots.txt Creation/Optimisation',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Sitemap Creation/Optimisation',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Responsive Analysis',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Page Speed Analysis',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Hyperlink Analysis',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: '',
          headername: 'Tool Setup Optimization',
          isSingline: true,
          strong:false,
          toolTip:
            'Configuring essential tools like Google Analytics and Search Console for comprehensive SEO monitoring and insights.',
        },
        {
          name: 'Google Analytics Setup ',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Google Search Console Setup',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: '',
          headername: 'Link Building',
          isSingline: true,
          strong:false,
          toolTip:
            'Building a strong online presence through strategic link-building techniques like social bookmarking and profile backlinks.',
        },
        {
          name: 'Social Bookmarking',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Profile Backlinks',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: 'Local Business Directory/Citation3',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: '',
          headername: 'Competitive Analysis',
          isSingline: true,
          strong:false,
          toolTip:
            'Building a strong online presence through strategic link-building techniques like social bookmarking and profile backlinks.',
        },
        {
          name: '',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: '',
          headername: 'Reporting',
          isSingline: true,
          strong:false,
          toolTip:
            'The seller will provide a progress report and will analyze account performance during or after the management period.',
        },
        {
          name: '',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
        {
          name: '',
          headername: 'SEO Consultancy',
          isSingline: true,
          strong:false,
          toolTip:
            'Providing expert guidance and recommendations to optimize overall SEO strategies for maximum online visibility.',
        },
        {
          name: '',
          icons: [true, true, true, true],
          isSingline: false,
          strong:false,
        },
      ],
      prices: [
        { tier: 'Basic', price: '$500' },
        { tier: 'Standard', price: '$700' },
        { tier: 'Premium', price: '$1500' },
        { tier: 'Custom', price: 'Varies' },
      ],
    },
    {
      serviceName: 'UI/UX Design',
      services: [
        {
          name: 'User Research',
          icons: [true, true, true, true],
          toolTip:
            'Conducting in-depth analysis and understanding of your target audience to inform a user-centric design approach.',
        },
        {
          name: 'Responsive Design',
          icons: [false, true, true, true],
          toolTip:
            'Crafting visually appealing interfaces that seamlessly adapt to various devices.',
        },
        {
          name: 'Wireframing',
          icons: [true, true, true, true],
          toolTip:
            'The seller will schedule or publish your posts during the agreed-upon management duration.',
        },
        {
          name: 'Information Architecture',
          icons: [false, true, true, true],
          toolTip:
            'Strategically organizing and structuring content to enhance user navigation and comprehension.',
        },
        {
          name: 'Custom Asset Design',
          icons: [false, true, true, true],
          toolTip:
            'Creating unique and visually compelling graphics and elements tailored for your brands digital presence.',
        },
        {
          name: 'Usability Testing',
          icons: [true, true, true, true],
          toolTip:
            'Rigorous evaluation of prototypes to identify and address potential user experience issues, ensuring optimal functionality.',
        },
        {
          name: 'UI/UX Consulting',
          icons: [false, true, true, true],
          toolTip:
            'Offering expert guidance and insights to optimize the user interface and experience design.',
        },
        {
          name: 'Number of Pages or Screens',
          icons: [10, 20, 'upto 20', true],
          toolTip:
            'Designing the quantity of pages or screens for an intuitive and effective user journey.',
        },
        {
          name: 'Prototyping',
          icons: [true, true, true, true],
          toolTip:
            'Developing interactive prototypes to visualize and refine the user interface.',
        },
        {
          name: 'Price',
          icons: ['$100', '$200', '$500', 'Varies'],
          strong:true
        },
        // ],
        // prices1: [
        //   { tier: 'Basic', price: '$100' },
        //   { tier: 'Standard', price: '$200' },
        //   { tier: 'Premium', price: '$500' },
        //   { tier: 'Custom', price: 'Varies' },
        // ],
        {
          name: '',
          headername: 'Single Landing Page',
          isSingline: true,
        },
        {
          name: 'Responsive design',
          icons: [true, true, true, true],
          isSingline: false,
          toolTip:
            'The seller will create a user-centric UI/UX with responsive design for seamless and visually appealing experiences across various devices.',
        },
        {
          name: 'Number of designed sections',
          icons: [6, 8, 10, true],
          isSingline: false,
          toolTip:
            'This is the number of sections the seller will design. A section is a single content block. Multiple sections are combined to comprise an entire landing page.',
        },
      ],
      prices: [
        { tier: 'Basic', price: '$400' },
        { tier: 'Standard', price: '$500' },
        { tier: 'Premium', price: '$650' },
        { tier: 'Custom', price: 'Varies' },
      ],
    },
    {
      serviceName: '2D 3D ANIMATION',
      services: [
        {
          name: '',
          headername: '2D',
          isSingline: true,
          strong:false,
        },
        {
          name: 'Concept Development',
          icons: [false, true, true, true],
          strong:false,
        },
        {
          name: 'Running time (seconds)',
          icons: [15, 30, 60, true],
          toolTip: 'The final length of the animation you will receive.',
          strong:false,
        },
        {
          name: 'Character Design',
          icons: [false, false, true, true],
          strong:false,
        },
        {
          name: 'Background Design',
          icons: [true, true, true, true],
          strong:false,
        },
        {
          name: 'No. of Video',
          icons: [1, 2, 3, true],
          strong:false,
        },
        {
          name: 'Delivery Time',
          icons: [15, 25, 'month', true],
          strong:false,
        },
        {
          name: 'Prices',
          icons: ['$350', '$700', '$1500', 'Varies'],
          strong:true,
          toolTip:
            'Developing interactive prototypes to visualize and refine the user interface.',
        },
        {
          name: '',
          headername: '3D',
          isSingline: true,
          strong:false,
        },
        {
          name: 'Concept Development',
          icons: [false, true, true, true],
          strong:false,
        },
        {
          name: 'Running time (seconds)',
          icons: [15, 30, 60, true],
          toolTip: 'The final length of the animation you will receive.',
          strong:false,
        },
        {
          name: 'Character Design',
          icons: [false, false, true, true],
          strong:false,
        },
        {
          name: 'Background Design',
          icons: [true, true, true, true],
          strong:false,
        },
        {
          name: 'No. of Video',
          icons: [1, 2, 3, true],
          strong:false,
        },
        {
          name: 'Delivery Time',
          icons: [15, 25, 'month', true],
          strong:false,
        },
        
      ],
      prices: [
        { tier: 'Basic', price: '$350' },
        { tier: 'Standard', price: '700' },
        { tier: 'Premium', price: '$1500' },
        { tier: 'Custom', price: 'Varies' },
      ],
    },
    {
      serviceName: 'Website Development',
      services: [
        {
          name: 'Web Design',
          icons: [true, true, true, true],
          strong:false,
        },
        {
          name: 'Website Development',
          icons: [true, true, true, true],
          strong:false,
        },
        {
          name: 'Content Management System (CMS) Setup',
          icons: [true, true, true, true],
          strong:false,
        },
        {
          name: 'Responsive Design',
          icons: [false, true, true, true],
          strong:false,
        },
        {
          name: 'Basic SEO Optimization',
          icons: [true, true, true, true],
          strong:false,
        },
        {
          name: 'Website Launch',
          icons: [true, true, true, true],
        },
        {
          name: 'Website Maintenance & Support',
          icons: [false, true, true, true],
        },
        {
          name: 'Custom Functionality Development',
          icons: [false, true, true, true],
        },
        {
          name: 'E-Commerce Development',
          icons: [false, true, true, true],
        },
        {
          name: 'Website Security',
          icons: [false, true, true, true],
        },
        {
          name: 'Detailed code comments',
          icons: [false, false, true, true],
        },
        {
          name: 'Price',
          icons: ['$500', '$1200', '$2000', 'Varies'],
          strong:true,
        },
        {
          name: '',
          headername: 'Single Landing Page',
          isSingline: true,
        },
        {
          name: 'Responsive design',
          icons: [true, true, true, true],
          isSingline: false,
          toolTip:
            'The seller will create a user-centric UI/UX with responsive design for seamless and visually appealing experiences across various devices.',
        },
        {
          name: 'Number of designed sections',
          icons: [6, 8, 10, true],
          isSingline: false,
          toolTip:
            'This is the number of sections the seller will design. A section is a single content block. Multiple sections are combined to comprise an entire landing page.',
        },
      ],
      prices: [
        { tier: 'Basic', price: '$600' },
        { tier: 'Standard', price: '$750' },
        { tier: 'Premium', price: '$1500' },
        { tier: 'Custom', price: 'Varies' },
      ],
    },
    {
      isVisible: false,
      serviceName: 'REAL ESTATE MARKETING',
      services: [
        {
          name: 'Property Listing Creation & Optimization',
          icons: [false, true, true, true],
          toolTip:
            'The seller crafts and optimizes compelling property listings for maximum online visibility.',
        },
        {
          name: 'Listing Syndication to Major Real Estate Websites',
          icons: [true, true, true, true],
          toolTip:
            'The seller ensures broad exposure by syndicating property listings across key real estate platforms.',
        },
        {
          name: 'Professional Photography',
          icons: [false, true, true, true],
          toolTip:
            'The seller captures high-quality images to showcase properties and enhance their market appeal.',
        },
        {
          name: 'Virtual Tours',
          icons: [false, true, true, true],
          toolTip:
            'The seller creates immersive virtual tours, providing a dynamic and interactive viewing experience for potential buyers.',
        },
        {
          name: 'Social Media Marketing',
          icons: [true, true, true, true],
          toolTip:
            'The seller leverages social media platforms to promote properties and engage with a targeted real estate audience.',
        },
        {
          name: 'Email Marketing',
          icons: [false, true, true, true],
          toolTip:
            'The seller implements strategic email campaigns to reach and inform prospective buyers about available properties.',
        },
        {
          name: 'Paid Advertising',
          icons: [false, true, true, true],
          toolTip:
            'The seller executes targeted paid advertising campaigns to boost visibility and drive qualified leads.',
        },
        {
          name: 'Content Creation',
          icons: ['5 per month', '10 per month', '15 per month', true],
          toolTip:
            'The seller produces compelling content, including visuals and copy, to effectively market real estate properties.',
        },
        {
          name: 'Market Analysis & Reporting',
          icons: [false, true, true, true],
          toolTip:
            'The seller provides in-depth market analysis and regular reports, offering valuable insights for informed decision-making.',
        },
        {
          name: 'Real Estate Consulting',
          icons: [false, false, true, true],
          toolTip:
            'The seller offers expert advice and insights, guiding clients through the intricacies of real estate transactions.',
        },
      ],
      prices: [
        { tier: 'Basic', price: '$500' },
        { tier: 'Standard', price: '$1200' },
        { tier: 'Premium', price: '$2000' },
        { tier: 'Custom', price: 'Varies' },
      ],
    },
    {
      isVisible: false,
      serviceName: 'SOFTWARE MARKETING',
      services: [
        {
          name: 'Software Product Go to Market Strategy	',
          icons: [true, true, true, true],
        },
        {
          name: 'Software Product Positioning',
          icons: [true, true, true, true],
        },
        { name: 'Software Product Messaging', icons: [true, true, true, true] },
        {
          name: 'Content CreationSEO Optimization	',
          icons: [true, true, true, true],
        },
        {
          name: 'Product Social Media Marketing',
          icons: [true, true, true, true],
        },
        { name: 'Email Marketing', icons: [true, true, true, true] },
        { name: 'Paid Advertising', icons: [false, true, true, true] },
        { name: 'Product Lead Generation', icons: [false, true, true, true] },
        { name: 'Sales Funnel Optimization', icons: [false, true, true, true] },
        {
          name: 'Customer Relationship Management (CRM)',
          icons: [false, false, true, true],
        },
        { name: 'Consultancy', icons: [false, false, true, true] },
      ],
      prices: [
        { tier: 'Basic', price: '$500/month' },
        { tier: 'Standard', price: '$1000/month' },
        { tier: 'Premium', price: '$2000/month' },
        { tier: 'Custom', price: 'Varies' },
      ],
    },
    {
      isVisible: false,
      serviceName: 'RETAIL',
      services: [
        {
          name: 'Page/channel evaluation',
          icons: [false, true, true, true],
          toolTip:
            'The seller will review your page or channel to understand your audience and niche, and make informed recommendations.',
        },
        {
          name: 'Content Creation',
          icons: [true, true, true, true],
          toolTip:
            'The seller will create content to be published on your social media accounts.',
        },
        {
          name: 'Schedule posts',
          icons: [true, true, true, true],
          toolTip:
            'The seller will schedule or publish your posts during the agreed-upon management duration.',
        },
        {
          name: 'Reporting',
          icons: [false, true, true, true],
          toolTip:
            'The seller will provide a progress report and will analyze account performance during or after the management period.',
        },
        {
          name: 'Engagement with followers',
          icons: [true, true, true, true],
          toolTip:
            'The seller will engage with your followers through likes, shares, comments and direct messages to increase satisfaction and grow your audience.',
        },
        {
          name: 'Content Calendar',
          icons: [true, true, true, true],
          toolTip:
            'The planned content across various platforms, ensuring consistency and effective communication. Dates, platforms, content types, and overarching themes or campaigns.',
        },
        {
          name: 'Number of platforms',
          icons: [3, 5, 7, true],
          toolTip:
            'The number of social media platforms that the seller will handle.',
        },
        {
          name: 'Action plan',
          icons: [false, true, true, true],
          toolTip:
            'The seller will create a list of action steps you can use as a short-term strategy following the completion of work.',
        },
        {
          name: 'Social Media Audit',
          icons: [true, true, true, true],
          toolTip:
            'The seller will conduct a comprehensive analysis of your social media presence, identifying strengths and areas for improvement.',
        },
        {
          name: 'Hashtag Optimization',
          icons: [false, true, true, true],
          toolTip:
            'The seller will strategically optimize hashtags to enhance the discoverability and reach of your content across social media platforms.',
        },
        {
          name: 'Social Media Video Production',
          icons: [false, 1, 2, true],
          toolTip:
            'The seller will craft engaging and shareable video content tailored for your target audience, elevating your social media presence.',
        },
        {
          name: 'Community Management',
          icons: [true, true, true, true],
          toolTip:
            'The seller will foster a sense of community by actively engaging with your audience, moderating discussions, and addressing inquiries or concerns.',
        },
        {
          name: 'Social Media Live Streaming',
          icons: ['2 hours', 'upto 2 hours', 'upto 2 hours', true],
          toolTip:
            'The seller will execute live streaming sessions, leveraging real-time interaction to connect with your audience on social media.',
        },
        {
          name: 'Posts Per Month',
          icons: [10, 14, 18, true],
          toolTip:
            '(Static/Animated) Social Media Management Paid Ad Campaigns.',
        },
        {
          name: 'Profile Setup',
          icons: [false, true, true, true],
          toolTip:
            'The seller will establish and optimize your social media profiles, ensuring a cohesive and professional brand image across platforms.',
        },
        {
          name: ' Social Media Influencer Marketing',
          icons: ['on demand', 'on demand', 'on demand', true],
          toolTip:
            'The seller will collaborate with influencers to amplify your brands reach, leveraging their audience and credibility for effective social media marketing.',
        },
        {
          name: 'Branding',
          icons: [false, true, true, true],
          toolTip:
            'The seller will develop and maintain a consistent brand identity across social media platforms, reinforcing your unique value proposition.',
        },
        {
          name: 'Pay-Per-Click (PPC) Advertising',
          icons: [false, true, true, true],
          toolTip:
            'The seller will implement targeted paid advertising campaigns on social media platforms to drive traffic, leads, and conversions.',
        },
        {
          name: 'Product Lead Generation',
          icons: [false, true, true, true],
          toolTip:
            'The seller will employ strategies to attract and capture potential customers, generating valuable leads for your products or services.',
        },
        {
          name: 'Product Sales Funnel Optimization',
          icons: [false, true, true, true],
          toolTip:
            'The seller will optimize the sales funnel on social media, streamlining the customer journey for increased conversions and revenue.',
        },
        {
          name: 'Consultancy',
          icons: [false, false, true, true],
          toolTip:
            'The seller will provide expert advice and guidance on social media strategies, helping you make informed decisions to achieve your business goals.',
        },
      ],
      prices: [
        { tier: 'Basic', price: '$500' },
        { tier: 'Standard', price: '$1500' },
        { tier: 'Premium', price: '$2000' },
        { tier: 'Custom', price: 'Varies' },
      ],
    },
    {
      isVisible: false,
      serviceName: 'HOSPITALITY',
      services: [
        {
          name: 'Page/channel evaluation',
          icons: [false, true, true, true],
          toolTip:
            'The seller will review your page or channel to understand your audience and niche, and make informed recommendations.',
        },
        {
          name: 'Content Creation',
          icons: [true, true, true, true],
          toolTip:
            'The seller will create content to be published on your social media accounts.',
        },
        {
          name: 'Schedule posts',
          icons: [true, true, true, true],
          toolTip:
            'The seller will schedule or publish your posts during the agreed-upon management duration.',
        },
        {
          name: 'Reporting',
          icons: [false, true, true, true],
          toolTip:
            'The seller will provide a progress report and will analyze account performance during or after the management period.',
        },
        {
          name: 'Engagement with followers',
          icons: [true, true, true, true],
          toolTip:
            'The seller will engage with your followers through likes, shares, comments and direct messages to increase satisfaction and grow your audience.',
        },
        {
          name: 'Content Calendar',
          icons: [true, true, true, true],
          toolTip:
            'The planned content across various platforms, ensuring consistency and effective communication. Dates, platforms, content types, and overarching themes or campaigns.',
        },
        {
          name: 'Number of platforms',
          icons: [3, 5, 7, true],
          toolTip:
            'The number of social media platforms that the seller will handle.',
        },
        {
          name: 'Action plan',
          icons: [false, true, true, true],
          toolTip:
            'The seller will create a list of action steps you can use as a short-term strategy following the completion of work.',
        },
        {
          name: 'Hashtag Optimization',
          icons: [false, true, true, true],
          toolTip:
            'The seller will strategically optimize hashtags to enhance the discoverability and reach of your content across social media platforms.',
        },
        {
          name: 'Social Media Video Production',
          icons: [false, 1, 2, true],
          toolTip:
            'The seller will craft engaging and shareable video content tailored for your target audience, elevating your social media presence.',
        },
        {
          name: 'Community Management',
          icons: [true, true, true, true],
          toolTip:
            'The seller will foster a sense of community by actively engaging with your audience, moderating discussions, and addressing inquiries or concerns.',
        },
        {
          name: 'Social Media Live Streaming',
          icons: ['2 hours', 'upto 2 hours', 'upto 2 hours', true],
          toolTip:
            'The seller will execute live streaming sessions, leveraging real-time interaction to connect with your audience on social media.',
        },
        {
          name: 'Posts Per Month',
          icons: [10, 14, 18, true],
          toolTip:
            '(Static/Animated) Social Media Management Paid Ad Campaigns.',
        },
        {
          name: 'Profile Setup',
          icons: [false, true, true, true],
          toolTip:
            'The seller will establish and optimize your social media profiles, ensuring a cohesive and professional brand image across platforms.',
        },
        {
          name: ' Social Media Influencer Marketing',
          icons: ['on demand', 'on demand', 'on demand', true],
          toolTip:
            'The seller will collaborate with influencers to amplify your brands reach, leveraging their audience and credibility for effective social media marketing.',
        },
        {
          name: 'Profile Setup',
          icons: [false, true, true, true],
          toolTip:
            'The seller will establish and optimize your social media profiles, ensuring a cohesive and professional brand image across platforms.',
        },
        {
          name: ' Social Media Influencer Marketing',
          icons: ['on demand', 'on demand', 'on demand', true],
          toolTip:
            'The seller will collaborate with influencers to amplify your brands reach, leveraging their audience and credibility for effective social media marketing.',
        },
        {
          name: 'Branding',
          icons: [false, true, true, true],
          toolTip:
            'The seller will develop and maintain a consistent brand identity across social media platforms, reinforcing your unique value proposition.',
        },
        {
          name: 'Pay-Per-Click (PPC) Advertising',
          icons: [false, true, true, true],
          toolTip:
            'The seller will implement targeted paid advertising campaigns on social media platforms to drive traffic, leads, and conversions.',
        },
      ],
      prices: [
        { tier: 'Basic', price: '$500' },
        { tier: 'Standard', price: '$1000' },
        { tier: 'Premium', price: '$1500' },
        { tier: 'Custom', price: 'Varies' },
      ],
    },
    {
      isVisible: false,
      serviceName: 'HEALTH CARE',
      services: [
        {
          name: 'Page/channel evaluation',
          icons: [false, true, true, true],
          toolTip:
            'The seller will review your page or channel to understand your audience and niche, and make informed recommendations.',
        },
        {
          name: 'Content Creation',
          icons: [true, true, true, true],
          toolTip:
            'The seller will create content to be published on your social media accounts.',
        },
        {
          name: 'Schedule posts',
          icons: [true, true, true, true],
          toolTip:
            'The seller will schedule or publish your posts during the agreed-upon management duration.',
        },
        {
          name: 'Reporting',
          icons: [false, true, true, true],
          toolTip:
            'The seller will provide a progress report and will analyze account performance during or after the management period.',
        },
        {
          name: 'Engagement with followers',
          icons: [true, true, true, true],
          toolTip:
            'The seller will engage with your followers through likes, shares, comments and direct messages to increase satisfaction and grow your audience.',
        },
        {
          name: 'Content Calendar',
          icons: [true, true, true, true],
          toolTip:
            'The planned content across various platforms, ensuring consistency and effective communication. Dates, platforms, content types, and overarching themes or campaigns.',
        },
        {
          name: 'Number of platforms',
          icons: [3, 5, 7, true],
          toolTip:
            'The number of social media platforms that the seller will handle.',
        },
        {
          name: 'Action plan',
          icons: [false, true, true, true],
          toolTip:
            'The seller will create a list of action steps you can use as a short-term strategy following the completion of work.',
        },
        {
          name: 'Hashtag Optimization',
          icons: [false, true, true, true],
          toolTip:
            'The seller will strategically optimize hashtags to enhance the discoverability and reach of your content across social media platforms.',
        },
        {
          name: 'Social Media Video Production',
          icons: [false, 1, 2, true],
          toolTip:
            'The seller will craft engaging and shareable video content tailored for your target audience, elevating your social media presence.',
        },
        {
          name: 'Community Management',
          icons: [true, true, true, true],
          toolTip:
            'The seller will foster a sense of community by actively engaging with your audience, moderating discussions, and addressing inquiries or concerns.',
        },
        {
          name: 'Social Media Live Streaming',
          icons: ['2 hours', 'upto 2 hours', 'upto 2 hours', true],
          toolTip:
            'The seller will execute live streaming sessions, leveraging real-time interaction to connect with your audience on social media.',
        },
        {
          name: 'Posts Per Month',
          icons: [10, 14, 18, true],
          toolTip:
            '(Static/Animated) Social Media Management Paid Ad Campaigns.',
        },
        {
          name: 'Profile Setup',
          icons: [false, true, true, true],
          toolTip:
            'The seller will establish and optimize your social media profiles, ensuring a cohesive and professional brand image across platforms.',
        },
        {
          name: ' Social Media Influencer Marketing',
          icons: ['on demand', 'on demand', 'on demand', true],
          toolTip:
            'The seller will collaborate with influencers to amplify your brands reach, leveraging their audience and credibility for effective social media marketing.',
        },
        {
          name: 'Profile Setup',
          icons: [false, true, true, true],
          toolTip:
            'The seller will establish and optimize your social media profiles, ensuring a cohesive and professional brand image across platforms.',
        },
        {
          name: ' Social Media Influencer Marketing',
          icons: ['on demand', 'on demand', 'on demand', true],
          toolTip:
            'The seller will collaborate with influencers to amplify your brands reach, leveraging their audience and credibility for effective social media marketing.',
        },
        {
          name: 'Branding',
          icons: [false, true, true, true],
          toolTip:
            'The seller will develop and maintain a consistent brand identity across social media platforms, reinforcing your unique value proposition.',
        },
        {
          name: 'Pay-Per-Click (PPC) Advertising',
          icons: [false, true, true, true],
          toolTip:
            'The seller will implement targeted paid advertising campaigns on social media platforms to drive traffic, leads, and conversions.',
        },
      ],
      prices: [
        { tier: 'Basic', price: '$500' },
        { tier: 'Standard', price: '$1000' },
        { tier: 'Premium', price: '$1500' },
        { tier: 'Custom', price: 'Varies' },
      ],
    },
  ];
}
