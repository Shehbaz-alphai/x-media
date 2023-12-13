export class SocialMediaMarketing {
    title!: string;
    packages!: SocialMediaPackage[];
     
   
  }
  
  export class SocialMediaPackage {
    name!: string[];
    services!: SocialMediaService[];
    price!: string[];
  }
  
  export class SocialMediaService {
    name!: string;
    icon!: string;
  }
  export class SocialMediaParent {
    SocialMediaMarketing!: SocialMediaMarketing;
    SEO!: SocialMediaMarketing;
     
   
  }