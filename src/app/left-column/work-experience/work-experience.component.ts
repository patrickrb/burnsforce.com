import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.less']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  jobs = [
    {
      company: "freightview.com",
      companyUrl: "https://freightview.com",
      title: "Senior Web Developer",
      description: "Full stack development using javascript on both front and backend with node.js, backbone, and Vue. Utilizing mongodb, redis, and other technologies as microservices with Docker. We enjoy a full CI pipeline to staging and production that allows us to deploy many times in a single day taking 'commit early, commit often' to heart.",
      start: "Feb 2017",
      end: "Present"
    },
    {
      company: "Torch.ai",
      companyUrl: "https://torch.ai/",
      title: "Lead Developer",
      description: "Front-end and back-end development for internal tool sets that provide research, analysis, consumer insights, innovation and R&D to assist clients with marcom, digital and professional technology services. Internal tools built with many technologies, including Mongo, Express, Angular, and Node; MEAN stack",
      start: "Jan 2014",
      end: "Feb 2017"
    },
    {
      company: "Keywest Technology",
      companyUrl: "https://www.keywesttechnology.com/",
      title: "Web Developer - Full Stack",
      description: "Developed a new SaaS product based using PHP,javascript,jquery,AJAX,Postgresql, HTML 5, and CSS 3. The software allows users to design, schedule, edit, and deploy content to their digital signage player(s) from anywhere in the world.",
      start: "Sep 2010",
      end: "Jan 2014"
    },
    {
      company: "Codero",
      companyUrl: "http://www.codero.com/",
      title: "Asterisk Administrator",
      description: "Developed and maintained 5 Asterisk Servers Internationally, clustered to reduce load and telecommunication costs. Ensured phone system is functioning 24/7/365, logging all call statistics and recording all phone calls.",
      start: "Mar 2008",
      end: "Oct 2010"
    },
    {
      company: "Codero",
      companyUrl: "http://www.codero.com/",
      title: "Linux Systems Administrator",
      description: "As a dedicated server support technician, we were involved in front line troubleshooting of all of our customers servers. Learned to correctly troubleshoot problems in a server environment without impacting users on the server.",
      start: "Jan 2006",
      end: "Mar 2008"
    }
  ]
  ngOnInit() {
  }

}
