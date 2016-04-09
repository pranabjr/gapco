'use strict';

angular.module('gapco')
        .service('PortfService', function() {
        
        var portfolio=[
            {
                name:"Homemaker",
                logo:"img/homemaker.png",
                image:"img/homemaker-demo.png",
                description:"Homemaker Pvt. Ltd. was established in December 1982 with the concept of introducing professional interior design services and innovative furniture in Nepal. Since then, the company has been providing comprehensive architectural work services, design-and-build interiors as well as supply of furniture to various national and multinational agencies on a turnkey basis. Over the years, the company has earned reputation for customer satisfaction by providing innovative design, quality product, on time delivery and competitive price."
                  
            },
            
            {
                name:"Intertours Nepal",
                logo:"img/intertours.jpg",
                image:"img/intertours-demo.png",
                description:"INTERTOURS NEPAL was established in 1987 under license from the Ministry of Tourism, Government of Nepal. Our organization has qualitatively grown over the years to now employ 45 full time dedicated travel professionals who are trained to offer only the best of what our country has to offer. We not only plan all holidays down to the minutest detail for your clients to ensure their enjoyable experiences while visiting our area, but also provide a virtual guarantee of value for money."
                  
            },
            
            {
                name:"The Last Frontiers",
                logo:"img/tlf.png",
                image:"img/tlf-demo.png",
                description:"The industry, partner and customer satisfaction that Last Frontiers Trekking has won are testimony to our excellent reputation and unbeatable experience in the region. Much of our growing business comes from referrals, and we are always happy to provide references. Our partner portfolio includes several well recognized travel agents, and suppliers and leading experts and professionals from all corners of the globe."
                  
            },
        ];
    
        var serve=[
            {
                name:".NET Software Development",
                description:"Microsoft .NET is a complete set of development tools for building ASP Web applications, XML Web services, desktop applications, and mobile applications. Visual Basic.NET, Visual C++.NET, Visual C#.NET, and Visual J#.NET all use the same integrated development environment (IDE), which allows them to share tools and facilitates in the creation of mixed-language solutions."
                  
            },
            
            {
                name:"PHP Development",
                description:"PHP is a widely used, general-purpose scripting language that was originally designed for web application development to produce dynamic web pages and nowadays PHP has become one of the major players on the web development market in the last many years. We develop high performance, secure and scalable PHP web application with highest standard of quality and on budget. We have a wealth of experience of PHP driven web development. "
                  
            },
            
            {
                name:"Website Design",
                description:"Gapco is an experienced web design company that offers our client's unparalleled customer service. From basic website creation to CMS solutions, we offer a full-range of web design services that will position your company competitively in the marketplace."
                  
            },
            
            {
                name:"Search Engine Optimization",
                description:"We offer natural and organic search engine optimization (SEO) campaigns. With our vast experience and personalized approach, your online marketing campaigns will achieve unmatched success. Approximately 80% of online internet users use the major search engines like Google , Bing or Yahoo to find what they are looking for. Online marketing with a blend of SEO can help your business stand out from the competition and lead to more sales."
                  
            },
        ];
    
        this.getPFs = function(){
                            return portfolio;
                        };
        
        this.getPF = function (index) {
                            return portfolio[index];

                        };
    
        this.getServs = function(){
                            return serve;
                        };
        
        this.getServ = function (index) {
                            return serve[index];

                        };
        

        });